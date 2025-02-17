// 1. Import utilities from `astro:content`
import { defineCollection, reference, z } from "astro:content";

// 2. Import loader(s)
import { glob } from "astro/loaders";

export const technologies = z
  .array(
    z.union([
      z.literal("astro"),
      z.literal("bootstrap"),
      z.literal("codeigniter"),
      z.literal("cpp"),
      z.literal("cloudflare"),
      z.literal("dart"),
      z.literal("django"),
      z.literal("fastapi"),
      z.literal("flutter"),
      z.literal("go"),
      z.literal("java"),
      z.literal("js"),
      z.literal("mysql"),
      z.literal("php"),
      z.literal("postgresql"),
      z.literal("python"),
      z.literal("ruby"),
      z.literal("rust"),
      z.literal("stripe"),
      z.literal("supabase"),
      z.literal("ts"),
      z.literal("tailwindcss"),
      z.literal("wordpress"),
    ]),
  )
  .optional();

// 3. Define your collection(s)
const posts = defineCollection({
  loader: glob({ pattern: "**/*.mdoc", base: "./src/contents/posts" }),
  schema: z.object({
    title: z.string(),
    excerpt: z.string(),
    published_at: z.date(),
    canon_date: z.date().optional(),
    project_date: z.date().optional(),
    project_link: z.date().optional(),
    related_posts: z.array(reference("posts")).optional(),
    related_projects: z.array(reference("projects")).optional(),
    image: z.string().optional(),
    technologies,
    draft: z.boolean().optional(),
  }),
});

const projects = defineCollection({
  loader: glob({ pattern: "**/*.mdoc", base: "./src/contents/projects" }),
  schema: z.object({
    title: z.string(),
    excerpt: z.string(),
    published_at: z.date(),
    start_date: z.date().optional(),
    end_date: z.date().optional(),
    link: z.string().optional(),
    related_posts: z.array(reference("posts")).optional(),
    tags: z.array(z.string()).optional(),
    image: z.string().optional(),
    technologies,
    draft: z.boolean().optional(),
    type: z
      .union([z.literal("professional"), z.literal("personal")])
      .optional(),
    client: z.string().optional(),
  }),
});

// 4. Export a single `collections` object to register your collection(s)
export const collections = { posts, projects };
