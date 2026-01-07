import { withNextVideo } from "next-video/process";
import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,

  experimental: {
    scrollRestoration: true,
  },

  compress: true,

  // FIXED: Use remotePatterns instead of domains
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'i.pinimg.com',
      },
    ],
    formats: ["image/webp", "image/avif"],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
    minimumCacheTTL: 31536000,
  },

  async headers() {
    return [
      {
        source: "/(.*)",
        headers: [
          {
            key: "X-DNS-Prefetch-Control",
            value: "on",
          },
          {
            key: "Strict-Transport-Security",
            value: "max-age=63072000; includeSubDomains; preload",
          },
          {
            key: "X-Frame-Options",
            value: "DENY",
          },
          {
            key: "X-Content-Type-Options",
            value: "nosniff",
          },
          {
            key: "Referrer-Policy",
            value: "origin-when-cross-origin",
          },
        ],
      },
      {
        source: "/(.*)\\.(js|css|png|jpg|jpeg|gif|ico|svg|woff|woff2|ttf|eot)$",
        headers: [
          {
            key: "Cache-Control",
            value: "public, max-age=31536000, immutable",
          },
        ],
      },
    ];
  },

  webpack: (config, { dev }) => {
    if (!dev) {
      config.optimization.minimize = true;
      config.optimization.splitChunks = {
        chunks: "all",
        cacheGroups: {
          vendor: {
            test: /[\\/]node_modules[\\/]/,
            name: "vendors",
            chunks: "all",
          },
        },
      };
    }
    return config;
  },

  trailingSlash: false,

  async redirects() {
    return [
      {
        source: "/home",
        destination: "/",
        permanent: true,
      },
    ];
  },

  compiler: {
    removeConsole: process.env.NODE_ENV === 'production',
  },
};

export default withNextVideo(nextConfig);