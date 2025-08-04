# @ws-portfolio/design-system

A comprehensive design system built with Preact and TypeScript, featuring reusable UI components with Tailwind CSS styling and Storybook documentation.

## Overview

This design system provides a collection of well-tested, accessible, and consistent UI components for building modern web applications. All components are built with Preact and TypeScript, styled with Tailwind CSS v4, and documented with Storybook.

## Features

- 🎨 **Modern Design**: Clean, consistent visual design language
- 🔧 **TypeScript**: Full type safety and excellent developer experience
- ⚡ **Preact**: Lightweight React alternative for optimal performance
- 🎯 **Tailwind CSS v4**: Utility-first CSS framework with latest features
- 📚 **Storybook**: Interactive component documentation and testing
- 🧪 **css-variants**: Type-safe variant system for component styling
- 📦 **Monorepo Ready**: Designed for workspace integration

## Components

### Typography

- **H1**: Primary heading component with consistent styling
- **H2**: Secondary heading with primary/secondary variants
- **H3**: Tertiary heading with primary/secondary/tertiary variants
- **Text**: Body text component with primary/secondary variants

### Navigation

- **Nav**: Responsive navigation bar with mobile menu support
- **Link**: Styled link component with hover effects

### Layout & Content

- **Card**: Flexible card component with odd/even positioning support
- **CardBlog**: Specialized blog card with image, title, description, and CTA
- **ProjectCard**: Project showcase card with topics/tags support
- **Footer**: Site footer with branding and attribution

### Interactive

- **Button**: Primary button component with multiple variants

## Installation

```bash
# Install dependencies
pnpm install
```

## Development

### Start Storybook Development Server

```bash
pnpm dev
```

This will start Storybook on `http://localhost:6006` where you can view and interact with all components.

### Build Components

```bash
pnpm build
```

Builds the component library for distribution, generating both UMD and ES modules along with TypeScript declarations.

### Build Storybook

```bash
pnpm build-storybook
```

Builds a static version of Storybook for deployment.

### Deploy to Cloudflare

```bash
pnpm deploy
```

Deploys the Storybook build to Cloudflare Workers.

## Usage

### Basic Import

```tsx
import { Button, Card, H1, Text } from '@ws-portfolio/design-system';

function MyComponent() {
  return (
    <Card>
      <H1>Welcome</H1>
      <Text variant="primary">
        This is a sample component using the design system.
      </Text>
      <Button variant="primary" onClick={() => console.log('Clicked!')}>
        Get Started
      </Button>
    </Card>
  );
}
```

### Component Variants

Most components support variants for different visual styles:

```tsx
// Heading variants
<H2 variant="primary">Primary Heading</H2>
<H2 variant="secondary">Secondary Heading</H2>

// Text variants
<Text variant="primary">Primary text</Text>
<Text variant="secondary">Secondary text</Text>

// Button variants
<Button variant="primary">Primary Button</Button>
<Button variant="secondary">Secondary Button</Button>
```

## Architecture

### Component Structure

Each component follows a consistent structure:

```text
components/
├── ComponentName/
│   ├── ComponentName.tsx      # Main component implementation
│   ├── ComponentName.stories.tsx # Storybook stories
│   ├── types.ts              # TypeScript interfaces
│   └── index.ts              # Module exports
```

### Styling System

Components use `css-variants` for type-safe styling with Tailwind CSS classes:

```tsx
import { cv } from 'css-variants';

const buttonClasses = cv({
  base: 'px-4 py-2 rounded font-medium transition-colors',
  variants: {
    variant: {
      primary: 'bg-blue-500 text-white hover:bg-blue-600',
      secondary: 'bg-gray-200 text-gray-800 hover:bg-gray-300'
    }
  }
});
```

## Dependencies

### Runtime Dependencies

- **@ws-portfolio/styling**: Shared styling utilities
- **@ws-portfolio/fonts**: Font definitions and loading
- **css-variants**: Type-safe variant system
- **preact**: React alternative for components
- **radash**: Utility functions
- **tailwindcss**: CSS framework

### Development Dependencies

- **Storybook**: Component documentation and testing
- **TypeScript**: Type checking and compilation
- **Vite**: Build tool and development server
- **Biome**: Code formatting and linting

## Scripts

| Script | Description |
|--------|-------------|
| `dev` | Start Storybook development server |
| `build` | Build component library for distribution |
| `build-storybook` | Build static Storybook |
| `deploy` | Deploy to Cloudflare Workers |
| `format` | Format code with Biome |
| `format:lint` | Format and lint code |
| `lint` | Lint code with Biome |

## Migration Notes

This design system was migrated from Astro/Svelte components to Preact with TypeScript, maintaining:

- Identical visual styling and behavior
- Component API compatibility where possible
- Enhanced type safety and developer experience
- Improved reusability across different frameworks
