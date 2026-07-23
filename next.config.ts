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
  async headers() {
    return [
      {
        source: "/:path*",
        headers: [
          // Allow Nike / Alex to iframe the hubs (omit X-Frame-Options; use CSP only)
          { key: "Content-Security-Policy", value: "frame-ancestors *" },
        ],
      },
    ];
  },
};

export default nextConfig;
