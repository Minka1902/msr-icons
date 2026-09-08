<div align="center">

<h1>msr-icons</h1>

<p>A lightweight, production-ready React SVG icon library with <strong>2000+ pre-built icons</strong> across brands, UI, files, weather, transport, food, medical, sports, nature, education, music, home, a large developer/agent set (version control, code, DevOps, data, security, AI, devices, layout, and more), plus full-color <strong>file-type / MIME icons</strong>.</p>

[![npm version](https://img.shields.io/npm/v/msr-icons?style=flat-square&color=cb3837)](https://www.npmjs.com/package/msr-icons)
[![npm downloads](https://img.shields.io/npm/dm/msr-icons?style=flat-square&color=blue)](https://www.npmjs.com/package/msr-icons)
[![license](https://img.shields.io/npm/l/msr-icons?style=flat-square&color=green)](./LICENSE)
[![tree-shakeable](https://img.shields.io/badge/tree--shakeable-yes-brightgreen?style=flat-square)](https://bundlephobia.com/package/msr-icons)
[![TypeScript](https://img.shields.io/badge/TypeScript-ready-blue?style=flat-square&logo=typescript)](https://www.typescriptlang.org/)

</div>

---

## Features

| | |
|---|---|
| **2000+ SVG Icons** | Brands, UI, files, weather, nature, transport, Git, code, DevOps, data, security, AI, file-type/MIME & more |
| **Tree-shakeable** | Import only what you need — unused icons are never bundled |
| **Fully Customizable** | Control color, size, stroke width, background & styles via props |
| **Dual Format** | Ships as both ESM and CommonJS |
| **TypeScript Ready** | Full `.d.ts` declarations included |
| **Zero Config** | Works out of the box with Vite, CRA, Next.js, and more |

---

## Installation

```bash
npm install msr-icons
# or
yarn add msr-icons
# or
pnpm add msr-icons
```

> **Peer dependency:** React 17+

---

## Quick Start

### Named imports

Import each icon directly by name:

```jsx
import { Facebook, Github, Twitter } from 'msr-icons';

export default function App() {
  return (
    <div>
      <Facebook fillColor="#286bc2" onClick={() => alert('Facebook')} />
      <Github fillColor="#000" />
      <Twitter isColored />
    </div>
  );
}
```

### List all available icon names

```jsx
import { iconNames } from 'msr-icons';

console.log(iconNames); // ['Facebook', 'Github', 'Twitter', ...]
```

---

## Props

All icons share a common set of props via the `BaseIcon` wrapper:

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `fillColor` | `string \| object` | varies | A single color for the whole icon, **or** a `{ part: color }` map to color each element separately ([see below](#per-element-coloring)) |
| `isColored` | `boolean` | `true` | Use the icon's brand color |
| `size` | `number` | `24` | Width and height in pixels |
| `onClick` | `function` | — | Click event handler |
| `onHover` | `function` | — | Mouse-enter event handler |
| `backgroundColor` | `string` | — | Background color of the SVG container |
| `style` | `object` | — | Inline styles merged onto the container |
| `className` | `string` | `''` | CSS class name(s) |
| `strokeWidth` | `string\|number` | `'1.5'` | SVG stroke thickness |
| `mode` | `'stroke'\|'fill'` | `'stroke'` | Render mode for dual-mode icons |

### Usage examples

```jsx
// Custom color
<Facebook fillColor="#286bc2" />

// Brand color
<Instagram isColored />

// With interaction
<Twitter
  fillColor="#1DA1F2"
  onClick={() => console.log('clicked')}
  onHover={() => console.log('hovered')}
/>

// With full styling
<Github
  fillColor="#000"
  backgroundColor="rgba(0,0,0,0.05)"
  style={{ padding: '8px', borderRadius: '50%' }}
  className="icon-btn"
/>
```

### Per-element coloring

Most icons are made up of several elements (a calendar plus a check, a clock plus
its hands, …). You can color the whole icon with a single value, or color each
element independently by passing an **object** instead of a string. With the
generic `<Icon>` wrapper the prop is named `color`; on the individual components
it's `fillColor`.

```jsx
// One color for everything (unchanged behavior)
<Icon name="CalendarCheck" color="black" />
<CalendarCheck fillColor="black" />

// A color per element
<Icon name="CalendarCheck" color={{ calendar: 'black', check: 'green' }} />
<CalendarCheck fillColor={{ calendar: 'black', check: 'green' }} />
```

Each element is identified by a **part name**. Semantic icons use descriptive
names (`calendar`, `check`, `clock`, `hands`, …); the rest expose their structural
elements as `base`, `base2`, `base3`, … in drawing order:

```jsx
<Icon name="Login" color={{ base: '#111', base3: '#e11' }} />
```

The special **`base`** key sets the color for every element you don't name
explicitly, so you can recolor one part while leaving the rest at a shared color:

```jsx
// everything navy, just the checkmark green
<Icon name="CalendarCheck" color={{ base: 'navy', check: 'green' }} />
```

> **Tip:** not sure what an icon's parts are called? Inspect the rendered SVG —
> every colorable element carries a `data-part="…"` attribute.

---

## Checking the icon set

```bash
npm run audit-icons          # human-readable report, non-zero exit on a defect
node scripts/audit-icons.mjs --json
```

The audit reads every icon and reports duplicate export names, names colliding
only by letter case, shapes missing the geometry attributes they need to paint,
icons that render identically or are indistinguishable at 24px, icons that
bypass `BaseIcon` or drop pass-through props, paint outside the viewBox, and
names that leak internal prefixes or unexplained variant numbers.

---

## Deprecated names

Some icons were renamed so their name describes what they draw: the internal
`BaseIcon` prefix was dropped from public names, variant numbers were dropped
where the plain name was unused, names that differed from another export only
by letter case were disambiguated, and a handful of icons that drew exactly
what another icon already drew now point at it.

**Every old name still works.** They are re-exported from the package root, so
existing imports and `<Icon name="…" />` lookups resolve unchanged. They are
deprecated and will be removed in the next major version — prefer the new name.
`iconNames` lists current names only.

<details>
<summary><strong>Full list</strong> — 261 renamed or merged names</summary>

**Internal prefix dropped**

| Old name | Use instead |
|---|---|
| `BaseIcon360` | `View360` |
| `BaseIconAlert` | `Alert` |
| `BaseIconArchive` | `Archive` |
| `BaseIconArchiveAdd` | `ArchiveAdd` |
| `BaseIconArchiveRemove` | `ArchiveRemove` |
| `BaseIconBack` | `Back` |
| `BaseIconBookmark` | `Bookmark` |
| `BaseIconCamera` | `Camera` |
| `BaseIconCheckCircleFilled` | `CheckCircleFilled` |
| `BaseIconClipboard` | `Clipboard` |
| `BaseIconCode` | `Code` |
| `BaseIconCopy` | `Copy` |
| `BaseIconDownload` | `Download` |
| `BaseIconEqual` | `Equal` |
| `BaseIconEye2` | `Eye2` |
| `BaseIconEye3` | `Eye3` |
| `BaseIconEye4` | `Eye4` |
| `BaseIconFile` | `FileUnknown` |
| `BaseIconFilter` | `Filter` |
| `BaseIconFingerprint` | `Fingerprint` |
| `BaseIconFlag` | `Flag` |
| `BaseIconForward` | `Forward` |
| `BaseIconGear` | `Gear` |
| `BaseIconHardDrive` | `HardDrive` |
| `BaseIconHeadphones` | `Headphones` |
| `BaseIconHome` | `Home` |
| `BaseIconID` | `ID` |
| `BaseIconImage` | `Image` |
| `BaseIconInbox` | `Inbox` |
| `BaseIconLight` | `Light` |
| `BaseIconLink` | `Link2` |
| `BaseIconLoader` | `Loader` |
| `BaseIconMail` | `Mail` |
| `BaseIconMailOpen` | `MailOpen` |
| `BaseIconMailRead` | `MailRead` |
| `BaseIconMailUnread` | `MailUnread` |
| `BaseIconMaximize` | `Maximize` |
| `BaseIconMenu2` | `Menu2` |
| `BaseIconMic` | `Mic` |
| `BaseIconMinimize` | `Minimize` |
| `BaseIconMinusSign` | `MinusSign` |
| `BaseIconMoreHorizontal` | `MoreHorizontal` |
| `BaseIconMoreVertical` | `MoreVertical` |
| `BaseIconPaste` | `Paste` |
| `BaseIconPlusSign` | `PlusSign` |
| `BaseIconRadio` | `Radio` |
| `BaseIconRepeat` | `Repeat` |
| `BaseIconShare` | `Share` |
| `BaseIconSkipBack` | `SkipBack` |
| `BaseIconSkipForward` | `SkipForward` |
| `BaseIconSkipToEnd` | `SkipToEnd` |
| `BaseIconSkipToStart` | `SkipToStart` |
| `BaseIconSliders` | `Sliders` |
| `BaseIconSort` | `Sort` |
| `BaseIconSpeaker` | `Speaker` |
| `BaseIconSpinner` | `Spinner2` |
| `BaseIconStore` | `Store2` |
| `BaseIconTerminal` | `Terminal` |
| `BaseIconToggle` | `Toggle` |
| `BaseIconUpload` | `Upload` |
| `BaseIconVersion` | `Version` |
| `BaseIconVideo` | `Video` |
| `BaseIconVolume` | `Volume` |
| `BaseIconVolumeOff` | `VolumeOff` |
| `BaseIconXCircleFilled` | `XCircleFilled` |
| `BaseIconXSquare` | `XSquare` |
| `BaseIconZap` | `Zap` |

**Number suffix dropped**

| Old name | Use instead |
|---|---|
| `Account2` | `Account` |
| `Airplane2` | `Airplane` |
| `Alarm2` | `Alarm` |
| `Asterisk2` | `Asterisk` |
| `AtSign2` | `AtSign` |
| `Atlas2` | `Atlas` |
| `Attachment2` | `Attachment` |
| `Avatar2` | `Avatar` |
| `Backpack2` | `Backpack` |
| `Backup2` | `Backup` |
| `Bacteria2` | `Bacteria` |
| `Banana2` | `Banana` |
| `Bathtub2` | `Bathtub` |
| `Battery2` | `Battery` |
| `BatteryCharging2` | `BatteryCharging` |
| `BatteryFull2` | `BatteryFull` |
| `BatteryLow2` | `BatteryLow` |
| `BellRing2` | `BellRing` |
| `Bone2` | `Bone` |
| `BookOpen3` | `BookOpen` |
| `Bowling2` | `Bowling` |
| `Boxing2` | `Boxing` |
| `Bridge2` | `Bridge` |
| `Build2` | `Build` |
| `Building3` | `Building` |
| `Cactus2` | `Cactus` |
| `CalendarCheck2` | `CalendarCheck` |
| `CalendarMinus2` | `CalendarMinus` |
| `CalendarPlus2` | `CalendarPlus` |
| `CalendarX2` | `CalendarX` |
| `Capsule2` | `Capsule` |
| `Card2` | `Card` |
| `Carrot2` | `Carrot` |
| `Castle2` | `Castle` |
| `ChartArea2` | `ChartArea` |
| `ChartBar2` | `ChartBar` |
| `ChartLine2` | `ChartLine` |
| `ChartPie2` | `ChartPie` |
| `Checkbox2` | `Checkbox` |
| `Cheese2` | `Cheese` |
| `Chip2` | `Chip` |
| `CloudDrizzle2` | `CloudDrizzle` |
| `CloudFog2` | `CloudFog` |
| `CloudLightning2` | `CloudLightning` |
| `CloudMoon2` | `CloudMoon` |
| `CloudRain2` | `CloudRain` |
| `CloudSnow2` | `CloudSnow` |
| `CloudSun2` | `CloudSun` |
| `Cog2` | `Cog` |
| `ColorPicker2` | `ColorPicker` |
| `Console2` | `Console` |
| `Contact2` | `Contact` |
| `Container2` | `Container` |
| `Cookie3` | `Cookie` |
| `Crosshair2` | `Crosshair` |
| `Dashboard3` | `Dashboard` |
| `DataExport2` | `DataExport` |
| `DataImport2` | `DataImport` |
| `DataSync2` | `DataSync` |
| `Distance2` | `Distance` |
| `Donut2` | `Donut` |
| `DoorOpen2` | `DoorOpen` |
| `Dropdown2` | `Dropdown` |
| `Egg2` | `Egg` |
| `Elevator2` | `Elevator` |
| `Extension2` | `Extension` |
| `Factory3` | `Factory` |
| `FastForward2` | `FastForward` |
| `FileAudio2` | `FileAudio` |
| `FileCheck2` | `FileCheck` |
| `FileEdit2` | `FileEdit` |
| `FileImage2` | `FileImage` |
| `FileMinus2` | `FileMinus` |
| `FileVideo2` | `FileVideo` |
| `FileX2` | `FileX` |
| `FileZip2` | `FileZip` |
| `FirstAid2` | `FirstAid` |
| `FolderMinus2` | `FolderMinus` |
| `Fuel2` | `Fuel` |
| `Funnel2` | `Funnel` |
| `Hammer2` | `Hammer` |
| `Highlighter2` | `Highlighter` |
| `History2` | `History` |
| `Hotel2` | `Hotel` |
| `Hurricane2` | `Hurricane` |
| `Install2` | `Install` |
| `Joystick2` | `Joystick` |
| `KeyRound2` | `KeyRound` |
| `LayoutDashboard2` | `LayoutDashboard` |
| `Library2` | `Library` |
| `LockOpen2` | `LockOpen` |
| `Logs2` | `Logs` |
| `MP3` | `MP` |
| `Mask2` | `Mask` |
| `Megaphone2` | `Megaphone` |
| `Memory2` | `Memory` |
| `MessageCircle2` | `MessageCircle` |
| `MessageSquare2` | `MessageSquare` |
| `Microphone2` | `Microphone` |
| `Module2` | `Module` |
| `Monitor3` | `Monitor` |
| `Mouse3` | `Mouse` |
| `Mushroom2` | `Mushroom` |
| `Navigation3` | `Navigation` |
| `Node2` | `Node` |
| `Notebook3` | `Notebook` |
| `Notepad2` | `Notepad` |
| `Notification2` | `Notification` |
| `Package2` | `Package` |
| `Paperclip2` | `Paperclip` |
| `PauseCircle2` | `PauseCircle` |
| `Percentage2` | `Percentage` |
| `Permission2` | `Permission` |
| `PhoneCall2` | `PhoneCall` |
| `Pi2` | `Pi` |
| `PlayCircle2` | `PlayCircle` |
| `Plugin2` | `Plugin` |
| `Podcast2` | `Podcast` |
| `Power2` | `Power` |
| `Presentation2` | `Presentation` |
| `Projector2` | `Projector` |
| `Quote2` | `Quote` |
| `Rainbow2` | `Rainbow` |
| `Report2` | `Report` |
| `Reset2` | `Reset` |
| `Restart2` | `Restart` |
| `Restore2` | `Restore` |
| `Retry2` | `Retry` |
| `Router2` | `Router` |
| `Sailboat2` | `Sailboat` |
| `Sandwich2` | `Sandwich` |
| `SatelliteDish2` | `SatelliteDish` |
| `Scan2` | `Scan` |
| `ScreenShare2` | `ScreenShare` |
| `Screwdriver2` | `Screwdriver` |
| `Server2` | `Server` |
| `Shower2` | `Shower` |
| `Sigma2` | `Sigma` |
| `Signature2` | `Signature` |
| `Sitemap2` | `Sitemap` |
| `Skateboard2` | `Skateboard` |
| `Slider2` | `Slider` |
| `Spreadsheet2` | `Spreadsheet` |
| `Stairs2` | `Stairs` |
| `StopCircle2` | `StopCircle` |
| `Stopwatch2` | `Stopwatch` |
| `Sync2` | `Sync` |
| `Table2` | `Table` |
| `Taco2` | `Taco` |
| `Target2` | `Target` |
| `TestTube2` | `TestTube` |
| `TextCursor2` | `TextCursor` |
| `Thermometer3` | `Thermometer` |
| `Toilet2` | `Toilet` |
| `Token2` | `Token` |
| `Tornado2` | `Tornado` |
| `Trademark2` | `Trademark` |
| `Traffic2` | `Traffic` |
| `Trend2` | `Trend` |
| `Triangle3` | `Triangle` |
| `Umbrella2` | `Umbrella` |
| `Update2` | `Update` |
| `UserCircle2` | `UserCircle` |
| `UserGroup2` | `UserGroup` |
| `UserX2` | `UserX` |
| `Utensils2` | `Utensils` |
| `Van2` | `Van` |
| `Virus2` | `Virus` |
| `VolumeMute2` | `VolumeMute` |
| `VolumeX2` | `VolumeX` |
| `Warehouse2` | `Warehouse` |
| `Whistle2` | `Whistle` |
| `Whiteboard2` | `Whiteboard` |
| `Wrench2` | `Wrench` |

**Case collisions resolved**

| Old name | Use instead |
|---|---|
| `BankNote` | `Banknote2` |
| `Blockquote` | `BlockQuote2` |
| `Css` | `CssFile` |
| `ENVFile` | `EnvFile2` |
| `FaceID` | `FaceId2` |
| `VPN` | `Vpn2` |

**Merged into the icon they duplicated**

| Old name | Use instead |
|---|---|
| `BaseIconCheckBox` | `Checkbox` |
| `BaseIconChevronsDown` | `ChevronsDown` |
| `BaseIconChevronsLeft` | `ChevronsLeft` |
| `BaseIconChevronsRight` | `ChevronsRight` |
| `BaseIconChevronsUp` | `ChevronsUp` |
| `BaseIconMenu3` | `MoreVertical` |
| `BaseIconX` | `Close` |
| `ContrastIcon` | `CircleHalf` |
| `MoreHorizontal2` | `MoreHorizontal` |
| `RadioButton` | `CircleDot` |
| `RecordIcon` | `Record` |
| `Smiley` | `Smile` |
| `SmileyFace` | `Smile` |
| `TriangleExclamation` | `TriangleAlert` |

</details>

---

## Icon Categories

<details>
<summary><strong>Brands</strong> — social, tech, crypto, AI, cloud, and developer tools</summary>

Facebook, Twitter, Instagram, LinkedIn, YouTube, TikTok, Snapchat, Pinterest, Reddit, Discord, Slack, WhatsApp, Telegram, GitHub, GitLab, Figma, Notion, Trello, Jira, Confluence, Google, Apple, Microsoft, Amazon, AWS, Azure, GCP, Docker, Kubernetes, Vercel, Netlify, Heroku, OpenAI, Claude, Gemini, HuggingFace, MongoDB, PostgreSQL, Redis, Elasticsearch, RabbitMQ, Solana, Ethereum, Bitcoin, MetaMask, and more.

</details>

<details>
<summary><strong>UI</strong> — controls, navigation, feedback, and layout</summary>

Settings, Search, Menu, Hamburger, Close, ArrowUp/Down/Left/Right, ChevronUp/Down, Trash, Edit, EditBox, Download, Upload, Send, Bell, Alert, Check, CheckCircle, Info, Warning, Chart, BarChart, PieChart, Toggle, Input, Grid, List, Theme, Sun, Moon, Accessibility, Drag, Filter, Sort, Share, Copy, Paste, Undo, Redo, ZoomIn, ZoomOut, Fullscreen, and more.

</details>

<details>
<summary><strong>Files &amp; Formats</strong> — file types, folders, and code formats</summary>

File, Folder, FolderOpen, CSV, JSON, XML, YAML, TOML, Markdown, PDF, DOC, Excel, PowerPoint, Config, DB, RAR, ZIP, SVG, WEBP, GIF, JSFile, NodeJSFile, PythonFile, HTMLFile, Git, and more.

</details>

<details>
<summary><strong>Weather</strong> — conditions and atmospheric icons</summary>

Sun, Cloud, Rain, Snow, Storm, Wind, Fog, Tornado, Rainbow, Humidity, Temperature, and more.

</details>

<details>
<summary><strong>Transport</strong> — vehicles and travel</summary>

Car, Bus, Train, Plane, Bicycle, Motorcycle, Ship, Rocket, Ambulance, Taxi, and more.

</details>

<details>
<summary><strong>Food</strong> — meals, beverages, and cuisine</summary>

Pizza, Burger, Sushi, Coffee, Tea, Cake, Apple, Salad, and more.

</details>

<details>
<summary><strong>Medical</strong> — health and healthcare</summary>

Heart, Pill, Stethoscope, Syringe, Bandage, Hospital, DNA, Brain, and more.

</details>

<details>
<summary><strong>Sports</strong> — sports and fitness</summary>

Soccer, Basketball, Tennis, Baseball, Swimming, Running, Gym, Trophy, and more.

</details>

<details>
<summary><strong>Nature</strong> — plants, animals, and environment</summary>

Tree, Flower, Leaf, Mountain, Ocean, Fire, Water, Earth, and more.

</details>

<details>
<summary><strong>Education</strong> — learning and academia</summary>

Book, Graduation, Pencil, Ruler, Microscope, Calculator, Blackboard, and more.

</details>

<details>
<summary><strong>Music</strong> — audio and instruments</summary>

Note, Headphones, Guitar, Piano, Microphone, Speaker, Vinyl, and more.

</details>

<details>
<summary><strong>Home</strong> — household and living</summary>

House, Door, Window, Sofa, Bed, Kitchen, Bath, Garage, and more.

</details>

---

## Module Formats

| Format | File | Use case |
|--------|------|----------|
| ESM | `dist/index.js` | Modern bundlers (Vite, webpack 5, Rollup) |
| CJS | `dist/index.cjs` | Node.js, older bundlers |
| Types | `dist/index.d.ts` | TypeScript projects |

The `exports` field in `package.json` handles format resolution automatically — no config needed.

---

## Project Structure

```
src/
├── icons/
│   ├── BaseIcon.jsx          # Shared SVG wrapper (all icons use this)
│   ├── brands.jsx            # Brand & platform icons
│   ├── brands_additions.jsx  # Additional brand icons
│   ├── ui.jsx                # UI controls & navigation
│   ├── ui_additions.jsx      # Additional UI icons
│   ├── files.jsx             # File type & format icons
│   ├── files_additions.jsx   # Additional file icons
│   ├── weather.jsx           # Weather & climate icons
│   ├── transport.jsx         # Vehicle & travel icons
│   ├── food.jsx              # Food & beverage icons
│   ├── medical.jsx           # Health & medical icons
│   ├── sports.jsx            # Sports & fitness icons
│   ├── nature.jsx            # Nature & environment icons
│   ├── education.jsx         # Education & learning icons
│   ├── music.jsx             # Music & audio icons
│   └── home.jsx              # Home & household icons
├── index.ts                  # Library entry point
└── index.js                  # Legacy JS entry
```

---

## Support

Need help, have a question, or want to report an issue? Visit the package support page:

**[msr-icons Support →](https://msr-dev-hub-48fed1f8.base44.app)**

---

## License

[MIT](./LICENSE) © [Michael Scharff](https://github.com/Minka1902)
