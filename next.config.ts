import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  images: {
    /**
     * Serve images from `/public` without the `/_next/image` optimizer.
     * Prevents intermittent 500s when sharp/libvips does not match the host runtime
     * (common on self-hosted Docker, some PaaS tiers, or strict serverless sandboxes).
     */
    unoptimized: true,
  },
};

export default nextConfig;
