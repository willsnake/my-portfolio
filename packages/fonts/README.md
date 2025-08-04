# @ws-portfolio/fonts

A dedicated package that manages custom font assets for the portfolio website. This package provides consistent typography resources across the design system and applications, ensuring unified font usage throughout the project to maintain brand consistency and optimal text rendering.

## Overview

This package exports font files and related CSS configurations, enabling seamless font integration across all workspace packages. It includes IBM Plex font family assets optimized for web usage.

## Features

- 📝 **IBM Plex Font Family**: Professional typography with Sans and Mono variants
- 📦 **Self-Hosted Fonts**: No external dependencies for better performance and privacy
- 🎯 **Optimized Loading**: Efficient font loading with proper @font-face declarations
- 🔧 **TypeScript Ready**: Full workspace integration with type safety
- ⚡ **Performance**: Local font files for faster loading times
- 🌐 **Cross-Platform**: Consistent rendering across different operating systems

## Installation

This package is automatically installed as a workspace dependency. No manual installation required.

## Usage

### Import Font Styles

```css
@import '@ws-portfolio/fonts';
/* or */
@import '@ws-portfolio/fonts/fonts.css';
```

### In JavaScript/TypeScript

```typescript
import '@ws-portfolio/fonts';
```

### Direct Font File Access

```css
/* Access font files directly */
@font-face {
  font-family: 'Custom Font';
  src: url('@ws-portfolio/fonts/IBMPlexSans-Regular.ttf') format('truetype');
}
```

## Available Fonts

### IBM Plex Sans

- **File**: `IBMPlexSans-Regular.ttf`
- **Weight**: 400 (Regular)
- **Style**: Normal
- **Usage**: Primary font for body text, UI elements, and general content

### IBM Plex Mono

- **File**: `IBMPlexMono-Medium.ttf`
- **Weight**: 500 (Medium)
- **Style**: Normal
- **Usage**: Monospace font for code blocks, technical content, and data display

## Font Characteristics

### IBM Plex Sans

- **Type**: Humanist sans-serif
- **Designer**: Mike Abbink (IBM)
- **Features**: Excellent readability, modern appearance, multilingual support
- **Best For**: Body text, headings, UI components, general content

### IBM Plex Mono

- **Type**: Monospaced
- **Designer**: Mike Abbink (IBM)
- **Features**: Clear character distinction, coding-friendly, consistent spacing
- **Best For**: Code snippets, technical documentation, data tables

## CSS Integration

The package provides ready-to-use @font-face declarations:

```css
@font-face {
  font-family: 'IBM Plex Sans';
  font-style: normal;
  font-weight: 400;
  src: url('./IBMPlexSans-Regular.ttf') format('truetype');
}

@font-face {
  font-family: 'IBM Plex Mono';
  font-style: normal;
  font-weight: 500;
  src: url('./IBMPlexMono-Medium.ttf') format('truetype');
}
```

## Usage Examples

### Basic CSS Usage

```css
.body-text {
  font-family: 'IBM Plex Sans', sans-serif;
}

.code-block {
  font-family: 'IBM Plex Mono', monospace;
}
```

### With Tailwind CSS

```html
<p class="font-ibm-plex-sans">Regular body text</p>
<code class="font-ibm-plex-mono">Code snippet</code>
```

### In React/Preact Components

```tsx
const MyComponent = () => (
  <div>
    <h1 style={{ fontFamily: 'IBM Plex Sans' }}>Heading</h1>
    <pre style={{ fontFamily: 'IBM Plex Mono' }}>Code block</pre>
  </div>
);
```

## File Structure

```text
packages/fonts/
├── fonts.css                 # Font face declarations
├── IBMPlexSans-Regular.ttf   # IBM Plex Sans font file
├── IBMPlexMono-Medium.ttf    # IBM Plex Mono font file
├── package.json              # Package configuration
└── README.md                 # This documentation
```

## Package Exports

The package exports multiple entry points for flexible usage:

```json
{
  "exports": {
    "./fonts.css": "./fonts.css",
    "./IBMPlexMono-Medium.ttf": "./IBMPlexMono-Medium.ttf",
    "./IBMPlexSans-Regular.ttf": "./IBMPlexSans-Regular.ttf",
    ".": "./fonts.css"
  }
}
```

## Integration

This package is used by:

- **@ws-portfolio/styling**: Global font configuration
- **@ws-portfolio/design-system**: Component typography
- **apps/new-portfolio**: Application-wide font usage
- Any other workspace packages requiring typography

## Performance Considerations

### Font Loading Strategy

- **Self-hosted**: Eliminates external requests to Google Fonts or other CDNs
- **Preload**: Consider preloading critical fonts in your HTML head
- **Font Display**: Uses browser defaults for optimal loading behavior

### Optimization Tips

```html
<!-- Preload critical fonts -->
<link rel="preload" href="@ws-portfolio/fonts/IBMPlexSans-Regular.ttf" as="font" type="font/ttf" crossorigin>
```

## Browser Support

- **TrueType (.ttf)**: Supported by all modern browsers
- **Fallbacks**: Always include appropriate fallback fonts
- **Progressive Enhancement**: Graceful degradation to system fonts

## Font Licensing

IBM Plex fonts are licensed under the SIL Open Font License (OFL), which allows:

- ✅ Commercial and personal use
- ✅ Modification and redistribution
- ✅ Embedding in applications
- ✅ Web font usage

## Adding New Fonts

To add additional font files:

1. Add the font file to the package directory
2. Update `package.json` exports and files arrays
3. Add @font-face declaration to `fonts.css`
4. Update this documentation

```json
{
  "exports": {
    "./new-font.ttf": "./new-font.ttf"
  },
  "files": [
    "new-font.ttf"
  ]
}
```

## Best Practices

1. **Consistent Usage**: Use the same font families across the entire project
2. **Fallback Fonts**: Always specify appropriate fallback font stacks
3. **Performance**: Consider font loading impact on page performance
4. **Accessibility**: Ensure fonts meet readability standards
5. **Licensing**: Verify font licensing for your use case

## Troubleshooting

### Font Not Loading

- Verify the import statement is correct
- Check that the font files are accessible
- Ensure proper CORS headers if serving from different domains

### Rendering Issues

- Clear browser cache
- Check for font format compatibility
- Verify fallback fonts are working
