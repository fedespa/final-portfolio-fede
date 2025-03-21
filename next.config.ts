import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    remotePatterns: [
      { hostname: "flagcdn.com", protocol: "https" },
    ]
  }
};

export default nextConfig;
