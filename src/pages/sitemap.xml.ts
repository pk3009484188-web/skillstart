import type { APIRoute } from "astro";
import { getCollection } from "astro:content";

const base = "https://skillstartjobs.online";

export const GET: APIRoute = async () => {
  const jobs = await getCollection("jobs", ({ data }) => data.active);
  const posts = await getCollection("blog", ({ data }) => !data.draft);

  const urls = [
    `${base}/`,
    `${base}/latest-jobs/`,
    `${base}/blog/`,
    `${base}/category/matric-jobs/`,
    `${base}/city/lahore/`,
    `${base}/about/`,
    `${base}/contact/`,
    `${base}/privacy-policy/`,
    `${base}/terms/`,
    `${base}/disclaimer/`,
    `${base}/cookie-policy/`,
    `${base}/dmca/`,
    ...jobs.flatMap((job) => [`${base}/jobs/${job.slug}/`, `${base}/jobs/${job.slug}/eligibility/`]),
    ...posts.map((post) => `${base}/blog/${post.slug}/`)
  ];

  const xml = `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${urls
    .map((url) => `  <url><loc>${url}</loc></url>`)
    .join("\n")}\n</urlset>`;

  return new Response(xml, {
    headers: {
      "Content-Type": "application/xml; charset=utf-8"
    }
  });
};


