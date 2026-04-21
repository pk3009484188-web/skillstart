import type { APIRoute } from "astro";

export const GET: APIRoute = () => {
  return new Response(`User-agent: *\nAllow: /\n\nSitemap: https://skillstartjobs.online/sitemap.xml\n`, {
    headers: {
      "Content-Type": "text/plain; charset=utf-8"
    }
  });
};

