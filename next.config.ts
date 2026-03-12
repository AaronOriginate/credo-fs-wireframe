import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  basePath: process.env.GITHUB_ACTIONS ? "/credo-fs-wireframe" : "",
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
