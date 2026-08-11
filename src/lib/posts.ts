import fs from "node:fs"
import path from "node:path"

import matter from "gray-matter"

const postsDirectory = path.join(process.cwd(), "content", "blog")

export type PostMetadata = {
  slug: string
  title: string
  description: string
  publishedAt: string
  updatedAt?: string
  draft: boolean
  readingTime: string
}

export type Post = PostMetadata & {
  content: string
}

function assertString(value: unknown, field: string, fileName: string): string {
  if (typeof value !== "string" || value.trim().length === 0) {
    throw new Error(`${fileName}: frontmatter field \"${field}\" must be a non-empty string`)
  }

  return value
}

function assertDate(value: unknown, field: string, fileName: string): string {
  const date = value instanceof Date ? value : typeof value === "string" ? new Date(value) : null

  if (!date || Number.isNaN(date.getTime())) {
    throw new Error(`${fileName}: frontmatter field \"${field}\" must be a valid date`)
  }

  return date.toISOString().slice(0, 10)
}

function toMetadata(slug: string, data: Record<string, unknown>, content: string, fileName: string): PostMetadata {
  const wordCount = content.trim().split(/\s+/).filter(Boolean).length
  const updatedAt = data.updatedAt === undefined ? undefined : assertDate(data.updatedAt, "updatedAt", fileName)

  return {
    slug,
    title: assertString(data.title, "title", fileName),
    description: assertString(data.description, "description", fileName),
    publishedAt: assertDate(data.publishedAt, "publishedAt", fileName),
    updatedAt,
    draft: data.draft === true,
    readingTime: `${Math.max(1, Math.ceil(wordCount / 220))} min read`,
  }
}

function readPost(slug: string): Post | null {
  if (path.basename(slug) !== slug) {
    return null
  }

  const fileName = `${slug}.mdx`
  const filePath = path.join(postsDirectory, fileName)

  if (!fs.existsSync(filePath)) {
    return null
  }

  const source = fs.readFileSync(filePath, "utf8")
  const { content, data } = matter(source)
  const metadata = toMetadata(slug, data, content, fileName)

  return { ...metadata, content }
}

export function getAllPosts(): PostMetadata[] {
  if (!fs.existsSync(postsDirectory)) {
    return []
  }

  return fs
    .readdirSync(postsDirectory)
    .filter((fileName) => fileName.endsWith(".mdx"))
    .map((fileName) => readPost(fileName.replace(/\.mdx$/, "")))
    .filter((post): post is Post => post !== null && !post.draft)
    .toSorted((a, b) => Date.parse(b.publishedAt) - Date.parse(a.publishedAt))
    .map((post) => {
      const { content, ...metadata } = post
      void content
      return metadata
    })
}

export function getPostBySlug(slug: string): Post | null {
  const post = readPost(slug)

  return post?.draft ? null : post
}

export function formatDate(date: string): string {
  return new Intl.DateTimeFormat("en", {
    month: "short",
    day: "numeric",
    year: "numeric",
  }).format(new Date(date))
}
