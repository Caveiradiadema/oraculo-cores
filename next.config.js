/** @type {import('next').NextConfig} */
const nextConfig = {
  // ✅ Performance & Security
  compress: true,
  poweredByHeader: false,
  productionBrowserSourceMaps: false,
  reactStrictMode: true,

  // ✅ ES2020+ (Remove Polyfills desnecessários)
  experimental: {
    optimizePackageImports: ['lodash', 'date-fns'],
  },

  // ✅ Images
  images: {
    unoptimized: true,
    formats: ['image/webp', 'image/avif'],
    dangerouslyAllowSVG: true,
    contentSecurityPolicy: "default-src 'self'; script-src 'none'; sandbox;",
  },

  // ✅ Headers para cache + segurança
  async headers() {
    return [
      // Cache agressivo para assets imutáveis (1 ano)
      {
        source: '/img/:path*',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=31536000, immutable',
          },
          {
            key: 'Content-Type',
            value: 'image/:path*',
          },
        ],
      },
      // CSS crítico (1 ano)
      {
        source: '/styles.css',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=31536000, immutable',
          },
        ],
      },
      // Fonts (1 ano)
      {
        source: '/fonts/:path*',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=31536000, immutable',
          },
        ],
      },
      // Next.js static assets (1 ano)
      {
        source: '/_next/static/:path*',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=31536000, immutable',
          },
        ],
      },
      // Security headers
      {
        source: '/:path*',
        headers: [
          {
            key: 'X-Content-Type-Options',
            value: 'nosniff',
          },
          {
            key: 'X-Frame-Options',
            value: 'DENY',
          },
          {
            key: 'X-XSS-Protection',
            value: '1; mode=block',
          },
          {
            key: 'Referrer-Policy',
            value: 'strict-origin-when-cross-origin',
          },
        ],
      },
    ];
  },

  // ✅ Redirects (SEO)
  async redirects() {
    return [
      {
        source: '/index.html',
        destination: '/',
        permanent: true,
      },
    ];
  },

  // ✅ Turbopack config (Next.js 16+)
  turbopack: {
    resolveAlias: {
      '@': './lib',
    },
  },
};

module.exports = nextConfig;
