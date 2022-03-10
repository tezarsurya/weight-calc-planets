const withOffline = require("next-offline");
/** @type {import('next').NextConfig} */

const nextConfig = {
  reactStrictMode: true,
};

module.exports = withOffline(nextConfig);
