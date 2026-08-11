import type { Metadata } from "next"
import Link from "next/link"
import { notFound } from "next/navigation"
import { ArrowLeftIcon } from "lucide-react"
import { compileMDX } from "next-mdx-remote/rsc"
import rehypePrettyCode from "rehype-pretty-code"
import remarkGfm from "remark-gfm"

import { Badge } from "@/components/ui/badge"
import { buttonVariants } from "@/components/ui/button"
import { cn } from "@/lib/utils"
import { formatDate, getAllPosts, getPostBySlug } from "@/lib/posts"

type PageProps = {
  params: Promise<{ slug: string }>
}

export const dynamicParams = false

export function generateStaticParams() {
  return getAllPosts().map((post) => ({ slug: post.slug }))
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params
  const post = getPostBySlug(slug)

  if (!post) {
    return {}
  }

  return {
    title: post.title,
    description: post.description,
  }
}

export default async function BlogPostPage({ params }: PageProps) {
  const { slug } = await params
  const post = getPostBySlug(slug)

  if (!post) {
    notFound()
  }

  const { content } = await compileMDX({
    source: post.content,
    options: {
      parseFrontmatter: false,
      mdxOptions: {
        remarkPlugins: [remarkGfm],
        rehypePlugins: [[rehypePrettyCode, { theme: "github-dark" }]],
      },
    },
  })

  return (
    <main className="mx-auto w-full max-w-3xl px-6 py-16 sm:px-8 sm:py-20">
      <Link href="/blog" className={cn(buttonVariants({ variant: "ghost", size: "sm" }), "-ml-2 mb-10")}>
        <ArrowLeftIcon data-icon="inline-start" />
        All notes
      </Link>
      <article>
        <header className="flex flex-col gap-5">
          <div className="flex flex-wrap gap-2">
            <Badge variant="outline" className="font-mono">{formatDate(post.publishedAt)}</Badge>
            <Badge variant="secondary" className="font-mono">{post.readingTime}</Badge>
          </div>
          <h1 className="text-4xl font-semibold tracking-tight sm:text-5xl">{post.title}</h1>
          <p className="text-lg leading-8 text-muted-foreground">{post.description}</p>
        </header>
        <div className="article-content mt-12">{content}</div>
      </article>
    </main>
  )
}
