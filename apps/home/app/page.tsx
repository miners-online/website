import { SiteHeader } from "@/components/site-header"
import { HeroSection } from "@/components/hero-section"
import { ServerStatus } from "@/components/server-status"
import { SiteFooter } from "@/components/site-footer"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Shield, Code, Clock, Heart, Zap, Users2, Wrench } from "lucide-react"
import Link from "next/link"

export default function HomePage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-200 via-blue-100 to-emerald-200 dark:from-slate-900 dark:via-slate-800 dark:to-emerald-900">
      <SiteHeader/>
      <main>
        <HeroSection />

        <section className="py-16">
          <div className="container">
            <div className="mx-auto max-w-4xl">
              <div className="text-center mb-12">
                <h2 className="text-3xl font-bold tracking-tight mb-4">What is Miners Online?</h2>
                <p className="text-lg text-muted-foreground text-pretty">
                  Miners Online is a passion project - a small, intimate Minecraft server where every player matters.
                  Started in 2017 and lovingly maintained by one dedicated developer, we focus on creating quality
                  gaming experiences in a close-knit environment where you&lsquo;ll actually get to know other players.
                </p>
              </div>

              <div className="grid md:grid-cols-2 gap-8 mb-12">
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <Code className="h-5 w-5 text-primary" />
                      Open Source & Transparent
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">
                      Everything is open source and transparent. You can see exactly how the server works, suggest
                      improvements, and even contribute code. No corporate secrets or hidden agendas - just honest
                      development.
                    </p>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <Clock className="h-5 w-5 text-primary" />
                      Efficient & Sustainable
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">
                      The server runs when players are actually online, making efficient use of resources. This
                      sustainable approach means we can focus on quality experiences rather than keeping empty servers
                      running 24/7.
                    </p>
                  </CardContent>
                </Card>
              </div>

              <div className="text-center">
                <p className="text-muted-foreground mb-6">
                  Based in the UK and run with genuine care for every player. While we&lsquo;re small, that means you&lsquo;ll get
                  personal attention and your voice will actually be heard. Perfect for players who prefer quality
                  connections over crowded lobbies.
                </p>
                <div className="flex flex-wrap justify-center gap-2">
                  <Badge variant="secondary">UK Based</Badge>
                  <Badge variant="secondary">Personal Touch</Badge>
                  <Badge variant="secondary">Open Source</Badge>
                  <Badge variant="secondary">Sustainable</Badge>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="py-16">
          <div className="container">
            <div className="mx-auto max-w-6xl">
              <div className="text-center mb-12">
                <h2 className="text-3xl font-bold tracking-tight mb-4">What We Offer</h2>
                <p className="text-lg text-muted-foreground text-pretty">
                  A carefully curated selection of minigames and features, each personally tested and maintained to
                  ensure they work well and provide genuine fun.
                </p>
              </div>

              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <Zap className="h-5 w-5 text-primary" />
                      Classic Minigames
                    </CardTitle>
                    <CardDescription>Tried & Tested Fun</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground">
                      Enjoy well-implemented versions of Minecraft classics like Spleef, Parkour, and PvP duels. Simple,
                      fun, and reliable - no overcomplicated gimmicks.
                    </p>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <Heart className="h-5 w-5 text-primary" />
                      Personal Attention
                    </CardTitle>
                    <CardDescription>You Actually Matter</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground">
                      In a small community, every player is valued. Your suggestions are heard, your problems get
                      personal attention, and you&lsquo;ll build real friendships with fellow players.
                    </p>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <Shield className="h-5 w-5 text-primary" />
                      Safe & Welcoming
                    </CardTitle>
                    <CardDescription>Friendly Environment</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground">
                      A small, friendly community where everyone knows each other creates a naturally safe environment.
                      No toxic crowds or anonymous troublemakers.
                    </p>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <Wrench className="h-5 w-5 text-primary" />
                      Custom Features
                    </CardTitle>
                    <CardDescription>Thoughtful Additions</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground">
                      Carefully crafted plugins and features that enhance gameplay without overwhelming it. Every
                      addition is tested and refined based on actual player feedback.
                    </p>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <Users2 className="h-5 w-5 text-primary" />
                      Room to Grow
                    </CardTitle>
                    <CardDescription>Be Part of Something</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground">
                      Join a server with room to grow and make your mark. Your participation helps shape the community
                      and you can be part of building something special.
                    </p>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <Code className="h-5 w-5 text-primary" />
                      Learn & Contribute
                    </CardTitle>
                    <CardDescription>Open Development</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground">
                      Interested in server development? Learn from open source code, suggest features, or even
                      contribute improvements. Great for aspiring developers.
                    </p>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>

        <section className="py-16">
          <div className="container">
            <div className="mx-auto max-w-4xl text-center">
              <h2 className="text-3xl font-bold tracking-tight mb-4">Why Choose Small?</h2>
              <p className="text-lg text-muted-foreground mb-12 text-pretty">
                In a world of massive, impersonal servers, there&lsquo;s something special about a place where you&lsquo;re not just
                another number. Here&lsquo;s why small can be better.
              </p>

              <div className="grid md:grid-cols-3 gap-8">
                <div className="space-y-4">
                  <div className="mx-auto w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                    <Users2 className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold">Real Connections</h3>
                  <p className="text-muted-foreground">
                    Get to know other players as real people, not just usernames. Build lasting friendships in a
                    community where everyone recognizes each other.
                  </p>
                </div>

                <div className="space-y-4">
                  <div className="mx-auto w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                    <Heart className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold">Your Voice Matters</h3>
                  <p className="text-muted-foreground">
                    Suggestions get implemented, problems get solved personally, and you can directly influence the
                    server&lsquo;s development. No corporate bureaucracy.
                  </p>
                </div>

                <div className="space-y-4">
                  <div className="mx-auto w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                    <Code className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold">Passion Over Profit</h3>
                  <p className="text-muted-foreground">
                    Run by someone who genuinely loves Minecraft and server development, not a corporation trying to
                    maximize revenue. Quality and fun come first.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="server-status" className="py-16">
          <div className="container">
            <div className="mx-auto max-w-2xl text-center">
              <h2 className="text-3xl font-bold tracking-tight mb-4">Server Status</h2>
              <p className="text-muted-foreground mb-8">
                Check if our servers are currently online and see how many players are active.
              </p>
              <div className="flex justify-center">
                <ServerStatus />
              </div>
            </div>
          </div>
        </section>

        <section className="py-16">
          <div className="container">
            <div className="mx-auto max-w-2xl text-center">
              <h2 className="text-3xl font-bold tracking-tight mb-4" id="join">Ready to Join Our Small Community?</h2>
              <p className="text-muted-foreground mb-8">
                Connect when the server is online and become part of our small but dedicated community. Check our rules
                and FAQ to get started!
              </p>
              <div className="bg-card border rounded-lg p-6 mb-6">
                <p className="text-sm text-muted-foreground mb-2">Server IP:</p>
                <code className="text-lg font-mono bg-muted px-3 py-1 rounded">play.minersonline.uk</code>
              </div>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button asChild>
                  <Link href="/rules">Read Server Rules</Link>
                </Button>
                <Button variant="outline" asChild>
                  <Link href="/faq">Check FAQ</Link>
                </Button>
                <Button variant="outline" asChild>
                  <Link href="https://github.com/orgs/miners-online/discussions">Join the discussions</Link>
                </Button>
              </div>
            </div>
          </div>
        </section>
      </main>

      <SiteFooter />
    </div>
  )
}
