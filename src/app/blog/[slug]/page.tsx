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
export function generateStaticParams() { return getAllPosts().map((post) => ({ slug: post.slug })) }

export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params
  const post = getPostBySlug(slug)
  if (!post) notFound()
  const { content } = await compileMDX({ source: post.content, options: { parseFrontmatter: false, mdxOptions: { remarkPlugins: [remarkGfm], rehypePlugins: [[rehypePrettyCode, { theme: "github-dark" }]] } } })

  return (
    <main className="mx-auto w-full max-w-4xl px-6 py-14 sm:px-8 sm:py-20">
      <div className="mb-12 flex flex-wrap items-center justify-between gap-3">
        <Link href="/blog" className={cn(buttonVariants({ variant: "ghost", size: "sm" }), "-ml-2")}><ArrowLeftIcon data-icon="inline-start" />All notes</Link>
        {hasPostLanguage(slug, "fa") ? <Link href={`/blog/${slug}/fa`} className={buttonVariants({ variant: "outline", size: "sm" })}>فارسی</Link> : null}
      </div>
      <article>
        <Reveal className="technical-rule pt-10">
          <p className="section-label">Technical note</p>
          <div className="mt-6 flex flex-wrap gap-2"><Badge variant="outline" className="font-mono">{formatDate(post.publishedAt)}</Badge><Badge variant="secondary" className="font-mono">{post.readingTime}</Badge></div>
          <h1 className="mt-7 text-4xl leading-[1.02] font-medium tracking-[-0.04em] sm:text-6xl">{post.title}<span className="text-accent">.</span></h1>
          <p className="mt-6 max-w-2xl text-lg leading-8 text-muted-foreground">{post.description}</p>
        </Reveal>
        <div className="article-content mt-14 border-t border-border/80 pt-12">{content}</div>
      </article>
    </main>
  )
}
