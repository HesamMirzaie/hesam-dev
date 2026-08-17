import Link from "next/link"
import { ArrowRightIcon } from "lucide-react"

import { MotionSurface } from "@/components/motion"
import { Badge } from "@/components/ui/badge"
import { buttonVariants } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { cn } from "@/lib/utils"
import { formatDate, type PostMetadata } from "@/lib/posts"

export function PostCard({ post, index }: { post: PostMetadata; index: number }) {
  return (
    <MotionSurface>
      <Card className="h-full transition-colors hover:border-primary/60">
        <CardHeader className="flex flex-col gap-4">
          <div className="flex items-center justify-between gap-4">
            <Badge variant="outline" className="font-mono">{formatDate(post.publishedAt)}</Badge>
            <span className="font-mono text-[0.65rem] text-muted-foreground">N/{String(index + 1).padStart(2, "0")}</span>
          </div>
          <CardTitle className="text-xl">{post.title}</CardTitle>
        </CardHeader>
        <CardContent className="flex flex-1 flex-col gap-4">
          <p className="leading-7 text-muted-foreground">{post.description}</p>
          <p className="font-mono text-xs uppercase tracking-[0.14em] text-muted-foreground">{post.readingTime}</p>
        </CardContent>
        <CardFooter>
          <Link href={`/blog/${post.slug}`} className={cn(buttonVariants({ variant: "ghost", size: "sm" }), "-ml-2 text-primary")}>Read note<ArrowRightIcon data-icon="inline-end" /></Link>
        </CardFooter>
      </Card>
    </MotionSurface>
  )
}
