# msr-icons
A lightweight, production-ready React SVG icon library with **380+ pre-built icons**. Perfect for modern web applications.

## Features

- ✨ **380+ SVG Icons** – Files, UI, brands, social, tech stack, utilities, and more
- 🎨 **Customizable** – Control color, size, and styling via props
- 📦 **Tree-shakeable** – Import only what you need
- ⚡ **Optimized** – Built with Vite for fast dev/build
- 🚀 **NPM Ready** – Published and ready to install

## Installation

```bash
npm install msr-icons
# or
yarn add msr-icons
# or
pnpm add msr-icons
```

## Quick Start

### Using the Icon Wrapper

```jsx
import { Icon } from 'msr-icons';

export default function App() {
  return <Icon name="Facebook" size={32} color="#286bc2" />;
}
```

### Listing All Icon Names

If you want to inspect all available icon component names (for docs, autocomplete hints, or dynamic selection), you can list the exported keys:

```jsx
import * as Icons from 'msr-icons';

const iconNames = Object
  .keys(Icons)
  .filter((key) => key !== 'Icon'); // omit the wrapper if you only need raw icons

console.log(iconNames);
```

### Importing Individual Icons

```jsx
import { Facebook, Github, Twitter } from 'msr-icons';

export default function App() {
  return (
    <div>
      <Facebook fillColor="#286bc2" onClick={() => alert('Facebook')} />
      <Github fillColor="#000" />
      <Twitter fillColor="#1DA1F2" isColored />
    </div>
  );
}
```

## Icon Props

### Standard Props (Available on all icons)

- **`fillColor`** (string) – SVG fill/stroke color. Default varies by icon.
- **`isColored`** (boolean) – Use brand color or custom color. Default: `true`
- **`onClick`** (function) – Click handler
- **`onHover`** (function) – Mouse enter event handler
- **`backgroundColor`** (string) – Background color for the SVG container
- **`style`** (object) – Inline styles object (spread with standard props)
- **`className`** (string) – CSS class names for styling

### Icon-Specific Props

- **`WIFI`** – `isDot` (boolean), `is4Lines` (boolean), `strokeWidth` (string)
- **`Snapchat`** – `backgroundColor` (string)
- **`Login/Logout`** – `lineWidth` (string)
- **`Reload`** – `lineWidth` (string)
- **`EditBox`** – `strokeWidth` (string)

### Usage Examples

```jsx
// Basic usage with custom color
<Facebook fillColor="#286bc2" />

// With event handlers
<Twitter 
  fillColor="#1DA1F2" 
  onClick={() => console.log('clicked')}
  onHover={() => console.log('hovered')}
/>

// With styling
<Github 
  fillColor="#000" 
  backgroundColor="#f0f0f0"
  style={{ padding: '10px', borderRadius: '4px' }}
  className="my-icon"
/>

// With custom colors and brand colors
<Instagram isColored fillColor="#E1306C" />  // Custom color
<Instagram isColored />  // Brand color (default #cc39a4)
<Instagram />  // Default currentColor
```

## Available Icons

**Files & Formats:** File, Folder variants, CSV, JSON, XML, Markdown, Excel, PowerPoint, Config, DB, RAR, SVG, WEBP, YAML, TOML

**UI Components:** Settings, Search, Menu, Trash, Edit, Download/Upload, Refresh/Reload, Send, Bell, Alerts, Charts, Toggles, Inputs, Layouts, Themes, Accessibility

**Brands & Platforms:** OpenAI, Perplexity, Claude, Gemini, Hugging Face, MongoDB, PostgreSQL, Elasticsearch, RabbitMQ, Redis, Solana, Ethereum, Bitcoin, MetaMask, Twilio, Sendgrid, Mailchimp, Intercom, StatusPage, PagerDuty, Facebook, Twitter, Instagram, GitHub, LinkedIn, Discord, Slack, Figma, Google, AWS, Azure, Docker, and more

**Utilities:** Mail, Phone, Map, Location, Printer, Shield, Globe, Internet, Disk, Lock/Unlock, Key, Clipboard, QR/Barcode, Scanner, Flip/Rotate, Zoom

... and **380+ icons in total**.

## Project Structure

```
src/
├── icons/
│   ├── files.jsx      # File & format icons
│   ├── ui.jsx         # UI & controls
│   └── brands.jsx     # Brand & platform icons
├── Icon.jsx           # Icon wrapper component
├── Icon.css           # Icon styling
├── index.js           # Library entry
└── main.jsx           # Dev entry
```

### Self-Explaining Props
All props use clear, descriptive names:
- `fillColor` instead of `color` - explicitly indicates it controls the fill color
- `backgroundColor` - for container background
- `onHover` - for mouse hover events
- `strokeWidth` - for SVG stroke thickness

### Styling Support
Each icon supports comprehensive styling:
```jsx
<Facebook
  fillColor="#286bc2"
  backgroundColor="rgba(255,255,255,0.1)"
  style={{ 
    padding: '8px',
    borderRadius: '50%',
    cursor: 'pointer'
  }}
  onHover={() => {/* handle hover */}}
  onClick={() => {/* handle click */}}
/>
```

### Tree-Shakeable
Import only the icons you need - unused icons are automatically removed during build:

```jsx
// Only Facebook and Github are bundled
import { Facebook, Github } from 'msr-icons';
```

### ESM and CommonJS Support
The library is built with both formats:
- **ESM** (ES Modules) - `dist/index.js` - for modern bundlers
- **CJS** (CommonJS) - `dist/index.cjs` - for Node.js environments
- **TypeScript Definitions** - `dist/index.d.ts` - for type support

### Export Map
Configured in `package.json` for optimal resolution:
```json
"exports": {
  ".": {
    "types": "./dist/index.d.ts",
    "import": "./dist/index.js",
    "require": "./dist/index.cjs"
  }
}
```

## License

MIT
