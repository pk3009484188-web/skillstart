import { defineCollection, z } from "astro:content";

const jobs = defineCollection({
  type: "content",
  schema: z.object({
    title: z.string(),
    company: z.string(),
    location: z.string(),
    education: z.string(),
    salary: z.string(),
    deadline: z.string(),
    postedDate: z.string(),
    applyUrl: z.string().url(),
    active: z.boolean(),
    featured: z.boolean(),
    eligibility: z.array(z.string()),
    summary: z.string()
  })
});

const blog = defineCollection({
  type: "content",
  schema: z.object({
    title: z.string(),
    excerpt: z.string(),
    publishedDate: z.string(),
    updatedDate: z.string(),
    author: z.string(),
    category: z.string(),
    tags: z.array(z.string()),
    featuredImage: z.string(),
    draft: z.boolean(),
    seoTitle: z.string(),
    seoDescription: z.string()
  })
});

export const collections = { jobs, blog };
