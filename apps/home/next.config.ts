import type { NextConfig } from "next";
const { SETTINGS_URL } = process.env;

const nextConfig: NextConfig = {
  async rewrites() {
    return [
      {
        source: "/settings",
        destination: `${SETTINGS_URL}/settings`,
      },
      {
        source: "/settings/:path+",
        destination: `${SETTINGS_URL}/settings/:path+`,
      },
      {
        source: "/settings-static/_next/:path+",
        destination: `${SETTINGS_URL}/settings-static/_next/:path+`,
      },
    ];
  },
};

export default nextConfig;
