const withOffline = require("next-offline");
/** @type {import('next').NextConfig} */

const nextConfig = {
  reactStrictMode: true,
  workboxOpts: {
    runtimeCaching: [
      {
        urlPattern: /^https?.*/,
        handler: "NetworkFirst",
        options: {
          cacheName: "offlineCache",
          expiration: {
            maxEntries: 200,
          },
        },
      },
      {
        urlPattern: /.png$/,
        handler: "CacheFirst",
      },
    ],
  },
};

module.exports = withOffline(nextConfig);
