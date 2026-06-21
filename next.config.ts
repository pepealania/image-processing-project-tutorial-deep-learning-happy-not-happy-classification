import type { NextConfig } from "next";

const repo = "image-processing-project-tutorial-deep-learning-happy-not-happy-classification";

const nextConfig: NextConfig = {
  basePath: `/${repo}`,
  assetPrefix: `/${repo}/`,
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
