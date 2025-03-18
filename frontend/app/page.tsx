import Navbar from "@/components/navbar"
import HeroSection from "@/components/hero-section"
import ServerStatus from "@/components/server-status"
import ModpackSection from "@/components/modpack-section"

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-green-900/20 to-green-950/30">
      <Navbar />
      <main className="container mx-auto px-4 py-8">
        <HeroSection />
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
          <ServerStatus />
          <ModpackSection />
        </div>
      </main>
      <footer className="border-t py-6 mt-12">
        <div className="container mx-auto px-4 text-center text-muted-foreground">
          <p>© {new Date().getFullYear()} Miners Online. All rights reserved.</p>
        </div>
      </footer>
    </div>
  )
}

