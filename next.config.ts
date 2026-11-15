import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    formats: ["image/avif", "image/webp"],
  },
  // The "Who's On My Bill?" data story is a static export in public/blog/whos-on-my-bill
  // (built from its own repo with `npm run export:portfolio`). Serve its pages here.
  async rewrites() {
    return [
      { source: "/blog/whos-on-my-bill", destination: "/blog/whos-on-my-bill/index.html" },
      { source: "/blog/whos-on-my-bill/method", destination: "/blog/whos-on-my-bill/method.html" },
    ];
  },
};

export default nextConfig;
