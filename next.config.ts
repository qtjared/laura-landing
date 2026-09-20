import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // This landing page has no server-side runtime requirements, so Cloudflare
  // Pages can deploy the generated static HTML directly from `out`.
  output: "export",
  images: {
    // Static export has no Next image optimization server. Local images are
    // already sized assets and should be copied as-is into the Pages bundle.
    unoptimized: true,
  },
};

export default nextConfig;
