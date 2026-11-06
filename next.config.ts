import type { NextConfig } from "next";

// STATIC_EXPORT=1 builds plain HTML/CSS/JS into /out for classic hosting (o2switch / Apache).
const staticExport = process.env.STATIC_EXPORT === "1";

const nextConfig: NextConfig = {
  ...(staticExport ? { output: "export" as const, trailingSlash: true } : {}),
  images: {
    // Images are resized by Unsplash's CDN (see lib/unsplash-loader.ts)
    loader: "custom",
    loaderFile: "./lib/unsplash-loader.ts",
    remotePatterns: [
      { protocol: "https", hostname: "images.unsplash.com", pathname: "/photo-**" },
    ],
    qualities: [70],
    deviceSizes: [375, 640, 768, 1024, 1280, 1600, 1920],
    imageSizes: [96, 160, 256, 384],
  },
  turbopack: {
    rules: {
      "*.css": {
        loaders: ["@tailwindcss/turbopack"],
        as: "*.css",
      },
    },
  },
};

export default nextConfig;
