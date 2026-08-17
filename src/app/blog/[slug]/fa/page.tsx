import Link from "next/link"
import { notFound } from "next/navigation"
import { ArrowLeftIcon } from "lucide-react"
import { compileMDX } from "next-mdx-remote/rsc"
import rehypePrettyCode from "rehype-pretty-code"
import remarkGfm from "remark-gfm"

import { Reveal } from "@/components/motion"
import { Badge } from "@/components/ui/badge"
import { buttonVariants } from "@/components/ui/button"
import { cn } from "@/lib/utils"
import { formatDate, getAllPosts, getPostBySlug, hasPostLanguage } from "@/lib/posts"

type Props = { params: Promise<{ slug: string }> }

export const dynamicParams = false
export function generateStaticParams() {
  const slugs = getAllPosts().filter((post) => hasPostLanguage(post.slug, "fa")).map((post) => ({ slug: post.slug }))
  return slugs.length ? slugs : [{ slug: "_missing-persian-post" }]
}

export default async function PersianBlogPostPage({ params }: Props) {
  const { slug } = await params
  const post = getPostBySlug(slug, "fa")
  if (!post) notFound()
  const source = post.content.replaceAll("<", "&lt;").replaceAll(">", "&gt;").replaceAll("{", "&#123;").replaceAll("}", "&#125;")
  const { content } = await compileMDX({ source, options: { parseFrontmatter: false, mdxOptions: { remarkPlugins: [remarkGfm], rehypePlugins: [[rehypePrettyCode, { theme: "github-dark" }]] } } })

  return (
    <main dir="rtl" lang="fa" className="mx-auto w-full max-w-4xl px-6 py-14 sm:px-8 sm:py-20">
      <div className="mb-12 flex flex-wrap items-center justify-between gap-3">
        <Link href="/blog" className={cn(buttonVariants({ variant: "ghost", size: "sm" }), "-mr-2")}><ArrowLeftIcon data-icon="inline-start" />همه یادداشت‌ها</Link>
        <Link href={`/blog/${slug}`} className={buttonVariants({ variant: "outline", size: "sm" })}>English</Link>
      </div>
      <article>
        <Reveal className="technical-rule pt-10">
          <p className="section-label">یادداشت فنی</p>
          <div className="mt-6 flex flex-wrap gap-2"><Badge variant="outline" className="font-mono">{formatDate(post.publishedAt, "fa")}</Badge><Badge variant="secondary" className="font-mono">{post.readingTime.replace("min read", "دقیقه مطالعه")}</Badge></div>
          <h1 className="mt-7 text-4xl leading-[1.2] font-medium tracking-tight sm:text-6xl">{post.title}<span className="text-accent">.</span></h1>
          <p className="mt-6 max-w-2xl text-lg leading-9 text-muted-foreground">{post.description}</p>
        </Reveal>
        <div className="article-content mt-14 border-t border-border/80 pt-12">{content}</div>
      </article>
    </main>
  )
}
