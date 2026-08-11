import type { Metadata } from "next"

import { PostCard } from "@/components/post-card"
import { getAllPosts } from "@/lib/posts"

export const metadata: Metadata = {
  title: "Blog",
  description: "Notes on concepts I am learning and applying.",
}

export default function BlogPage() {
  const posts = getAllPosts()

  return (
    <main className="mx-auto w-full max-w-6xl px-6 py-20 sm:px-8">
      <div className="flex max-w-2xl flex-col gap-4">
        <p className="font-mono text-sm text-muted-foreground">Learning notes</p>
        <h1 className="text-4xl font-semibold tracking-tight sm:text-5xl">Ideas worth keeping.</h1>
        <p className="text-lg leading-8 text-muted-foreground">
          Short notes about the concepts I want to understand well enough to explain and use.
        </p>
      </div>
      <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
        {posts.map((post) => (
          <PostCard key={post.slug} post={post} />
        ))}
      </div>
    </main>
  )
}
