import type { NextConfig } from "next";

const repo = "image-processing-project-tutorial-deep-learning-happy-not-happy-classification";

const nextConfig: NextConfig = {
  output: 'export',  
  basePath: `/${repo}`,
  assetPrefix: `/${repo}/`,
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
