import { SiteHeader } from "@/components/site-header"
import { BlogCard, BlogPost } from "@/components/blog-card"
import { SiteFooter } from "@/components/site-footer"
import { blog } from '@/lib/source';


export default function BlogPage() {
  const posts = blog.getPages();

  const blogPosts: BlogPost[] = posts.map(post => {
    return {
      url: post.url,
      title: post.data.title,
      description: post.data.description || "",
      date: post.data.date.toLocaleString("en-US", { year: "numeric", month: "long", day: "numeric" }),
      readTime: post.data.readTime || "? min read",
      category: post.data.category || "General",
    }
  });

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-200 via-blue-100 to-emerald-200 dark:from-slate-900 dark:via-slate-800 dark:to-emerald-900">
      <SiteHeader />
      <main className="container py-16">
        <div className="mx-auto max-w-4xl">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold tracking-tight mb-4">Blog</h1>
            <p className="text-lg text-muted-foreground text-pretty">
              Stay updated with the latest news, updates, and highlights from Miners Online.
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {blogPosts.map((post) => (
              <BlogCard key={post.url} post={post} />
            ))}
          </div>
        </div>
      </main>
      <SiteFooter />
    </div>
  )
}