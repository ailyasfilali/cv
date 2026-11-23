import type { NextConfig } from "next";

// Sur GitHub Pages, le site est servi sous /<nom-du-repo>.
// La variable est injectée par le workflow de déploiement ; en local elle est vide.
const basePath = process.env.BASE_PATH ?? "";

const nextConfig: NextConfig = {
  // Export 100 % statique : du HTML/CSS pré-généré au build, aucun serveur Node en production.
  output: "export",
  basePath,
  trailingSlash: true,
  // Pas de serveur d'optimisation d'images en export statique.
  images: { unoptimized: true },
  // Pas d'en-tête "X-Powered-By" inutile.
  poweredByHeader: false,
};

export default nextConfig;
