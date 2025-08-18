/** @type {import('next').NextConfig} */
const nextConfig = {
  // Enable React strict mode for better development experience
  reactStrictMode: true,
  
  // Enable SWC minification for better performance
  swcMinify: true,
  
  // Image optimization
  images: {
    domains: [
      // Add image domains as needed
      'localhost',
      // 'your-image-cdn.com'
    ],
    // Optimize for mobile-first experience
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
  },
  
  // Environment variables available to client-side
  env: {
    NEXT_PUBLIC_APP_NAME: 'Mountain to Future',
    NEXT_PUBLIC_APP_DESCRIPTION: '山区孩子的未来之路',
  },
  
  // Headers for security and performance
  async headers() {
    return [
      {
        source: '/(.*)',
        headers: [
          // Security headers
          {
            key: 'X-Frame-Options',
            value: 'DENY',
          },
          {
            key: 'X-Content-Type-Options',
            value: 'nosniff',
          },
          {
            key: 'Referrer-Policy',
            value: 'origin-when-cross-origin',
          },
          // Performance headers
          {
            key: 'X-DNS-Prefetch-Control',
            value: 'on',
          },
        ],
      },
    ];
  },
  
  // Redirects for better URL structure
  async redirects() {
    return [
      // Add redirects as needed
    ];
  },
  
  // Rewrites for clean URLs
  async rewrites() {
    return [
      // Add URL rewrites as needed
    ];
  },
}

module.exports = nextConfig