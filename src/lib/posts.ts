import fs from "node:fs"
import path from "node:path"
import matter from "gray-matter"

const postsDirectory = path.join(process.cwd(), "content", "blog")
export type PostLanguage = "en" | "fa"
export type PostMetadata = { slug: string; title: string; description: string; publishedAt: string; draft: boolean; readingTime: string; language: PostLanguage }
export type Post = PostMetadata & { content: string }

function filePath(slug: string, language: PostLanguage) { return path.join(postsDirectory, `${slug}.${language}.mdx`) }
function legacyPath(slug: string) { return path.join(postsDirectory, `${slug}.mdx`) }
function assertString(value: unknown, field: string, fileName: string) { if (typeof value !== "string" || !value.trim()) throw new Error(`${fileName}: frontmatter field "${field}" must be a non-empty string`); return value }
function readPost(slug: string, language: PostLanguage): Post | null {
  try {
    if (path.basename(slug) !== slug) return null
    const pathToRead = fs.existsSync(filePath(slug, language)) ? filePath(slug, language) : language === "en" ? legacyPath(slug) : ""
    if (!pathToRead || !fs.existsSync(pathToRead)) return null
    const { content, data } = matter(fs.readFileSync(pathToRead, "utf8"))
    const date = data.publishedAt instanceof Date ? data.publishedAt : new Date(assertString(data.publishedAt, "publishedAt", path.basename(pathToRead)))
    if (Number.isNaN(date.getTime())) return null
    return { slug, title: assertString(data.title, "title", path.basename(pathToRead)), description: assertString(data.description, "description", path.basename(pathToRead)), publishedAt: date.toISOString().slice(0, 10), draft: data.draft === true, readingTime: `${Math.max(1, Math.ceil(content.trim().split(/\s+/).filter(Boolean).length / 220))} min read`, language, content }
  } catch {
    return null
  }
}
function englishSlugs() { if (!fs.existsSync(postsDirectory)) return []; return fs.readdirSync(postsDirectory).filter((name) => name.endsWith(".mdx") && !name.endsWith(".fa.mdx")).map((name) => name.replace(/\.(en\.)?mdx$/, "")) }
export function getAllPosts() { return englishSlugs().map((slug) => readPost(slug, "en")).filter((post): post is Post => post !== null && !post.draft).toSorted((a, b) => Date.parse(b.publishedAt) - Date.parse(a.publishedAt)).map(({ content, ...post }) => (void content, post)) }
export function getPostBySlug(slug: string, language: PostLanguage = "en") { const post = readPost(slug, language); return post?.draft ? null : post }
export function hasPostLanguage(slug: string, language: PostLanguage) { return getPostBySlug(slug, language) !== null }
export function formatDate(date: string, language: PostLanguage = "en") { return new Intl.DateTimeFormat(language === "fa" ? "fa-IR" : "en", { month: "short", day: "numeric", year: "numeric" }).format(new Date(date)) }
