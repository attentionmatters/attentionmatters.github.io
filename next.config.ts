import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // 静态导出 —— 产物是纯静态文件，可直接部署到 GitHub Pages / Cloudflare Pages
  output: "export",
  // 静态托管没有 Next 的图片优化服务
  images: { unoptimized: true },
  // 每个路由导出成 /path/index.html，静态托管下 URL 更干净
  trailingSlash: true,
};

export default nextConfig;
