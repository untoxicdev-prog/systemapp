import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Needed for many PaaS providers to run SSR without serving only static assets.
  // Timeweb AppPlatform can run the standalone server via: `node .next/standalone/server.js`
  output: "standalone",
};

export default nextConfig;
