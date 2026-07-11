/**
 * Build-time pre-rendering: writes a static HTML snapshot of every route
 * into dist/public so search engines get full content + per-page meta tags
 * without executing JavaScript.
 *
 * "/about" → dist/public/about/index.html (served automatically by
 * express.static and by any static host). "/" overwrites the root
 * index.html. When the client JS loads, React takes over as usual.
 */
import { mkdir, readFile, writeFile, rm } from "fs/promises";
import path from "path";
import { pathToFileURL } from "url";

// Keep in sync with the routes in client/src/App.tsx and public/sitemap.xml
const ROUTES = [
  "/",
  "/e-beam-services-india",
  "/services",
  "/services/e-beam-sterilization",
  "/services/electron-beam-processing",
  "/services/polymer-crosslinking",
  "/services/gemstone-enhancement",
  "/industries",
  "/industries/medical-devices",
  "/industries/polymers-plastics",
  "/industries/gemstones",
  "/how-it-works",
  "/about",
  "/contact",
];

const SEO_BLOCK = /<!-- prerender:seo-start[\s\S]*?prerender:seo-end -->/;
const ROOT_DIV = /<div id="root">\s*<\/div>/;

export async function prerender() {
  const distPublic = path.resolve("dist/public");
  const ssrModulePath = path.resolve("dist/ssr/prerender-entry.js");

  const template = await readFile(path.join(distPublic, "index.html"), "utf-8");
  if (!SEO_BLOCK.test(template)) {
    throw new Error("prerender: SEO markers not found in built index.html");
  }
  if (!ROOT_DIV.test(template)) {
    throw new Error('prerender: <div id="root"></div> not found in built index.html');
  }
  const withSlot = template.replace(SEO_BLOCK, "<!--prerender-head-->");

  const { render } = await import(pathToFileURL(ssrModulePath).href);

  for (const route of ROUTES) {
    const { appHtml, head } = render(route);
    if (!head.includes("<title")) {
      throw new Error(`prerender: no <title> produced for ${route} — check its Helmet block`);
    }
    const html = withSlot
      .replace("<!--prerender-head-->", head)
      .replace(ROOT_DIV, `<div id="root">${appHtml}</div>`);

    const outDir = route === "/" ? distPublic : path.join(distPublic, route.slice(1));
    await mkdir(outDir, { recursive: true });
    await writeFile(path.join(outDir, "index.html"), html);
    console.log(`  prerendered ${route}`);
  }

  // Branded 404 page — static hosts (e.g. Vercel) serve 404.html with a
  // real 404 status for unknown URLs instead of a soft-404.
  {
    const { appHtml } = render("/__not_found__");
    const notFoundHead = [
      "<title>Page Not Found | GemsPride</title>",
      '<meta name="robots" content="noindex" />',
    ].join("\n    ");
    const html = withSlot
      .replace("<!--prerender-head-->", notFoundHead)
      .replace(ROOT_DIV, `<div id="root">${appHtml}</div>`);
    await writeFile(path.join(distPublic, "404.html"), html);
    console.log("  prerendered 404.html");
  }

  // The SSR bundle is only needed during the build
  await rm(path.resolve("dist/ssr"), { recursive: true, force: true });
}
