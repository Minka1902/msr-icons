# Fix & verify all icons in msr-icons

## Context

The package ships 2,148 React SVG icons. The request: make sure every icon works and looks good. I built an audit harness (renders every icon with `react-dom/server`, measures real geometry with `getBBox()` in headless Chromium, and screenshots contact sheets). It found **146 geometry flags**, and visual review of the flagged icons confirmed several systematic bugs plus a set of one-off broken glyphs. Root causes are confirmed in source.

## Confirmed defects

**1. Corrupted "check overlay" paths (~19 icons render a giant slash).**
Paths like `<path d="m16 17 17.6 19 20 15" />` (`src/icons/users.jsx:7`, `comms.jsx:103`, `devops.jsx:95`, …) use a relative `m` but the following pairs were meant as absolute points — the checkmark shoots to x≈53, y≈51. Affected: MailCheck, MarkRead, BuildSuccess, CloudCheck, PipelinePass, Ssl, TestPass, ClipboardCheck, FileCheck2, Authentication, Authorization, ComplianceIcon, CalendarCheck2, Checkbox2, FilterCheck, SearchCheck, Permission2, UserCheck, UserStar. Fix is mechanical: convert to absolute (`M16 17 L17.6 19 L20 15`).

**2. Brand fill logos inherit BaseIcon's default black 1.5px stroke (~16 icons look mangled).**
e.g. `brands.jsx:1030` MetaMask passes per-path `fill` but never sets `mode="fill"`, so the svg root's stroke paints on top. Affected: Bitcoin, MetaMask, Mailchimp, OpenAI, PostgreSQL, Redis, MongoDB, Php, Elasticsearch, PagerDuty, TripAdvisor, NuxtJS, Ethereum, Laravel, Solana, Ember, Rails. Fix: `mode="fill"` (or `stroke="none"`) per icon, chosen case by case after visual check.

**3. BaseIcon silently drops props → invisible defects across the library.**
`BaseIcon.jsx:100` destructures a fixed prop list and never spreads the rest onto `<svg>`:
- The README-documented `size` prop (default 24) does nothing; icons have no intrinsic width/height.
- Dozens of icons pass `width/height/stroke/fill/strokeLinecap/...` to BaseIcon (all of `files.jsx`'s file-type icons, `ui.jsx` Printer/Assembly/CNC/Engineer) and those props are discarded — this is why the 512-viewBox technical icons render as unreadable gray hairlines.
Fix: add `size = 24` (→ `width`/`height`) and spread remaining props onto `<svg>` **after** the mode defaults so explicit attrs win. This changes rendering for icons that relied on dropped props, so every icon gets a before/after render diff and each changed icon is reviewed visually.

**4. Invisible icons.**
- `ui.jsx:784`ff Arrow{Top,Bottom}{Left,Right}: line paths marked `stroke="none" data-fill` → zero-area fill, renders blank. EuroSign has the same anti-pattern (renders a blob). Redraw as normal stroked paths (corner + diagonal arrow).
- `mimeTypes.jsx:2724`ff FileTypeApplicationXVmwareVm/-Clone/-Legacy/-foundry and `:2408` XRpm: `<rect>` elements missing `width`/`height` → blank. Restore dimensions.
- `mimeTypes.jsx:2946` FileTypeBinary: `fill="#fff" stroke="#fff"` → white on white. Recolor.

**5. Corrupted path data.**
- `brands.jsx:1329` Supabase: garbage `8.un884` inside the path kills the whole logo.
- `ui.jsx:980` Heart (and HeartFilled): path extends to x≈-4.5, left lobe clipped off.
- DrillingWell, Rails, and ~14 mimeTypes icons (FileTypeTextXOcaml, XJar, XContentAudioCdda, XGnonogramPuzzle, Sql, Sweethome3d, AtomXml, VndNokiaXmlQtResource, XGlabels, VndIccprofile, Firmware, TextXBibtex, TextXTexmacs, XKritaAssistant, XWbfs) have geometry far outside the viewBox (up to 12,000+ units) — repair or strip the stray geometry.

**6. Individual glyph defects (redraw/adjust one by one).**
VolumeMute2 (missing mute slash), SectionSign (renders "S", not §), RupeeSign, Settings3 (mangled gear), Magnet, Ribbon, Cheese2, Taco2, EmbeddingIcon (off-center), CodeBracket (off-center), files/BaseIconFile (text overflows page glyph), plus ~20 icons with minor edge clipping or centering issues (SlackHash, UsersGroup, UserVoice, WIFI, Location, Burger2, Airport, BloodDrop, WaterDrop, Waveform, CloudLightning2, WeatherHumidity, Folder, FolderOpen2, WorldMap, Cloud/CloudDownload/CloudUpload, VolumeLow, BaseIconRepeat, PagerDuty…). Full list in the harness report (`report.json`).

**7. Source hygiene / API parity.**
- Kebab-case SVG attrs in JSX (`stroke-dasharray`, `fill-rule`, …, ~20 spots in time/security/data/ai/maps/devices/ui/files/brands) → React dev-warnings in every consumer app; convert to camelCase.
- `brands.jsx:831`: stray boolean `path` attribute on a `<path>`.
- README documents a generic `<Icon name="…" color="…"/>` wrapper that doesn't exist — add a small `Icon` component (`icons[name]` lookup) to `src/icons/` so the documented API works.

## Steps

1. **Complete the sweep**: review the remaining 27 all-icon contact sheets (already screenshotted) to catch broken-looking icons the geometry checks missed; finalize the per-icon defect list.
2. **BaseIcon upgrade** (`src/icons/BaseIcon.jsx`): `size` prop + rest-spread onto `<svg>`; re-render all 2,148 icons, diff serialized SVG against baseline, visually review every icon that changed.
3. **Family fixes**: check-overlay paths (item 1), brand `mode="fill"` (item 2), camelCase attrs + stray attr (item 7).
4. **Per-icon repairs**: items 4–6 (redraws use standard 24×24, stroke-1.5 grid consistent with the rest of the library).
5. **Add `Icon` wrapper** + export it (README parity).
6. **Verify**:
   - Re-run harness: 0 render errors, 0 invisible icons, no painted geometry beyond viewBox (>0.35 tolerance), centering flags only where intentional.
   - Re-shoot all contact sheets; pixel-diff before/after; confirm every changed icon is an intended fix and no regressions.
   - `npm run lint`, `npm run type-check`, `npm run build` all pass.
7. **Commit & push** to `claude/icon-quality-appearance-elwnil` (no PR unless requested).

## Notes

- Harness lives in the session scratchpad (`render-entry.jsx`, `check-icons.mjs`, `shoot-sheets.mjs`); it is re-runnable and not committed to the repo (can be added under `scripts/` later if wanted).
- The 3 "empty-render" flags (BaseIconMinusSign, LoadingDots, MoreHorizontal2) were harness false-positives (zero-area stroked lines/dots render fine) — the harness check will be refined; no icon change needed.
