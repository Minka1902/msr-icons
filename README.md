# msr-icons

A lightweight, production-ready React SVG icon library with 100+ pre-built icons. Perfect for modern web applications.

## Features

- ✨ **100+ SVG Icons** – Social media, tech stack, UI, utilities, and custom icons
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
  return <Icon name="SvgFacebook" size={32} color="#286bc2" />;
}
```

### Importing Individual Icons

```jsx
import { SvgFacebook, SvgGithub, SvgTwitter } from 'msr-icons';

export default function App() {
  return (
    <div>
      <SvgFacebook fillColor="#286bc2" onClick={() => alert('Facebook')} />
      <SvgGithub fillColor="#000" />
      <SvgTwitter fillColor="#1DA1F2" isColored />
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

- **`SvgWIFI`** – `isDot` (boolean), `is4` (boolean), `strokeWidth` (string)
- **`SvgSnapchat`** – `backgroundColor` (string)
- **`SvgLogin/SvgLogout`** – `lineWidth` (string)
- **`SvgReload`** – `lineWidth` (string)
- **`SvgEditBox`** – `strokeWidth` (string)

### Usage Examples

```jsx
// Basic usage with custom color
<SvgFacebook fillColor="#286bc2" />

// With event handlers
<SvgTwitter 
  fillColor="#1DA1F2" 
  onClick={() => console.log('clicked')}
  onHover={() => console.log('hovered')}
/>

// With styling
<SvgGithub 
  fillColor="#000" 
  backgroundColor="#f0f0f0"
  style={{ padding: '10px', borderRadius: '4px' }}
  className="my-icon"
/>

// With custom colors and brand colors
<SvgInstagram isColored fillColor="#E1306C" />  // Custom color
<SvgInstagram isColored />  // Brand color (default #cc39a4)
<SvgInstagram />  // Default currentColor
```

## Available Icons

**Social Media:** Facebook, Twitter, Instagram, LinkedIn, GitHub, TikTok, Snapchat, WhatsApp, Telegram, Discord, Reddit, Pinterest, Viber, Vine

**Tech Stack:** JavaScript, React, NodeJS, Python, Java, PHP, Docker, AWS, Azure, Google Cloud

**UI Components:** Settings, Search, Menu, Trash, Edit, Download, Upload, Refresh, Reload, Send, Bell, Search, and more

**Utilities:** Mail, Phone, Map, Location, Printer, Shield, Globe, Internet, Disk

... and **100+ more icons**!

## Project Structure

```
src/
├── SvgComponents.jsx   # All 127+ icon components
├── Icon.jsx            # Icon wrapper component
├── Icon.css            # Icon styling
├── index.js            # Main entry point
└── main.jsx            # Dev entry point
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
<SvgFacebook
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
// Only SvgFacebook and SvgGithub are bundled
import { SvgFacebook, SvgGithub } from 'msr-icons';
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
