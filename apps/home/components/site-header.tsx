"use client"

import Link from "next/link"
import Image from "next/image"
import { useState } from "react"
import { Button } from "@/components/ui/button"
import { ModeToggle } from "@/components/mode-toggle"
import { Menu, X } from "lucide-react"

import {
  SignInButton,
  SignUpButton,
  SignedIn,
  SignedOut,
  UserButton,
} from '@clerk/nextjs'

const DotIcon = () => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" fill="currentColor">
      <path d="M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512z" />
    </svg>
  )
}

function UserProfile() {
  return (
    <UserButton>
      {/* You can also pass the content as direct children */}
      <UserButton.UserProfilePage label="Test" labelIcon={<DotIcon />} url="test">
        <div>
          <h1>Custom Test Page</h1>
          <p>This is the content of the custom test page.</p>
        </div>
      </UserButton.UserProfilePage>
    </UserButton>
  )
}

export function SiteHeader() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

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
          <SignedOut>
            <Button asChild className="hidden md:inline-flex">
              <SignInButton>
                Sign In
              </SignInButton>
            </Button>
          </SignedOut>
          <ModeToggle />
          <SignedIn>
            <UserProfile/>
          </SignedIn>
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
            <SignedOut>
              <Button asChild className="w-fit">
                <SignInButton>
                  Sign In
                </SignInButton>
              </Button>
            </SignedOut>
          </nav>
        </div>
      )}
    </header>
  )
}
