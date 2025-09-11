import { Button } from "@/components/ui/button"
import { ArrowRight, Users, Gamepad2, Globe } from "lucide-react"
import Link from "next/link"

export function HeroSection() {
  return (
    <section className="relative py-20 lg:py-32">
      <div className="container">
        <div className="mx-auto max-w-4xl text-center">
          <h1 className="text-4xl font-bold tracking-tight text-balance sm:text-6xl lg:text-7xl">
            Join the Adventure at <span className="text-primary">Miners Online</span>
          </h1>
          <p className="mt-6 text-lg leading-8 text-muted-foreground text-pretty">
            A small, personal Minecraft server where every player matters. UK-based, open-source, and run with genuine
            passion for creating quality gaming experiences.
          </p>

          <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button size="lg" asChild>
              <Link href="#server-status" className="flex items-center gap-2">
                Join Now
                <ArrowRight className="h-4 w-4" />
              </Link>
            </Button>
            <Button variant="outline" size="lg" asChild>
              <Link href="/blog">Learn More</Link>
            </Button>
          </div>

          <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="flex flex-col items-center gap-2">
              <Users className="h-8 w-8 text-primary" />
              <h3 className="font-semibold">Personal Touch</h3>
              <p className="text-sm text-muted-foreground text-center">
                Small community where your voice is heard and friendships are real.
              </p>
            </div>
            <div className="flex flex-col items-center gap-2">
              <Gamepad2 className="h-8 w-8 text-primary" />
              <h3 className="font-semibold">Epic Minigames</h3>
              <p className="text-sm text-muted-foreground text-center">
                From PvP battles to creative challenges, we have it all.
              </p>
            </div>
            <div className="flex flex-col items-center gap-2">
              <Globe className="h-8 w-8 text-primary" />
              <h3 className="font-semibold">UK Based</h3>
              <p className="text-sm text-muted-foreground text-center">
                Low latency gaming experience for European players.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
