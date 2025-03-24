"use client"

import { useState } from "react"
import Link from "next/link"
import { Menu, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import { SignedIn, SignedOut, SignInButton, SignUpButton, UserButton } from "@clerk/nextjs"

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center px-4">
        <div className="flex items-center gap-2 mr-4">
          <div className="w-8 h-8 rounded flex items-center justify-center">
            <img src="/favicon.svg"></img>
          </div>
          <span className="font-bold text-xl">Miners Online</span>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex ml-auto gap-6">
          <Link href="/" className="text-sm font-medium transition-colors hover:text-primary">
            Home
          </Link>
          <Link
            href="/about"
            className="text-sm font-medium text-muted-foreground transition-colors hover:text-primary"
          >
            About
          </Link>
          <Link
            href="https://github.com/miners-online"
            className="text-sm font-medium text-muted-foreground transition-colors hover:text-primary"
          >
            GitHub
          </Link>
          <SignedOut>
            <span className="text-sm font-medium text-muted-foreground transition-colors hover:text-primary">
              <SignInButton />
            </span>
            <span className="text-sm font-medium text-muted-foreground transition-colors hover:text-primary">
              <SignUpButton />
            </span>
          </SignedOut>
          <SignedIn>
            <UserButton />
          </SignedIn>
        </nav>

        {/* Mobile Menu Button */}
        <Button variant="ghost" size="icon" className="ml-auto md:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)}>
          {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          <span className="sr-only">Toggle menu</span>
        </Button>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden border-t">
          <div className="container flex flex-col space-y-3 py-4">
            <Link
              href="/"
              className="text-sm font-medium transition-colors hover:text-primary"
              onClick={() => setIsMenuOpen(false)}
            >
              Home
            </Link>
            <Link
              href="/about"
              className="text-sm font-medium text-muted-foreground transition-colors hover:text-primary"
              onClick={() => setIsMenuOpen(false)}
            >
              About
            </Link>
            <Link
              href="https://github.com/miners-online"
              className="text-sm font-medium text-muted-foreground transition-colors hover:text-primary"
              onClick={() => setIsMenuOpen(false)}
            >
              GitHub
            </Link>
            <SignedOut>
              <SignInButton />
              <SignUpButton />
            </SignedOut>
            <SignedIn>
              <UserButton />
            </SignedIn>
          </div>
        </div>
      )}
    </header>
  )
}
