/**
 * Server-side render entry for build-time pre-rendering.
 *
 * Built separately via `vite build --ssr` (see script/build.ts). For each
 * route, script/prerender.ts calls render() and writes a static HTML
 * snapshot into dist/public — so crawlers get full content and per-page
 * meta tags without executing JavaScript.
 */
import { renderToString } from "react-dom/server";
import { Router } from "wouter";
import App from "./App";

interface HelmetLike {
  title?: { toString(): string };
  priority?: { toString(): string };
  meta?: { toString(): string };
  link?: { toString(): string };
  script?: { toString(): string };
}

export function render(path: string): { appHtml: string; head: string } {
  const helmetContext: { helmet?: HelmetLike } = {};

  const appHtml = renderToString(
    <Router ssrPath={path}>
      <App helmetContext={helmetContext} />
    </Router>,
  );

  const helmet = helmetContext.helmet;
  const head = helmet
    ? [helmet.title, helmet.priority, helmet.meta, helmet.link, helmet.script]
        .map((part) => (part ? part.toString() : ""))
        .filter(Boolean)
        .join("\n    ")
    : "";

  return { appHtml, head };
}
