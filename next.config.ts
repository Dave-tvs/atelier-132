import type { NextConfig } from "next";

// Sur GitHub Pages le site est servi sous /atelier-132 : le workflow de
// déploiement définit PAGES_BASE_PATH. En local, pas de préfixe.
const basePath = process.env.PAGES_BASE_PATH ?? "";

const nextConfig: NextConfig = {
  output: "export",
  trailingSlash: true,
  basePath,
  images: { unoptimized: true },
  env: { NEXT_PUBLIC_BASE_PATH: basePath },
};

export default nextConfig;
