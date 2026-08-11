import Link from "next/link"
import { ArrowRightIcon } from "lucide-react"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { buttonVariants } from "@/components/ui/button"
import { cn } from "@/lib/utils"
import { formatDate, type PostMetadata } from "@/lib/posts"

export function PostCard({ post }: { post: PostMetadata }) { return <Card className="h-full"><CardHeader className="flex flex-col gap-3"><Badge variant="outline" className="w-fit font-mono">{formatDate(post.publishedAt)}</Badge><CardTitle>{post.title}</CardTitle></CardHeader><CardContent className="flex flex-1 flex-col gap-3"><p className="leading-6 text-muted-foreground">{post.description}</p><p className="font-mono text-xs text-muted-foreground">{post.readingTime}</p></CardContent><CardFooter><Link href={`/blog/${post.slug}`} className={cn(buttonVariants({ variant: "ghost", size: "sm" }), "-ml-2")}>Read note<ArrowRightIcon data-icon="inline-end" /></Link></CardFooter></Card> }
