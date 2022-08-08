/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ["miro.medium.com", "cutewallpaper.org"],
  },
};

module.exports = nextConfig;
