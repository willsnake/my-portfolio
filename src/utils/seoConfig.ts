import type { ManifestOptions } from 'vite-plugin-pwa';

/**
 * Defines the default SEO configuration for the website.
 */
export const seoConfig = {
  baseURL: 'https://willsnake.dev',
  description: 'Hi, I’m WillSnake! I’m a Full-Stack Engineer.',
  type: 'website',
  image: {
    url: 'https://picsum.photos/1200/630',
    alt: 'OpenGraph thumbnail description.',
    width: 1200,
    height: 630,
  },
  siteName: 'WillSnake Dev Portfolio',
  twitter: {
    card: 'summary_large_image',
  },
};

/**
 * Defines the configuration for PWA webmanifest.
 */
export const manifest: Partial<ManifestOptions> = {
  name: 'WillSnake Dev Portfolio',
  short_name: 'WillSnake Dev Portfolio',
  description: 'Hi, I’m WillSnake! I’m a Full-Stack Engineer.',
  theme_color: '#254f85',
  background_color: '#000000',
  display: 'minimal-ui',
  icons: [
    {
      src: '/assets/favicons/favicon-192x192.png',
      sizes: '192x192',
      type: 'image/png',
    },
    {
      src: '/assets/favicons/favicon-512x512.png',
      sizes: '512x512',
      type: 'image/png',
    },
    {
      src: '/assets/favicons/favicon-512x512.png',
      sizes: '512x512',
      type: 'image/png',
      purpose: 'any maskable',
    },
  ],
};
