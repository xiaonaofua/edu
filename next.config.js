/** @type {import('next').NextConfig} */
const nextConfig = {
  // Enable static export for GitHub Pages
  output: 'export',
  
  // Disable image optimization for static export
  images: {
    unoptimized: true,
  },
  
  // Enable React strict mode for better development experience
  reactStrictMode: true,
  
  // Enable SWC minification for better performance
  swcMinify: true,
  
  // Base path for GitHub Pages (if using custom domain, remove this)
  // basePath: '/edu',
  
  // Disable server-side features that don't work with static export
  trailingSlash: true,
  
  // Environment variables available to client-side
  env: {
    NEXT_PUBLIC_APP_NAME: 'Mountain to Future',
    NEXT_PUBLIC_APP_DESCRIPTION: '山区孩子的未来之路',
  },
}

module.exports = nextConfig