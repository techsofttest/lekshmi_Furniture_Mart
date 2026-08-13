import type { NextConfig } from "next";

const baseConfig = {
  allowedDevOrigins: ["127.0.0.1", "localhost"],
  images: {
    unoptimized: true,
    remotePatterns: [
      { protocol: 'https', hostname: 'images.unsplash.com' },
      { protocol: 'https', hostname: 'googleusercontent.com' },
      { protocol: 'http', hostname: 'googleusercontent.com' },
      { protocol: "http", hostname: "127.0.0.1", port: "8000" },
      { protocol: "http", hostname: "localhost", port: "8000" },
      { protocol: "https", hostname: "lekshmifurnituremart.com", pathname: "/uploads/**" },
    ],
  },
} satisfies NextConfig;

export default baseConfig;