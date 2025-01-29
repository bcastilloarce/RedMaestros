/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  poweredByHeader: false,
  compress: true,
  images: {
    deviceSizes: [320, 375, 425, 768, 828, 1024, 1200],
    imageSizes: [16, 32, 48, 64, 96, 128, 256],
  },
}

module.exports = nextConfig
