// Audit every exported icon for defects, look-alikes and bad names.
//
//   node scripts/audit-icons.mjs            # summary + findings
//   node scripts/audit-icons.mjs --json     # machine-readable report
//
// Exits non-zero when a blocking check fails, so it can gate a release.
// Run from the repo root. No dependencies — it parses the JSX with regexes,
// which is enough because every icon file follows the same shape:
//
//   export function Name({ ...props }) { return (<BaseIcon …>…</BaseIcon>); }
import fs from 'node:fs';
import path from 'node:path';

const ICONS_DIR = 'src/icons';
const INTERNAL = new Set(['BaseIcon.jsx', 'Icon.jsx', 'aliases.js', 'index.js']);

// Coordinate grids used to decide whether two icons look the same. EXACT keeps
// the numbers as written; NEAR snaps them so sub-pixel redraws still collide.
const NEAR_GRID = 1.5;
const SHAPES = ['circle', 'rect', 'ellipse', 'line', 'polygon', 'polyline'];
const GEOM_ATTRS = ['cx', 'cy', 'r', 'rx', 'ry', 'x', 'y', 'x1', 'y1', 'x2', 'y2', 'width', 'height', 'points'];
const REQUIRED_GEOM = { rect: ['width', 'height'], circle: ['r'], ellipse: ['rx', 'ry'] };

const NUM = /[-+]?(?:\d*\.\d+(?:[eE][-+]?\d+)?|\d+(?:[eE][-+]?\d+)?)/g;
const PATH_CMD = /([MmLlHhVvCcSsQqTtAaZz])([^MmLlHhVvCcSsQqTtAaZz]*)/g;
const CMD_ARGC = { M: 2, L: 2, T: 2, H: 1, V: 1, C: 6, S: 4, Q: 4, A: 7, Z: 0 };

// ── parsing ──────────────────────────────────────────────────────────────────

// Split a file into one record per `export function`, keeping the source line
// so findings can be reported as file:line.
function readIcons() {
    const icons = [];
    for (const file of fs.readdirSync(ICONS_DIR).sort()) {
        if (!file.endsWith('.jsx') || INTERNAL.has(file)) continue;
        const lines = fs.readFileSync(path.join(ICONS_DIR, file), 'utf8').split('\n');
        const starts = [];
        lines.forEach((line, i) => {
            const m = /^export function (\w+)/.exec(line);
            if (m) starts.push([i, m[1]]);
        });
        starts.forEach(([start, name], i) => {
            const end = i + 1 < starts.length ? starts[i + 1][0] : lines.length;
            icons.push({ file, line: start + 1, name, body: lines.slice(start, end).join('\n') });
        });
    }
    return icons;
}

const at = (icon) => `${icon.file}:${icon.line}`;
const attrsOf = (tag) => Object.fromEntries([...tag.matchAll(/([\w:-]+)="([^"]*)"/g)].map((m) => [m[1], m[2]]));
const snap = (s, grid) => s.replace(NUM, (n) => String(Math.round(parseFloat(n) / grid)));
const viewBoxOf = (body) => (/viewBox="([^"]+)"/.exec(body) || [, '0 0 24 24'])[1];

// Every drawing instruction in the icon, as a comparable list of strings.
function drawing(body, grid) {
    const parts = [];
    for (const m of body.matchAll(/\bd="([^"]+)"/g)) {
        const d = grid ? snap(m[1], grid) : m[1];
        parts.push(d.replace(/[\s,]+/g, grid ? '' : ' ').trim().toUpperCase());
    }
    for (const tag of SHAPES) {
        for (const m of body.matchAll(new RegExp(`<${tag}\\b([^>]*)>`, 'g'))) {
            const kv = attrsOf(m[1]);
            const geom = GEOM_ATTRS.filter((k) => k in kv)
                .map((k) => k + (grid ? snap(kv[k], grid).replace(/[\s,]+/g, '') : kv[k]));
            if (geom.length) parts.push(tag[0].toUpperCase() + geom.join(''));
        }
    }
    return parts;
}

// The full rendered markup, minus data-part (which never changes appearance).
function markup(body) {
    const i = body.indexOf('<BaseIcon');
    return (i < 0 ? body : body.slice(i)).replace(/\s*data-part="[^"]*"/g, '').replace(/\s+/g, ' ').trim();
}

// Endpoint bounding box of a path. Control points are ignored: they overstate
// the box for every curve and would bury the real overflows in false positives.
function pathBBox(d) {
    let x = 0, y = 0, sx = 0, sy = 0;
    const pts = [];
    for (const [, cmd, args] of d.matchAll(PATH_CMD)) {
        const up = cmd.toUpperCase();
        const n = CMD_ARGC[up];
        const nums = (args.match(NUM) || []).map(Number);
        if (up === 'Z') { [x, y] = [sx, sy]; pts.push([x, y]); continue; }
        if (!n || !nums.length) continue;
        for (let k = 0; k + n <= nums.length; k += n) {
            const a = nums.slice(k, k + n);
            const rel = cmd === cmd.toLowerCase();
            if (up === 'H') x = rel ? x + a[0] : a[0];
            else if (up === 'V') y = rel ? y + a[0] : a[0];
            else {
                const [nx, ny] = up === 'A' ? [a[5], a[6]] : [a[n - 2], a[n - 1]];
                x = rel ? x + nx : nx;
                y = rel ? y + ny : ny;
            }
            pts.push([x, y]);
            if (up === 'M' && k === 0) [sx, sy] = [x, y];
        }
    }
    if (!pts.length) return null;
    const xs = pts.map((p) => p[0]);
    const ys = pts.map((p) => p[1]);
    return [Math.min(...xs), Math.min(...ys), Math.max(...xs), Math.max(...ys)];
}

function groupBy(items, key) {
    const map = new Map();
    for (const item of items) {
        const k = key(item);
        if (k == null) continue;
        if (!map.has(k)) map.set(k, []);
        map.get(k).push(item);
    }
    return map;
}

const collisions = (icons, key) => [...groupBy(icons, key).values()].filter((g) => g.length > 1);

// ── checks ───────────────────────────────────────────────────────────────────

// Two exports of the same name silently shadow each other through `export *`.
const duplicateNames = (icons) => collisions(icons, (i) => i.name);

// Names that differ only by case: a consumer cannot tell them apart.
const caseCollisions = (icons) => collisions(icons, (i) => i.name.toLowerCase());

// Icons whose markup renders pixel-for-pixel identically.
const identical = (icons) => collisions(icons, (i) => markup(i.body));

// Icons whose shapes coincide once snapped to the grid — indistinguishable at
// 24px even if an attribute differs. Only compares icons on the 24×24 grid.
const lookAlikes = (icons) => collisions(icons, (i) => {
    if (viewBoxOf(i.body) !== '0 0 24 24') return null;
    const parts = drawing(i.body, NEAR_GRID);
    return parts.length ? parts.sort().join('|') : null;
});

// A shape without its required geometry paints nothing at all.
function missingGeometry(icons) {
    const found = [];
    for (const icon of icons) {
        icon.body.split('\n').forEach((line, i) => {
            for (const m of line.matchAll(/<(rect|circle|ellipse)\b([^>]*?)\/?>/g)) {
                // Blank out JSX expressions so `style={{…}}` doesn't hide an attribute.
                const keys = new Set([...m[2].replace(/\{[^}]*\}/g, 'X').matchAll(/([\w:-]+)=/g)].map((a) => a[1]));
                const missing = REQUIRED_GEOM[m[1]].filter((k) => !keys.has(k));
                if (missing.length) found.push({ ...icon, line: icon.line + i, tag: m[1], missing });
            }
        });
    }
    return found;
}

// Paint that falls outside the viewBox is clipped away. Icons using transform
// are skipped: resolving the matrix is out of scope for a static check.
function outsideViewBox(icons, tolerance = 0.75) {
    const found = [];
    for (const icon of icons) {
        if (icon.body.includes('transform=')) continue;
        const vb = viewBoxOf(icon.body).replace(/,/g, ' ').split(/\s+/).map(Number);
        if (vb.length !== 4 || vb.some(Number.isNaN)) continue;
        const [vx, vy, vw, vh] = vb;
        let worst = null;
        for (const m of icon.body.matchAll(/\bd="([^"]+)"/g)) {
            const b = pathBBox(m[1]);
            if (!b) continue;
            const over = Math.max(vx - b[0], vy - b[1], b[2] - (vx + vw), b[3] - (vy + vh));
            if (!worst || over > worst.over) worst = { over, bbox: b };
        }
        if (worst && worst.over > tolerance) found.push({ ...icon, ...worst });
    }
    return found;
}

// Props the library documents but an icon quietly drops.
function propDrift(icons) {
    const drift = { noBaseIcon: [], noSpread: [], deadFillColor: [] };
    for (const icon of icons) {
        const sig = (/export function \w+\(\{([\s\S]*?)\}\s*\)/.exec(icon.body) || [, ''])[1];
        const props = [...sig.matchAll(/(?:^|,)\s*([A-Za-z_]\w*)/g)].map((m) => m[1]);
        const spreads = /\.\.\.(rest|props)\b/.test(sig);
        if (!icon.body.includes('<BaseIcon')) drift.noBaseIcon.push(icon);
        else if (!spreads) drift.noSpread.push(icon);
        if (props.includes('fillColor') && !spreads && !/fillColor=\{/.test(icon.body)) drift.deadFillColor.push(icon);
    }
    return drift;
}

// Names that read as internal or as an unexplained variant.
function nameShape(icons) {
    const all = new Set(icons.map((i) => i.name));
    const basePrefix = icons.filter((i) => i.name.startsWith('BaseIcon'));
    const orphanSuffix = icons.filter((i) => (
        /\d$/.test(i.name)
        && !i.name.startsWith('FileType')
        && !i.name.startsWith('BaseIcon')
        && !all.has(i.name.replace(/\d+$/, ''))
    ));
    return { basePrefix, orphanSuffix };
}

// ── report ───────────────────────────────────────────────────────────────────

const icons = readIcons();
const drift = propDrift(icons);
const names = nameShape(icons);
const report = {
    total: icons.length,
    blocking: {
        duplicateNames: duplicateNames(icons),
        caseCollisions: caseCollisions(icons),
        missingGeometry: missingGeometry(icons),
        identical: identical(icons),
        noBaseIcon: drift.noBaseIcon,
        noSpread: drift.noSpread,
        deadFillColor: drift.deadFillColor,
        basePrefix: names.basePrefix,
    },
    advisory: {
        lookAlikes: lookAlikes(icons).filter((g) => !identical(icons).some((h) => h[0].name === g[0].name)),
        outsideViewBox: outsideViewBox(icons),
        orphanSuffix: names.orphanSuffix,
    },
};

if (process.argv.includes('--json')) {
    const strip = (g) => g.map((i) => ({ name: i.name, file: i.file, line: i.line }));
    const mapAll = (o) => Object.fromEntries(Object.entries(o).map(([k, v]) => [
        k, Array.isArray(v[0]) ? v.map(strip) : strip(v),
    ]));
    console.log(JSON.stringify({ total: report.total, blocking: mapAll(report.blocking), advisory: mapAll(report.advisory) }, null, 2));
    process.exit(0);
}

const listGroups = (groups) => groups.map((g) => '    ' + g.map((i) => `${i.name} (${at(i)})`).join('  ≡  ')).join('\n');
const listIcons = (list, extra = () => '') => list.map((i) => `    ${i.name} (${at(i)})${extra(i)}`).join('\n');

console.log(`msr-icons audit — ${report.total} exported icons\n`);

const b = report.blocking;
const sections = [
    ['duplicate export names', b.duplicateNames.length, () => listGroups(b.duplicateNames)],
    ['names colliding only by case', b.caseCollisions.length, () => listGroups(b.caseCollisions)],
    ['shapes missing required geometry (paint nothing)', b.missingGeometry.length,
        () => listIcons(b.missingGeometry, (i) => ` <${i.tag}> missing ${i.missing.join('/')}`)],
    ['pixel-identical icons', b.identical.length, () => listGroups(b.identical)],
    ['icons not rendered through BaseIcon', b.noBaseIcon.length, () => listIcons(b.noBaseIcon.slice(0, 10))],
    ['icons dropping pass-through props (size, className, aria-*)', b.noSpread.length, () => listIcons(b.noSpread.slice(0, 10))],
    ['icons whose fillColor never reaches BaseIcon', b.deadFillColor.length, () => listIcons(b.deadFillColor.slice(0, 10))],
    ['exports leaking the internal BaseIcon prefix', b.basePrefix.length, () => listIcons(b.basePrefix.slice(0, 10))],
];
let failed = 0;
for (const [label, count, detail] of sections) {
    console.log(`${count ? '✗' : '✓'} ${label}: ${count}`);
    if (count) { failed += count; console.log(detail()); }
}

const a = report.advisory;
console.log('\nadvisory');
console.log(`  near-identical shapes (24px grid): ${a.lookAlikes.length} groups`);
console.log(listGroups(a.lookAlikes));
console.log(`  paint outside the viewBox: ${a.outsideViewBox.length}`);
console.log(listIcons(a.outsideViewBox, (i) => ` overflows by ${i.over.toFixed(1)}`));
console.log(`  orphan number suffix (plain name unused): ${a.orphanSuffix.length}`);

process.exit(failed ? 1 : 0);
