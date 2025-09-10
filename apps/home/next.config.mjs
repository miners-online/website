import { createMDX } from 'fumadocs-mdx/next';

// const { SETTINGS_URL } = process.env;

const withMDX = createMDX({
  // customise the config file path
  // configPath: "source.config.ts"
});


/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  // async rewrites() {
  //   return [
  //     {
  //       source: "/settings",
  //       destination: `${SETTINGS_URL}/settings`,
  //     },
  //     {
  //       source: "/settings/:path+",
  //       destination: `${SETTINGS_URL}/settings/:path+`,
  //     },
  //     {
  //       source: "/settings-static/_next/:path+",
  //       destination: `${SETTINGS_URL}/settings-static/_next/:path+`,
  //     },
  //   ];
  // },
};

export default withMDX(nextConfig);;
