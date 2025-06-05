"use client"

import { useState } from "react"
import Link from "next/link"
import { Menu, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import Image from "next/image"
import { LogtoContext } from "@logto/next"
import { getUser } from "@/lib/logto"
import { ExternalLink } from "lucide-react"
import UserDropdown from "./auth/user-dropdown"

interface Props {
  logtoContext: LogtoContext;
};


export default function Navbar({logtoContext }: Props) {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const user = getUser(logtoContext);

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center px-4">
        <div className="flex items-center gap-4 mr-4">
          <div className="w-8 h-8 rounded flex items-center justify-center">
            <Image width="64" height="64" alt="Miners Online Logo"  src="/favicon.svg"></Image>
          </div>
          <span className="font-bold text-xl">Miners Online</span>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex ml-auto gap-6">
          <Link href="/"
            className="h-auto py-4 hover:bg-accent text-sm font-medium"
          >
            Home
          </Link>
          <Link
            href="/rules"
            className="h-auto py-4 hover:bg-accent text-sm font-medium"
          >
            Rules
          </Link>
          <Link
            href="https://github.com/miners-online"
            className="h-auto py-4 hover:bg-accent text-sm font-medium"
            >
            <ExternalLink className="inline mr-1" size={16} />
            GitHub
          </Link>
          {!user ? (
            <Link
              href="/api/logto/sign-in"
              className="h-auto py-4 hover:bg-accent text-sm font-medium"
            >
              Sign In
            </Link>
          ) : (
            <UserDropdown
              user={user}
              onSignOut={async () => {window.location.href = "/api/logto/sign-out"}}
              onSettings={async () => {window.location.href = "/settings"}}
            />
          )}
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
              className="h-auto py-4 hover:bg-accent text-sm font-medium"
              onClick={() => setIsMenuOpen(false)}
            >
              Home
            </Link>
            <Link
              href="/about"
              className="h-auto py-4 hover:bg-accent text-sm font-medium"
              onClick={() => setIsMenuOpen(false)}
            >
              About
            </Link>
            <Link
              href="https://github.com/miners-online"
              className="h-auto py-4 hover:bg-accent"
              onClick={() => setIsMenuOpen(false)}
            >
              GitHub
            </Link>
            {!user ? (
              <Link
                href="/api/logto/sign-in"
                className="h-auto py-4 hover:bg-accent text-sm font-medium"
              >
                Sign In
              </Link>
            ) : (
              <UserDropdown
                user={user}
                onSignOut={async () => {window.location.href = "/api/logto/sign-out"}}
                onSettings={async () => {window.location.href = "/settings"}}
              />
            )}
          </div>
        </div>
      )}
    </header>
  )
}
