# Per-element coloring — tagging status

This file tracks the rollout of **per-element coloring** across the icon library
and lists the icons that still need to be **hand-tagged**.

## What "tagging" means

Every colorable element in an icon carries a `data-part="…"` attribute. That lets
consumers color each element independently with an object `fillColor`:

```jsx
<Icon name="CalendarCheck2" color={{ calendar: 'black', check: 'green' }} />
```

See the **Per-element coloring** section of the README for the full API.

### Naming convention
- **Semantic names** where the parts are obvious (`calendar`, `check`, `clock`,
  `hands`, …). Used for hand-tagged files.
- **`base`, `base2`, `base3`, …** in drawing order for everything else. The
  `base` key also acts as the catch-all color for any unnamed part.
- Filled elements inside a stroke icon are marked `data-fill` so they paint
  their `fill` (not `stroke`).

## How to tag a file

```bash
npx vite-node scripts/tag-icons.mjs src/icons/<file>.jsx
```

The script tags every element as `base`/`base2`/… and routes `fillColor` into
`BaseIcon`. It renders each icon **before and after** with default props and
**automatically skips (leaves unchanged) any icon whose appearance would
change** — these are reported and listed under "Needs hand-tagging" below.
After running: `npm run lint && npm run build`.

## Status

| File | Icons | Status |
|------|------:|--------|
| `time.jsx` | 24 | ✅ done (semantic names, hand-tagged) |
| `comms.jsx` | 52 | ✅ done |
| `ui.jsx` | 555 | ✅ 548 done · 7 to hand-tag |
| `ai.jsx` | 30 | ⬜ pending |
| `brands.jsx` | 246 | ⬜ pending (mostly single-color logos) |
| `code.jsx` | 43 | ⬜ pending |
| `commerce.jsx` | 34 | ⬜ pending |
| `data.jsx` | 59 | ⬜ pending |
| `devices.jsx` | 39 | ⬜ pending |
| `devops.jsx` | 66 | ⬜ pending |
| `education.jsx` | 34 | ⬜ pending |
| `files.jsx` | 175 | ⬜ pending |
| `food.jsx` | 47 | ⬜ pending |
| `git.jsx` | 23 | ⬜ pending |
| `home.jsx` | 36 | ⬜ pending |
| `maps.jsx` | 24 | ⬜ pending |
| `media.jsx` | 29 | ⬜ pending |
| `medical.jsx` | 39 | ⬜ pending |
| `mimeTypes.jsx` | 260 | ⬜ pending (multi-color — expect many hand-tags) |
| `music.jsx` | 10 | ⬜ pending |
| `nature.jsx` | 14 | ⬜ pending |
| `science.jsx` | 20 | ⬜ pending |
| `security.jsx` | 54 | ⬜ pending |
| `sports.jsx` | 39 | ⬜ pending |
| `symbols.jsx` | 28 | ⬜ pending |
| `tools.jsx` | 29 | ⬜ pending |
| `transport.jsx` | 44 | ⬜ pending |
| `users.jsx` | 29 | ⬜ pending |
| `weather.jsx` | 39 | ⬜ pending |

## Needs hand-tagging

These icons were intentionally left untouched because the automated tagger
detected that tagging them would change their default appearance — almost always
because they are **multi-color** (distinct fixed accent colors that can't be
auto-split) or use an `isColored ? '#HEX' : 'currentColor'` pattern. Each needs a
human to assign semantic `data-part` names (and keep its accent colors).

### `ui.jsx`
| Icon | Reason |
|------|--------|
| `BaseIconMail` | Multi-color (red `#FC3F1D` envelope + gray `#4e4e4e` body) |
| `BaseIconClipboard` | White-on-dark design (`fillColor='white'` default) |
| `BaseIconCopy` | White-on-dark design |
| `BaseIconFingerprint` | White-on-dark design |
| `BaseIconVersion` | White-on-dark design |
| `Location` | `fillColor='#fff'` default; strokes would flip white |
| `ThemeLight` | Two-tone (amber rays `#F59E0B` + neutral center) |

### `comms.jsx`
_None._

### `time.jsx`
_None._
