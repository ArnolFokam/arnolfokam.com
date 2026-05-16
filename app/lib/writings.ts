import fs from "node:fs";
import path from "node:path";
import matter from "gray-matter";
import { marked } from "marked";

const postsDirectory = path.join(process.cwd(), "content/posts");

export type Post = {
  slug: string;
  title: string;
  date: string;
  dek: string;
};

export type PostWithContent = Post & {
  html: string;
};

function getPostSlugs() {
  if (!fs.existsSync(postsDirectory)) {
    return [];
  }

  return fs
    .readdirSync(postsDirectory)
    .filter((fileName) => fileName.endsWith(".md"))
    .map((fileName) => fileName.replace(/\.md$/, ""));
}

function readPost(slug: string): PostWithContent {
  const fullPath = path.join(postsDirectory, `${slug}.md`);
  const fileContents = fs.readFileSync(fullPath, "utf8");
  const { content, data } = matter(fileContents);

  return {
    slug,
    title: String(data.title ?? slug),
    date: String(data.date ?? ""),
    dek: String(data.dek ?? ""),
    html: marked.parse(content, { async: false }) as string,
  };
}

export function getPosts(): Post[] {
  return getPostSlugs()
    .map(readPost)
    .map((post) => ({
      slug: post.slug,
      title: post.title,
      date: post.date,
      dek: post.dek,
    }))
    .sort((a, b) => b.date.localeCompare(a.date));
}

export function getPost(slug: string) {
  if (!getPostSlugs().includes(slug)) {
    return null;
  }

  return readPost(slug);
}

export const formatDate = (iso: string) =>
  new Date(iso).toLocaleDateString("en-GB", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
