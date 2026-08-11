import Link from "next/link"
import { notFound } from "next/navigation"
import { ArrowLeftIcon } from "lucide-react"
import { compileMDX } from "next-mdx-remote/rsc"
import rehypePrettyCode from "rehype-pretty-code"
import remarkGfm from "remark-gfm"
import { Badge } from "@/components/ui/badge"
import { buttonVariants } from "@/components/ui/button"
import { cn } from "@/lib/utils"
import { formatDate, getAllPosts, getPostBySlug, hasPostLanguage } from "@/lib/posts"

type Props = { params: Promise<{ slug: string }> }
export const dynamicParams = false
export function generateStaticParams() { return getAllPosts().filter((post) => hasPostLanguage(post.slug, "fa")).map((post) => ({ slug: post.slug })) }
export default async function PersianBlogPostPage({ params }: Props) { const { slug } = await params; const post = getPostBySlug(slug, "fa"); if (!post) notFound(); const source = post.content.replaceAll("<", "&lt;").replaceAll(">", "&gt;").replaceAll("{", "&#123;").replaceAll("}", "&#125;"); const { content } = await compileMDX({ source, options: { parseFrontmatter: false, mdxOptions: { remarkPlugins: [remarkGfm], rehypePlugins: [[rehypePrettyCode, { theme: "github-dark" }]] } } }); return <main dir="rtl" lang="fa" className="mx-auto w-full max-w-3xl px-6 py-16 sm:px-8 sm:py-20"><div className="mb-10 flex flex-wrap items-center justify-between gap-3"><Link href="/blog" className={cn(buttonVariants({ variant: "ghost", size: "sm" }), "-ml-2")}><ArrowLeftIcon data-icon="inline-start" />همه یادداشت‌ها</Link><Link href={`/blog/${slug}`} className={buttonVariants({ variant: "outline", size: "sm" })}>English</Link></div><article><header className="flex flex-col gap-5"><div className="flex flex-wrap gap-2"><Badge variant="outline" className="font-mono">{formatDate(post.publishedAt, "fa")}</Badge><Badge variant="secondary" className="font-mono">{post.readingTime.replace("min read", "دقیقه مطالعه")}</Badge></div><h1 className="text-4xl font-semibold tracking-tight sm:text-5xl">{post.title}</h1><p className="text-lg leading-8 text-muted-foreground">{post.description}</p></header><div className="article-content mt-12">{content}</div></article></main> }
