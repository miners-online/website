import Link from 'next/link';
import { blog } from '@/lib/source';

import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"


export default function Home() {
  const posts = blog.getPages();

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-emerald-900">
      <Navbar/>

      <section className="py-16 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-3xl font-bold text-white mb-4">Latest Blog Posts</h1>
            <p className="text-slate-300 max-w-2xl mx-auto">
              Stay updated with the latest news, updates, and insights from the Miners Online community.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            {posts.map((post) => (
              <Link
                key={post.url}
                href={post.url}
              >
                <Card className="bg-slate-800/50 border-slate-700">
                  <CardHeader>
                    <CardTitle className="text-white flex items-center">
                      {post.data.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-slate-300">
                      {post.data.description}
                    </p>
                    <p className="text-sm text-slate-400 mt-4">
                      Published on {new Date(post.data.date).toLocaleDateString()}
                    </p>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>
        </div>
      </section>
      <Footer/>
    </div>
  );
}