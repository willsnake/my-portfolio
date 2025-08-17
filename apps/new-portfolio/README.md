# @ws-portfolio/portfolio

A modern portfolio website built with Astro, featuring a blog, project showcase, and professional experience sections. This application integrates with the custom design system and utilizes Preact components for interactive elements.

## Overview

This is the main portfolio application that showcases professional work, experience, and blog content. Built with Astro for optimal performance and SEO, it leverages the workspace's design system for consistent styling and reusable components.

## Features

- 🚀 **Astro Framework**: Static site generation with optimal performance
- 📝 **Blog System**: MDX-powered blog with content collections
- 💼 **Portfolio Showcase**: Projects and professional experience sections
- 🎨 **Design System Integration**: Uses @ws-portfolio/design-system components
- ⚡ **Preact Components**: Interactive elements with minimal JavaScript
- 🎯 **SEO Optimized**: Sitemap, RSS feed, and meta tags
- 📱 **Responsive Design**: Mobile-first approach with Tailwind CSS
- 🌐 **Multi-Environment**: Staging and production deployments on Cloudflare

## Tech Stack

- **Framework**: Astro 5.7+
- **UI Components**: Preact with @ws-portfolio/design-system
- **Styling**: Tailwind CSS v4 with @ws-portfolio/styling
- **Content**: MDX for blog posts and content collections
- **Deployment**: Cloudflare Workers/Pages
- **Build Tool**: Vite with custom aliases
- **Code Quality**: Biome for formatting and linting

## Installation

```bash
# Install dependencies from the monorepo root
pnpm install
```

## Development

### Start Development Server

```bash
pnpm dev
```

This starts the Astro development server at `http://localhost:4321`.

### Build for Production

```bash
pnpm build
```

Builds the static site to the `./dist/` directory.

### Preview Production Build

```bash
pnpm preview
```

Serves the production build locally for testing.

### Deploy to Cloudflare

```bash
pnpm deploy
```

Deploys the application to Cloudflare Workers.

## Project Structure

```text
apps/new-portfolio/
├── src/
│   ├── components/          # Astro components
│   ├── content/            # Content collections (blog posts)
│   ├── layouts/            # Page layouts
│   ├── pages/              # Route pages
│   ├── styles/             # Additional styles
│   ├── consts.ts           # Site constants
│   ├── content.config.ts   # Content collection schemas
│   └── types.ts            # TypeScript type definitions
├── public/                 # Static assets
├── astro.config.mjs        # Astro configuration
├── wrangler.jsonc          # Cloudflare Workers config
├── tsconfig.json           # TypeScript configuration
└── package.json            # Dependencies and scripts
```

## Pages and Routes

### Main Pages

- **/** - Homepage with introduction and highlights
- **/about** - About page with personal information
- **/projects** - Portfolio projects showcase
- **/experience** - Professional experience timeline
- **/blog** - Blog listing page
- **/contact** - Contact information and form

### Content Schema

Content validation is handled by `src/content.config.ts` using Zod schemas.

## Configuration

### Environment Variables

- **ENVIRONMENT**: Deployment environment (staging/production)
- Additional environment variables can be configured in `.env` files
- **Security**: Environment variables are encrypted using SOPS (Secrets OPerationS) with age encryption for secure storage and deployment

### Site Configuration

Site metadata is configured in `src/consts.ts`:

```typescript
export const SITE_TITLE = 'Your Site Title';
export const SITE_DESCRIPTION = 'Your site description';
```

### Astro Configuration

The `astro.config.mjs` includes:

- MDX integration for enhanced markdown
- Preact integration for interactive components
- Sitemap generation
- Tailwind CSS via Vite plugin
- Path aliases for clean imports

## Design System Integration

### Component Usage

```tsx
import { Button, Card, H1, Text } from '@ws-portfolio/design-system';

<Card>
  <H1>Welcome</H1>
  <Text variant="primary">Portfolio content</Text>
  <Button variant="primary">Contact Me</Button>
</Card>
```

### Styling

```astro
---
import '@ws-portfolio/styling';
---

<div class="bg-black-blue text-dark-white">
  <!-- Content with design system colors -->
</div>
```

## Path Aliases

The application uses custom path aliases for clean imports:

- `@components` → `./src/components`
- `@icons` → `./src/assets/svgs/icons`
- `@imgs` → `./src/assets/imgs`
- `@pages` → `./src/pages`
- `@styles` → `./src/styles`
- `@layouts` → `./src/layouts`
- `@svgs` → `./src/assets/svgs`
- `@utils` → `./src/utils`
- `@customTypes` → `./types.ts`

## Deployment

### Environments

- **Staging**: `staging.willsnake.dev`
- **Production**: `production.willsnake.dev`

### Cloudflare Configuration

Deployment is configured via `wrangler.jsonc` with:

- Environment-specific routes and variables
- Asset directory configuration
- Build command specification

### CI/CD Integration

The application integrates with the monorepo's GitHub Actions workflows for:

- Automated deployments on PR (staging)
- Production deployments on main branch merges
- Preview URL generation and commenting

## Performance Features

- **Static Site Generation**: Pre-built pages for optimal loading
- **Image Optimization**: Astro's built-in image optimization
- **Minimal JavaScript**: Only necessary interactive components use JS
- **CSS Optimization**: Tailwind CSS purging and optimization
- **CDN Delivery**: Cloudflare global edge network

## SEO Features

- **Sitemap**: Automatically generated sitemap.xml
- **RSS Feed**: Blog RSS feed at /rss.xml
- **Meta Tags**: Proper OpenGraph and Twitter card tags
- **Semantic HTML**: Accessible and SEO-friendly markup
- **Fast Loading**: Optimized for Core Web Vitals

## Scripts

| Script | Description |
|--------|-------------|
| `dev` | Start development server |
| `build` | Build for production |
| `preview` | Preview production build |
| `deploy` | Deploy to Cloudflare |
| `format` | Format code with Biome |
| `format:lint` | Format and lint code |
| `lint` | Lint code with Biome |
| `astro` | Run Astro CLI commands |

## Dependencies

### Core Dependencies

- **astro**: Static site generator framework
- **@astrojs/preact**: Preact integration for Astro
- **@astrojs/mdx**: MDX support for enhanced markdown
- **@astrojs/sitemap**: Automatic sitemap generation
- **@astrojs/rss**: RSS feed generation
- **@ws-portfolio/design-system**: Custom component library
- **@ws-portfolio/styling**: Shared styling configuration
- **tailwindcss**: Utility-first CSS framework

### Additional Tools

- **@octokit/core**: GitHub API integration
- **@tailwindcss/vite**: Tailwind CSS Vite plugin
- **preact**: Lightweight React alternative

## Troubleshooting

### Common Issues

**Build Errors**

- Check that all workspace dependencies are installed
- Verify content collection schemas match frontmatter
- Ensure all imports use correct paths or aliases

**Styling Issues**

- Verify @ws-portfolio/styling is imported
- Check Tailwind CSS configuration
- Ensure design system components are properly imported

**Deployment Issues**

- Check Cloudflare Workers configuration
- Verify environment variables are set
- Ensure build output is in ./dist/ directory
