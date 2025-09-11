import Link from "next/link"
import Image from "next/image"
import { Card, CardContent, CardHeader } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Calendar, Clock, ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"

export interface BlogPost {
  url: string
  title: string
  description: string
  date: string
  readTime: string
  category: string
  image?: string
}

interface BlogCardProps {
  post: BlogPost
}

export function BlogCard({ post }: BlogCardProps) {
  return (
    <Card className="group hover:shadow-md transition-shadow">
      {post.image && <CardHeader className="p-0">
        <div className="aspect-video bg-muted rounded-t-lg overflow-hidden">
          <Image
            src={post.image || "/placeholder.svg"}
            alt={post.title}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
          />
        </div>
      </CardHeader> }
      <CardContent className="p-6">
        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <Badge variant="secondary">{post.category}</Badge>
            <div className="flex items-center gap-4 text-xs text-muted-foreground">
              <div className="flex items-center gap-1">
                <Calendar className="h-3 w-3" />
                {post.date}
              </div>
              <div className="flex items-center gap-1">
                <Clock className="h-3 w-3" />
                {post.readTime}
              </div>
            </div>
          </div>

          <div className="space-y-2">
            <h3 className="font-semibold text-lg leading-tight text-balance group-hover:text-primary transition-colors">
              {post.title}
            </h3>
            <p className="text-sm text-muted-foreground text-pretty line-clamp-3">{post.description}</p>
          </div>

          <Button variant="ghost" size="sm" asChild className="p-0 h-auto font-medium">
            <Link href={post.url} className="flex items-center gap-1">
              Read More
              <ArrowRight className="h-3 w-3" />
            </Link>
          </Button>
        </div>
      </CardContent>
    </Card>
  )
}
