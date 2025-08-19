// import { withNextVideo } from "next-video/process";
// import type { NextConfig } from "next";

// const nextConfig: NextConfig = {
//   images: {
//     domains: ["i.pinimg.com"],
//   },
//   reactStrictMode: true, // Enable strict mode
// };

// export default withNextVideo(nextConfig);

import { withNextVideo } from "next-video/process";
import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Your existing configurations
  reactStrictMode: true, // Enable strict mode

  // Enable experimental features for better performance
  experimental: {
    // optimizeCss: true, // Disabled - requires critters package
    scrollRestoration: true,
  },

  // Compression and optimization
  compress: true,

  // Image optimization - merged with your domains
  images: {
    domains: ["i.pinimg.com", "www.holfortmedia.com.ng"],
    formats: ["image/webp", "image/avif"],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
    minimumCacheTTL: 31536000, // 1 year
  },

  // Headers for caching and security
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
        // Cache static assets for 1 year
        source: "/(.*)\\.(js|css|png|jpg|jpeg|gif|ico|svg|woff|woff2|ttf|eot)$",
        headers: [
          {
            key: "Cache-Control",
            value: "public, max-age=31536000, immutable",
          },
        ],
      },
      {
        // Cache API routes for shorter periods
        source: "/api/(.*)",
        headers: [
          {
            key: "Cache-Control",
            value:
              "public, max-age=3600, s-maxage=3600, stale-while-revalidate=86400",
          },
        ],
      },
      {
        // Cache pages with revalidation
        source: "/((?!api).*)",
        headers: [
          {
            key: "Cache-Control",
            value:
              "public, max-age=3600, s-maxage=3600, stale-while-revalidate=86400",
          },
        ],
      },
    ];
  },

  // Webpack optimizations
  webpack: (config, { dev, isServer }) => {
    // Production optimizations
    if (!dev) {
      // Enable gzip compression
      config.optimization.minimize = true;

      // Split chunks for better caching
      config.optimization.splitChunks = {
        chunks: "all",
        cacheGroups: {
          vendor: {
            test: /[\\/]node_modules[\\/]/,
            name: "vendors",
            chunks: "all",
          },
          // Separate chunk for next-video
          nextVideo: {
            test: /[\\/]node_modules[\\/]next-video/,
            name: "next-video",
            chunks: "all",
            priority: 10,
          },
        },
      };

      // Bundle analyzer (uncomment to analyze bundle size)
      // const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;
      // config.plugins.push(new BundleAnalyzerPlugin());
    }

    return config;
  },

  // Enable static optimization
  trailingSlash: false,

  // PWA configuration (if you're using next-pwa)
  // pwa: {
  //   dest: 'public',
  //   register: true,
  //   skipWaiting: true,
  //   runtimeCaching: [
  //     {
  //       urlPattern: /^https?.*/,
  //       handler: 'NetworkFirst',
  //       options: {
  //         cacheName: 'offlineCache',
  //         expiration: {
  //           maxEntries: 200,
  //         },
  //       },
  //     },
  //   ],
  // },

  // Redirects and rewrites for SEO
  async redirects() {
    return [
      // Add any redirects you need
      {
        source: "/home",
        destination: "/",
        permanent: true,
      },
    ];
  },
};

export default withNextVideo(nextConfig);
