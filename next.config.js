/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    unoptimized: false,
    domains: ["dummyimage.com"],
  },
};

module.exports = nextConfig;
