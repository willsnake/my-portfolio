# WillSnake Portfolio Monorepo

A modern, full-stack portfolio monorepo built with cutting-edge web technologies. This project showcases professional work through a performant website while maintaining a scalable, well-architected codebase with a custom design system.

## Overview

This monorepo contains a complete portfolio ecosystem including a custom design system, styling configuration, font management, and the main portfolio application. Built with modern tools and best practices, it demonstrates expertise in full-stack development, design systems, and DevOps.

## 🚀 Key Features

- **🎨 Custom Design System**: Reusable Preact components with TypeScript
- **⚡ High Performance**: Astro-powered static site generation
- **🔧 Modern Tooling**: PNPM workspaces, Turbo, Biome, and mise
- **🌐 Multi-Environment**: Staging and production deployments on Cloudflare
- **🔒 Secure Configuration**: SOPS and age encryption for environment variables
- **📱 Responsive Design**: Mobile-first approach with Tailwind CSS v4
- **🤖 Automated CI/CD**: GitHub Actions with selective deployment
- **📝 Content Management**: MDX-powered blog with type-safe content collections
- **🎯 SEO Optimized**: Sitemap, RSS feed, and performance-focused

## 🏗️ Architecture

### Monorepo Structure

```text
willsnake-portfolio/
├── apps/
│   └── new-portfolio/          # Main portfolio application (Astro)
├── packages/
│   ├── design-system/          # Reusable UI components (Preact + TypeScript)
│   ├── styling/               # Tailwind CSS configuration and themes
│   └── fonts/                 # Font assets and CSS definitions
├── .github/
│   └── workflows/             # CI/CD automation
├── .changeset/                # Version management
└── Configuration files...
```

### Technology Stack

- **Framework**: Astro 5.7+ for static site generation
- **UI Library**: Preact with custom design system
- **Styling**: Tailwind CSS v4 with OKLCH color system
- **Content**: MDX for enhanced markdown with type safety
- **Package Manager**: PNPM with workspaces
- **Build System**: Turbo for efficient monorepo builds
- **Code Quality**: Biome for formatting and linting
- **Version Management**: Changesets for semantic versioning
- **Deployment**: Cloudflare Workers/Pages
- **Runtime Management**: mise for Node.js and PNPM versions

## 📦 Packages

### [@ws-portfolio/portfolio](./apps/new-portfolio)

The main portfolio application built with Astro, featuring:

- Blog system with MDX content collections
- Project showcase and professional experience
- Contact forms and interactive elements
- SEO optimization and performance features

### [@ws-portfolio/design-system](./packages/design-system)

A comprehensive component library including:

- Typography components (H1, H2, H3, Text)
- Interactive elements (Button, Link, Nav)
- Layout components (Card, CardBlog, ProjectCard, Footer)
- Storybook documentation and testing

### [@ws-portfolio/styling](./packages/styling)

Centralized styling configuration providing:

- OKLCH-based color system for better color accuracy
- Custom Tailwind CSS v4 theme configuration
- Typography system with IBM Plex fonts
- Design tokens and CSS custom properties

### [@ws-portfolio/fonts](./packages/fonts)

Font asset management including:

- IBM Plex Sans (Regular 400) for body text
- IBM Plex Mono (Medium 500) for code and technical content
- Self-hosted fonts for performance and privacy
- Optimized @font-face declarations

## 🛠️ Development

### Prerequisites

- **Node.js**: 22.15.0 (managed by mise)
- **PNPM**: 10.10.0 (managed by mise)
- **mise**: For runtime version management

### Quick Start

```bash
# Install mise (if not already installed)
curl https://mise.run | sh

# Install and use specified Node.js and PNPM versions
mise install

# Install dependencies
pnpm install

# Start development server
pnpm --filter @ws-portfolio/portfolio dev

# Start Storybook (design system)
pnpm --filter @ws-portfolio/design-system dev
```

### Available Scripts

```bash
# Development
pnpm --filter <package-name> dev     # Start development server
pnpm --filter <package-name> build   # Build for production
pnpm --filter <package-name> preview # Preview production build

# Code Quality
pnpm --filter <package-name> lint    # Lint code with Biome
pnpm --filter <package-name> format  # Format code with Biome

# Deployment
pnpm --filter <package-name> deploy  # Deploy to Cloudflare

# Monorepo Management
turbo build                          # Build all packages
turbo dev                           # Start all dev servers
changeset                           # Create a changeset for versioning
```

## 🚀 Deployment

### Environments

- **Staging**: `staging.willsnake.dev` - Automatic deployment on PRs
- **Production**: `production.willsnake.dev` - Deployment on main branch

### CI/CD Pipeline

The project uses GitHub Actions for automated deployment:

1. **Change Detection**: Identifies modified packages in PRs
2. **Selective Building**: Only builds and deploys changed packages
3. **Staging Deployment**: Automatic preview deployments with URL comments
4. **Version Management**: Automatic semantic versioning with Changesets
5. **Production Deployment**: Triggered on main branch merges

### Security

- **Environment Variables**: Encrypted with SOPS and age
- **Secrets Management**: Secure handling of API keys and configuration
- **Access Control**: Proper authentication for deployment environments

## 🎨 Design System

### Color System

Utilizes OKLCH color space for better perceptual uniformity:

- **Primary Colors**: black-blue, blue, dark-blue
- **Neutrals**: black, white, dark-white
- **Grays**: dark-gray, gray, light-gray, lightest-gray

### Typography

- **IBM Plex Sans**: Primary font for UI and content
- **IBM Plex Mono**: Monospace font for code and technical content

### Component Architecture

- **css-variants**: Type-safe styling with Tailwind classes
- **Storybook**: Interactive documentation and testing
- **TypeScript**: Full type safety for props and interfaces
- **Modular Structure**: Consistent file organization across components

## 📊 Performance

### Optimization Features

- **Static Site Generation**: Pre-built pages for optimal loading
- **Selective Hydration**: JavaScript only where needed
- **Image Optimization**: Astro's built-in image processing
- **CSS Optimization**: Tailwind purging and minification
- **CDN Delivery**: Global edge network with Cloudflare

### Core Web Vitals

- **LCP**: Optimized with static generation and image optimization
- **FID**: Minimal JavaScript for excellent interactivity
- **CLS**: Consistent layouts with design system components

## 🔧 Configuration

### Key Configuration Files

- **`pnpm-workspace.yaml`**: PNPM workspace configuration
- **`turbo.json`**: Turbo build system configuration
- **`mise.toml`**: Runtime version management
- **`biome.jsonc`**: Code formatting and linting rules
- **`.changeset/`**: Version management configuration

### Package Management

- **Catalog**: Centralized dependency version management
- **Workspace Protocol**: Internal package linking
- **Selective Installation**: Efficient dependency resolution

## 🔍 Troubleshooting

### Common Issues

**Build Failures**

- Check Node.js and PNPM versions match `mise.toml`
- Verify all workspace dependencies are installed
- Clear Turbo cache: `turbo prune`

**Development Server Issues**

- Ensure ports are available (4321 for Astro, 6006 for Storybook)
- Check for conflicting processes
- Restart development servers

**Deployment Issues**

- Verify environment variables are properly encrypted
- Check Cloudflare Workers configuration
- Review GitHub Actions logs for specific errors

**Styling Issues**

- Ensure design system packages are built
- Check Tailwind CSS configuration
- Verify import paths for styling packages

## 📚 Documentation

Each package contains detailed documentation:

- **[Portfolio App](./apps/new-portfolio/README.md)**: Main application documentation
- **[Design System](./packages/design-system/README.md)**: Component library guide
- **[Styling](./packages/styling/README.md)**: Theme and styling configuration
- **[Fonts](./packages/fonts/README.md)**: Typography asset management

## 🏆 Project Highlights

### Technical Excellence

- **Modern Architecture**: Cutting-edge tools and best practices
- **Performance Focus**: Optimized for speed and user experience
- **Developer Experience**: Excellent tooling and documentation
- **Scalability**: Well-structured for growth and maintenance

### Professional Features

- **Portfolio Showcase**: Comprehensive project and experience display
- **Blog System**: Content management with MDX and type safety
- **Contact Integration**: Professional communication channels
- **SEO Optimization**: Search engine friendly implementation

---

**Built with ❤️ by WillSnake**

For questions or collaboration opportunities, please visit the portfolio website or reach out through the contact form.
