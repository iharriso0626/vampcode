// next.config.ts
import type { NextConfig } from 'next'

const nextConfig: NextConfig = {
  reactStrictMode: true,

  // Tells Next.js to create static HTML files instead of running a Node.js server
  output: 'export',

  // If you use the built-in <Image> component but don’t need Next.js image optimization
  // (which isn’t supported in "export" mode), you can set unoptimized: true
  images: {
    unoptimized: true,
  },
}

export default nextConfig
