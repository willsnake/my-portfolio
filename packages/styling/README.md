# @ws-portfolio/styling

A centralized styling configuration package for the portfolio project using Tailwind CSS v4. This package provides a unified theming system with custom color variables in OKLCH format, typography settings, and global styles.

## Overview

This package manages design tokens, imports font resources from `@ws-portfolio/fonts`, and establishes consistent styling patterns to ensure visual coherence across all portfolio components and applications.

## Features

- 🎨 **Custom Color Palette**: OKLCH-based color system for better color accuracy
- 🔧 **Tailwind CSS v4**: Latest version with modern features and performance
- 📝 **Typography System**: IBM Plex Sans and IBM Plex Mono font integration
- 🌐 **Global Styles**: Base styling configuration for consistent appearance
- 🎯 **Design Tokens**: Centralized theme variables for colors, fonts, and shadows
- 📦 **Workspace Integration**: Seamless integration with other portfolio packages

## Installation

This package is automatically installed as a workspace dependency. No manual installation required.

## Usage

### Import Global Styles

```css
@import '@ws-portfolio/styling';
/* or */
@import '@ws-portfolio/styling/global.css';
```

### In JavaScript/TypeScript

```typescript
import '@ws-portfolio/styling';
```

## Color System

The package provides a comprehensive color palette using OKLCH color space for better perceptual uniformity:

### Primary Colors

- **black-blue**: `oklch(17.76% 0 0)` - `#111111`
- **black**: `oklch(0.00% 0 0)` - `#000000`
- **blue**: `oklch(59.13% 0.214 258.31)` - `#1076f9`
- **dark-blue**: `oklch(42.61% 0.102 255.8)` - `#254f85`
- **white**: `oklch(100.00% 0 0)` - `#ffffff`
- **dark-white**: `oklch(98.51% 0 0)` - `#fafafa`

### Gray Scale

- **dark-gray**: `oklch(32.11% 0 0)` - `#333333`
- **gray**: `oklch(51.03% 0 0)` - `#666666`
- **light-gray**: `oklch(68.30% 0 0)` - `#999999`
- **lightest-gray**: `oklch(93.70% 0 0)` - `#eaeaea`

### Usage in Tailwind Classes

```html
<div class="bg-black-blue text-dark-white">
  <h1 class="text-blue">Heading</h1>
  <p class="text-dark-gray">Content</p>
</div>
```

## Typography

### Font Families

- **IBM Plex Sans**: Primary font for body text and UI elements
- **IBM Plex Mono**: Monospace font for code and technical content

### Font Variables

- `--font-ibm-plex-sans`: 'IBM Plex Sans', sans-serif
- `--font-ibm-plex-mono`: 'IBM Plex Mono', monospace

### Fonst Usage

```css
.body-text {
  font-family: var(--font-ibm-plex-sans);
}

.code-text {
  font-family: var(--font-ibm-plex-mono);
}
```

## Shadows

Predefined shadow tokens for consistent elevation:

- **card-blog**: `0px 5px 14px rgba(0, 0, 0, 0.15)` - Used for blog card components

## File Structure

```text
packages/styling/
├── global.css           # Main stylesheet with theme configuration
├── package.json         # Package configuration
└── README.md           # This documentation
```

## Dependencies

- **@ws-portfolio/fonts**: Font assets and CSS definitions
- **tailwindcss**: CSS framework (catalog version)

## Integration

This package is designed to be imported by:

- **@ws-portfolio/design-system**: Component styling
- **apps/new-portfolio**: Main application styling
- Any other workspace packages requiring consistent theming

## Customization

To modify the theme, edit the `@theme` block in `global.css`:

```css
@theme {
  --color-custom: oklch(50% 0.1 180);
  --font-custom: 'Custom Font', sans-serif;
  --shadow-custom: 0px 2px 8px rgba(0, 0, 0, 0.1);
}
```

## OKLCH Color Benefits

- **Perceptual Uniformity**: Colors with the same lightness appear equally bright
- **Better Gradients**: Smoother color transitions
- **Accessibility**: Easier to maintain proper contrast ratios
- **Future-Proof**: Modern color space with wide gamut support

## Best Practices

1. **Use Design Tokens**: Always use the predefined color and font variables
2. **Consistent Naming**: Follow the established naming convention for new tokens
3. **OKLCH Format**: Use OKLCH for new color definitions
4. **Documentation**: Update this README when adding new design tokens
