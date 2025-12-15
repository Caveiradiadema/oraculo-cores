/** @type {import('next').NextConfig} */
const nextConfig = {
  // ✅ Performance
  compress: true,
  poweredByHeader: false,
  productionBrowserSourceMaps: false,
  reactStrictMode: true,

  // ✅ Images
  images: {
    unoptimized: true,
    formats: ['image/webp', 'image/avif'],
  },

  // ✅ Headers para cache
  async headers() {
    return [
      {
        source: '/img/:path*',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=31536000, immutable',
          },
        ],
      },
      {
        source: '/styles.css',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=31536000, immutable',
          },
        ],
      },
    ];
  },
};

module.exports = nextConfig;
