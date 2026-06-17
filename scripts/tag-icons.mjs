// Tag an icon file's elements with data-part so each element can be colored
// individually via an object fillColor (see README → Per-element coloring).
//
//   npx vite-node scripts/tag-icons.mjs src/icons/<file>.jsx
//
// The script is conservative: every icon is rendered before and after with
// default props, and any icon whose appearance would change is left untouched
// and reported so it can be hand-tagged later (multi-color icons usually need
// human judgement to split their accent colors). Run from the repo root.
import fs from 'node:fs';
import path from 'node:path';
import { pathToFileURL } from 'node:url';
import { createRequire } from 'node:module';
import React from 'react';
import { renderToStaticMarkup as R } from 'react-dom/server';
const require = createRequire(import.meta.url);
const { parse } = require('@babel/parser');
const traverse = require('@babel/traverse').default;

const SRC = process.argv[2];
if (!SRC) { console.error('usage: tag-icons.mjs <path-to-icon-file>'); process.exit(1); }

const code = fs.readFileSync(SRC, 'utf8');
const ast = parse(code, { sourceType: 'module', plugins: ['jsx'] });
const DRAW = new Set(['path', 'rect', 'circle', 'ellipse', 'line', 'polyline', 'polygon']);
const attrName = (a) => (a.type === 'JSXAttribute' && a.name?.type === 'JSXIdentifier' ? a.name.name : null);

function colorInfo(attr) {
    if (!attr) return { cat: 'absent' };
    const v = attr.value;
    if (v == null) return { cat: 'boolean' };
    if (v.type === 'StringLiteral') {
        const s = v.value;
        if (s === 'none' || s === 'transparent') return { cat: 'none' };
        if (s === 'currentColor') return { cat: 'currentColor' };
        return { cat: 'static', val: s.toLowerCase() };
    }
    if (v.type === 'JSXExpressionContainer') {
        const src = code.slice(v.expression.start, v.expression.end);
        if (/fillColor/.test(src)) return { cat: 'iconColor' };
        if (/backgroundColor/.test(src)) return { cat: 'bg' };
        if (/currentColor/.test(src)) return { cat: 'currentColor' };
        return { cat: 'expr' };
    }
    return { cat: 'other' };
}

const edits = [];
const del = (node, icon) => { let s = node.start; if (code[s - 1] === ' ') s -= 1; edits.push({ start: s, end: node.end, text: '', icon }); };
const insertAfter = (pos, text, icon) => edits.push({ start: pos, end: pos, text, icon });
const iconNames = [];

traverse(ast, {
    FunctionDeclaration(p) {
        const fn = p.node;
        if (!fn.id || p.parent.type !== 'ExportNamedDeclaration') return;
        const name = fn.id.name;
        iconNames.push(name);

        const paramNames = new Set();
        let defaultFill = null;
        for (const par of fn.params) {
            if (par.type !== 'ObjectPattern') continue;
            for (const pr of par.properties) {
                if (pr.type === 'ObjectProperty' && pr.key.type === 'Identifier') {
                    paramNames.add(pr.key.name);
                    if (pr.key.name === 'fillColor' && pr.value.type === 'AssignmentPattern' && pr.value.right.type === 'StringLiteral') {
                        defaultFill = pr.value.right.value.toLowerCase();
                    }
                }
            }
        }
        const BLACK = new Set(['#000', '#000000', 'black', 'currentcolor']);
        const isMainColor = (val) => (defaultFill != null ? val === defaultFill : BLACK.has(val));

        let baseOpen = null;
        const draws = [];
        p.traverse({
            JSXOpeningElement(p2) {
                const t = p2.node.name.type === 'JSXIdentifier' ? p2.node.name.name : null;
                if (t === 'BaseIcon' && !baseOpen) baseOpen = p2.node;
                else if (DRAW.has(t)) draws.push(p2.node);
            },
        });
        if (!baseOpen) return;

        const ba = baseOpen.attributes.filter((a) => a.type === 'JSXAttribute');
        const has = (n) => ba.some((a) => attrName(a) === n);
        let add = '';
        if (!has('fillColor') && paramNames.has('fillColor')) add += ' fillColor={fillColor}';
        if (!has('isColored') && paramNames.has('isColored')) add += ' isColored={isColored}';
        if (add) insertAfter(baseOpen.name.end, add, name);

        draws.forEach((el, i) => {
            const part = i === 0 ? 'base' : 'base' + (i + 1);
            const attrs = el.attributes.filter((a) => a.type === 'JSXAttribute');
            const fillAttr = attrs.find((a) => attrName(a) === 'fill');
            const strokeAttr = attrs.find((a) => attrName(a) === 'stroke');
            const stray = attrs.find((a) => attrName(a) === 'path');
            const fi = colorInfo(fillAttr), si = colorInfo(strokeAttr);
            const filled = fi.cat === 'iconColor' || fi.cat === 'static' || fi.cat === 'currentColor';
            const fillIsMain = fi.cat === 'iconColor' || fi.cat === 'currentColor' || (fi.cat === 'static' && isMainColor(fi.val));
            const strokeIsMain = si.cat === 'iconColor' || si.cat === 'currentColor' || si.cat === 'absent' || (si.cat === 'static' && isMainColor(si.val));

            insertAfter(el.name.end, ` data-part="${part}"` + (filled ? ' data-fill' : ''), name);
            if (stray) del(stray, name);
            if (filled) {
                if (fillAttr && fillIsMain) del(fillAttr, name);
                if (strokeIsMain) { if (strokeAttr) del(strokeAttr, name); insertAfter(el.name.end, ' stroke="none"', name); }
            } else if (strokeAttr && strokeIsMain && si.cat !== 'absent') {
                del(strokeAttr, name);
            }
        });
    },
});

function apply(excluded = new Set()) {
    const use = edits.filter((e) => !excluded.has(e.icon)).sort((a, b) => b.start - a.start || b.end - a.end);
    let out = code;
    for (const e of use) out = out.slice(0, e.start) + e.text + out.slice(e.end);
    return out;
}

// Render before/after under default props and flag any visual change.
const BLACKISH = new Set(['#000', '#000000', 'black', 'currentcolor', 'rgb(0,0,0)']);
const normColor = (c) => { if (c == null) return null; const s = String(c).toLowerCase(); if (s === 'transparent') return 'none'; return BLACKISH.has(s) ? 'D' : s; };
const GEO = ['d', 'cx', 'cy', 'r', 'rx', 'ry', 'x', 'y', 'width', 'height', 'points', 'x1', 'y1', 'x2', 'y2', 'fill-rule', 'clip-rule'];
function parseAttrs(s) { const o = {}; const re = /([\w:-]+)(?:=("[^"]*"|'[^']*'))?/g; let m; while ((m = re.exec(s))) { let v = m[2]; if (v) v = v.slice(1, -1); o[m[1]] = v ?? true; } return o; }
function canon(svg) {
    const so = svg.match(/<svg([^>]*)>/); const sa = so ? parseAttrs(so[1]) : {};
    const out = []; const re = /<(path|rect|circle|ellipse|line|polyline|polygon)\b([^>]*?)\/?>/g; let m;
    while ((m = re.exec(svg))) {
        const a = parseAttrs(m[2]);
        const effFill = normColor(a.fill ?? sa.fill);
        const effStroke = (effFill && effFill !== 'none') ? 'X' : normColor(a.stroke ?? sa.stroke);
        const geo = {}; for (const g of GEO) if (a[g] != null) geo[g] = a[g];
        out.push([m[1], effFill, effStroke, geo]);
    }
    return JSON.stringify(out);
}

const dir = path.dirname(SRC);
const oldF = path.join(dir, '__tag_old.jsx');
const newF = path.join(dir, '__tag_new.jsx');
fs.writeFileSync(oldF, code);
fs.writeFileSync(newF, apply());
const Old = await import(pathToFileURL(path.resolve(oldF)).href);
const New = await import(pathToFileURL(path.resolve(newF)).href);
const render = (C) => { try { return canon(R(React.createElement(C, {}))); } catch (e) { return 'ERR:' + e.message; } };
const reverted = iconNames.filter((n) => Old[n] && New[n] && render(Old[n]) !== render(New[n]));
fs.rmSync(oldF); fs.rmSync(newF);

fs.writeFileSync(SRC, apply(new Set(reverted)));
console.log(`${SRC}: tagged ${iconNames.length - reverted.length}/${iconNames.length}`);
if (reverted.length) console.log('NEEDS HAND-TAGGING (left unchanged):\n  ' + reverted.join('\n  '));
