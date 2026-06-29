import type { NextConfig } from "next";

// GitHub Pages serves a project site from a sub-path (e.g. /<repo>).
// The deploy workflow passes that sub-path via PAGES_BASE_PATH; locally it is
// empty so `next dev` keeps serving from the root. A bare "/" means "no prefix".
const rawBasePath = process.env.PAGES_BASE_PATH ?? "";
const basePath = rawBasePath === "/" ? "" : rawBasePath;

const nextConfig: NextConfig = {
  // Emit a fully static site into ./out that any static host can serve.
  output: "export",
  basePath,
  // Map each route to its own folder/index.html so deep links work without
  // server-side rewrites on GitHub Pages.
  trailingSlash: true,
  // The default image optimizer needs a server; disable it for static export.
  images: { unoptimized: true },
};

export default nextConfig;
