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

### Generic `Icon` wrapper

The easiest way to use any icon by name:

```jsx
import { Icon } from 'msr-icons';

export default function App() {
  return (
    <Icon name="Facebook" size={32} color="#286bc2" />
  );
}
```

### Direct named imports (recommended for bundled apps)

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
| `mode` | `'stroke'\|'fill'` | `'fill'` | Render mode for dual-mode icons |

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
<Icon name="CalendarCheck2" color="black" />
<CalendarCheck2 fillColor="black" />

// A color per element
<Icon name="CalendarCheck2" color={{ calendar: 'black', check: 'green' }} />
<CalendarCheck2 fillColor={{ calendar: 'black', check: 'green' }} />
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
<Icon name="CalendarCheck2" color={{ base: 'navy', check: 'green' }} />
```

> **Tip:** not sure what an icon's parts are called? Inspect the rendered SVG —
> every colorable element carries a `data-part="…"` attribute.

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
├── Icon.jsx                  # Generic <Icon name="..." /> wrapper
├── icon.css                  # Base icon styles
├── index.ts                  # Library entry point
└── index.js                  # Legacy JS entry
```

---

## License

[MIT](./LICENSE) © [Michael Scharff](https://github.com/Minka1902)
