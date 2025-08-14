import Link from "next/link"
import { BookOpen, FileText, Github, MessageCircle } from "lucide-react"
import Image from "next/image"
import { Separator } from "@radix-ui/react-dropdown-menu"
import { Badge } from "./ui/badge"
import { globals } from "@/lib/globals"

export default async function Footer() {
  return (
    <footer className="border-t border-slate-700/50 bg-slate-900/50 py-12 px-4">
      <div className="container mx-auto">
        <div className="grid md:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <Image width="64" height="64" alt="Miners Online Logo" className="h-6 w-6 text-emerald-400"  src="/favicon.svg"></Image>
              <span className="text-xl font-bold text-white">Miners Online</span>
            </div>
            <p className="text-slate-400 text-sm">An open-source Minecraft server built by the community.</p>
            <p className="text-slate-400 text-sm mt-2">NOT AN OFFICIAL MINECRAFT SERVICE. NOT APPROVED BY OR ASSOCIATED WITH MOJANG OR MICROSOFT.</p>
          </div>

          <div>
            <h3 className="text-white font-semibold mb-4">Server</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/#status" className="text-slate-400 hover:text-white transition-colors">
                  Server Status
                </Link>
              </li>
              <li>
                <span className="text-slate-400">IP: {globals.serverIP}</span>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-white font-semibold mb-4">Information</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/rules" className="text-slate-400 hover:text-white transition-colors flex items-center">
                  <FileText className="h-3 w-3 mr-1" />
                  Server Rules
                </Link>
              </li>
              <li>
                <Link href="/faq" className="text-slate-400 hover:text-white transition-colors flex items-center">
                  <BookOpen className="h-3 w-3 mr-1" />
                  FAQ
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-white font-semibold mb-4">Community</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link
                  href="https://github.com/miners-online"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-slate-400 hover:text-white transition-colors flex items-center"
                >
                  <Github className="h-3 w-3 mr-1" />
                  Source Code
                </Link>
              </li>
              <li>
                <Link
                  href="https://github.com/orgs/miners-online/discussions"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-slate-400 hover:text-white transition-colors flex items-center"
                >
                  <MessageCircle className="h-3 w-3 mr-1" />
                  Discussions
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <Separator className="my-8 bg-slate-700" />

        <div className="flex flex-col md:flex-row justify-between items-center">
          <p className="text-slate-400 text-sm">
            © {new Date().getFullYear()} Miners Online. Open source and community driven.
          </p>
          <div className="flex items-center space-x-4 mt-4 md:mt-0">
            <Badge variant="outline" className="border-amber-500 text-amber-400">
              Alpha Version
            </Badge>
            <span className="text-slate-500 text-xs">Not available 24/7 • Minigames inactive</span>
          </div>
        </div>
      </div>
    </footer>
  )
}
