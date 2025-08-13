import { withNextVideo } from "next-video/process";
import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    domains: ["i.pinimg.com"],
  },
  reactStrictMode: true, // Enable strict mode
};

export default withNextVideo(nextConfig);