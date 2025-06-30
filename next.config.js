/** @type {import('next').NextConfig} */
const nextConfig = {
  devIndicators: {
    buildActivity: false,
  },
  experimental: {
    // Disable Next.js DevTools overlay
    nextScriptWorkers: false,
    serverActions: false,
    // 👇 Ye line important hai
    devtools: false,
  },
}

module.exports = nextConfig
