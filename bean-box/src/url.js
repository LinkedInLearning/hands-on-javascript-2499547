/**
 * Resolves a site-root path ("/img/x", "/privacy.html") against the deploy base path,
 * so the site works at a domain root and under a sub-path (e.g. GitHub Pages).
 * Full URLs (https://…) and empty values are returned unchanged.
 */
export default function url(path) {
  if (!path || !path.startsWith('/')) return path;
  return import.meta.env.BASE_URL + path.slice(1);
}
