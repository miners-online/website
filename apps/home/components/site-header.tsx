"use client"

import Link from "next/link"
import Image from "next/image"
import { useState } from "react"
import { Button } from "@/components/ui/button"
import { UserButton } from "@/components/auth/user-button"
import { ModeToggle } from "@/components/mode-toggle"
import { Menu, X } from "lucide-react"

import { useAuth } from "./auth/auth-context"

export function SiteHeader() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const { signIn, isAuthenticated } = useAuth();

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen)
  }

  return (
    <header className="border-b border-slate-700/10 bg-slate-900/10 dark:border-slate-700/50 dark:bg-slate-900/50 backdrop-blur-sm sticky top-0 z-50">
      <div className="container flex h-16 items-center justify-between">
        <Link href="/" className="flex items-center gap-2 font-bold text-xl">
          <Image
            className="h-6 w-6 text-primary"
            src="/favicon-256x256.png"
            alt="Miners Online Logo"
            width="64"
            height="64"
          />
          Miners Online
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-6">
          <Link href="/" className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">
            Home
          </Link>
          <Link
            href="/blog"
            className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
          >
            Blog
          </Link>
          <Link
            href="/rules"
            className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
          >
            Rules
          </Link>
          <Link
            href="/faq"
            className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
          >
            FAQ
          </Link>
        </nav>

        <div className="flex items-center gap-2">
          <Button
            variant="ghost"
            size="icon"
            className="md:hidden"
            onClick={toggleMobileMenu}
            aria-label="Toggle mobile menu"
          >
            {isMobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </Button>

          <Button asChild className="hidden md:inline-flex">
            <Link href="/#join">Join Server</Link>
          </Button>

          {!isAuthenticated && 
            <Button className="hidden md:inline-flex" onClick={signIn}>
              Sign In
            </Button>
          }

          <ModeToggle />

          {isAuthenticated && <UserButton/> }
        </div>
      </div>

      {isMobileMenuOpen && (
        <div className="md:hidden border-t bg-slate-900/10 dark:bg-slate-900/50">
          <nav className="container py-4 flex flex-col gap-4">
            <Link
              href="/"
              className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Home
            </Link>
            <Link
              href="/blog"
              className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Blog
            </Link>
            <Link
              href="/rules"
              className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Rules
            </Link>
            <Link
              href="/faq"
              className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              FAQ
            </Link>
            <Button asChild className="w-fit">
              <Link href="#join" onClick={() => setIsMobileMenuOpen(false)}>
                Join Server
              </Link>
            </Button>
            {!isAuthenticated && 
              <Button className="w-fit" onClick={signIn}>
                Sign In
              </Button>
            }
          </nav>
        </div>
      )}
    </header>
  )
}
