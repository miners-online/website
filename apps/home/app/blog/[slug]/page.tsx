import { notFound } from 'next/navigation';
import { InlineTOC } from 'fumadocs-ui/components/inline-toc';
import defaultMdxComponents from 'fumadocs-ui/mdx';
import { blog } from '@/lib/source';

import { SiteHeader } from "@/components/site-header"
import { Badge } from "@/components/ui/badge"
import { Calendar, Clock, ArrowLeft } from "lucide-react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { SiteFooter } from "@/components/site-footer"


export default async function Page(props: {
  params: Promise<{ slug: string }>;
}) {
  const params = await props.params;
  const page = blog.getPage([params.slug]);

  if (!page) notFound();
  const Mdx = page.data.body;

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-200 via-blue-100 to-emerald-200 dark:from-slate-900 dark:via-slate-800 dark:to-emerald-900">
      <SiteHeader/>
      <main className="container py-16">
        <div className="mx-auto max-w-3xl">
          <Button variant="ghost" asChild className="mb-8">
            <Link href="/blog" className="flex items-center gap-2">
              <ArrowLeft className="h-4 w-4" />
              Back to Blog
            </Link>
          </Button>

          <article className="prose prose-gray dark:prose-invert max-w-none">
            <div className="mb-8">
              <Badge variant="secondary" className="mb-4">
                {page.data.category || "General"}
              </Badge>
              <h1 className="text-4xl font-bold tracking-tight mb-4 text-balance">{page.data.title}</h1>
              <div className="flex items-center gap-4 text-sm text-muted-foreground mb-6">
                <div className="flex items-center gap-1">
                  <Calendar className="h-4 w-4" />
                  {page.data.date.toLocaleString("en-US", { year: "numeric", month: "long", day: "numeric" })}
                </div>
                <div className="flex items-center gap-1">
                  <Clock className="h-4 w-4" />
                  {page.data.readTime || "? min read"}
                </div>
              </div>
              <p className="text-lg text-muted-foreground text-pretty">{page.data.description}</p>
            </div>

            <div className="space-y-6 text-foreground">
              <InlineTOC items={page.data.toc} />
              <Mdx components={defaultMdxComponents} />
            </div>
            <div className="text-sm my-10">
              <p className="font-medium"><span className=" text-fd-muted-foreground">Written by:</span> {page.data.author}</p>
              <p className="font-medium">
                <span className="text-sm text-fd-muted-foreground">At: </span>
                {new Date(page.data.date).toDateString()}
              </p>
            </div>
          </article>
        </div>
      </main>
      <SiteFooter />
    </div>
  );
}

export function generateStaticParams(): { slug: string }[] {
  return blog.getPages().map((page) => ({
    slug: page.slugs[0],
  }));
}

export async function generateMetadata(props: {
  params: Promise<{ slug: string }>;
}) {
  const params = await props.params;
  const page = blog.getPage([params.slug]);

  if (!page) notFound();

  return {
    title: page.data.title,
    description: page.data.description,
  };
}