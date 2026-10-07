import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Optional isolated build output while the development preview is running.
  distDir: process.env.RIO_BUILD_DIR || ".next",
  allowedDevOrigins: ["127.0.0.1"],
  poweredByHeader: false,
  async redirects() {
    return [{ source: "/", destination: "/vi", permanent: false }];
  },
};

export default nextConfig;
