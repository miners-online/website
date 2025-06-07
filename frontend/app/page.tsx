import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Alert, AlertDescription } from "@/components/ui/alert"
import {
  Github,
  Users,
  Server,
  MessageCircle,
  ExternalLink,
  AlertTriangle,
  Globe,
} from "lucide-react"
import Link from "next/link"
import Navbar from "@/components/navbar"
import ServerStatus from "@/components/server-status"
import Footer from "@/components/footer"

export default function HomePage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-emerald-900">
      {/* Header */}
      <Navbar/>

      {/* Hero Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto text-center">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
              Welcome to{" "}
              <span className="bg-gradient-to-r from-emerald-400 to-blue-400 bg-clip-text text-transparent">
                Miners Online
              </span>
            </h1>
            <p className="text-xl text-slate-300 mb-8 max-w-2xl mx-auto">
              An open-source Minecraft server built by the community, for the community. Join us in shaping the future
              of multiplayer Minecraft.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-emerald-600 hover:bg-emerald-700" asChild>
                <Link href="/#status" className="flex items-center">
                  <Server className="h-5 w-5 mr-2" />
                  Connect Now
                </Link>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <Link href="https://github.com/miners-online" target="_blank" rel="noopener noreferrer">
                  <Github className="h-5 w-5 mr-2" />
                  View Source Code
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Server Status Section */}
      <ServerStatus/>

      {/* Alpha Status Warning */}
      <section className="py-16 px-4">
        <div className="container mx-auto max-w-4xl">
          <Alert className="bg-amber-900/20 border-amber-500/50">
            <AlertTriangle className="h-4 w-4 text-amber-400" />
            <AlertDescription className="text-amber-100">
              <strong className="text-amber-400">Alpha Status:</strong> Miners Online is currently in alpha development.
              The server is not available 24/7 and minigames are not yet active. We&lsquo;re working hard to bring you the
              best possible experience. Thank you for your patience!
            </AlertDescription>
          </Alert>
        </div>
      </section>

      {/* Open Source Section */}
      <section className="py-16 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-white mb-4">Built Open Source</h2>
            <p className="text-slate-300 max-w-2xl mx-auto">
              Transparency and community collaboration are at the heart of Miners Online. Every line of code is open for
              inspection, contribution, and improvement.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <Card className="bg-slate-800/50 border-slate-700">
              <CardHeader>
                <CardTitle className="text-white flex items-center">
                  <Github className="h-5 w-5 mr-2 text-emerald-400" />
                  Open Development
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-slate-300">
                  All development happens in the open. View our progress, report issues, and contribute to the codebase.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-slate-800/50 border-slate-700">
              <CardHeader>
                <CardTitle className="text-white flex items-center">
                  <Users className="h-5 w-5 mr-2 text-emerald-400" />
                  Community Driven
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-slate-300">
                  Features and improvements are guided by community feedback and contributions from players like you.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-slate-800/50 border-slate-700">
              <CardHeader>
                <CardTitle className="text-white flex items-center">
                  <Globe className="h-5 w-5 mr-2 text-emerald-400" />
                  Transparent
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-slate-300">
                  No hidden mechanics or secret algorithms. Everything is documented and available for review.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Community Section */}
      <section id="community" className="py-16 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-white mb-4">Join the Community</h2>
            <p className="text-slate-300 max-w-2xl mx-auto">
              Connect with other players, share feedback, and stay updated on the latest developments.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <Card className="bg-slate-800/50 border-slate-700">
              <CardHeader>
                <CardTitle className="text-white flex items-center">
                  <MessageCircle className="h-5 w-5 mr-2 text-emerald-400" />
                  GitHub Discussions
                </CardTitle>
                <CardDescription className="text-slate-400">
                  Join conversations about features, report bugs, and connect with the community
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Button asChild className="w-full">
                  <Link
                    href="https://github.com/orgs/miners-online/discussions"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <ExternalLink className="h-4 w-4 mr-2" />
                    Visit Discussions
                  </Link>
                </Button>
              </CardContent>
            </Card>

            <Card className="bg-slate-800/50 border-slate-700">
              <CardHeader>
                <CardTitle className="text-white flex items-center">
                  <Github className="h-5 w-5 mr-2 text-emerald-400" />
                  GitHub Organization
                </CardTitle>
                <CardDescription className="text-slate-400">
                  Explore our repositories, contribute code, and track development progress
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Button variant="outline" asChild className="w-full">
                  <Link href="https://github.com/miners-online" target="_blank" rel="noopener noreferrer">
                    <ExternalLink className="h-4 w-4 mr-2" />
                    View Organization
                  </Link>
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Footer */}
      <Footer/>
    </div>
  )
}
