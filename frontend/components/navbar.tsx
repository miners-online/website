"use client"

import Link from "next/link"
import Image from "next/image"
import { Menu } from "lucide-react"
import { useState } from "react"

import UserDropdown from "./auth/user-dropdown"
import { Badge } from "./ui/badge"
import { Button } from "./ui/button"
import { Sheet, SheetContent, SheetTrigger } from "./ui/sheet"
import { useUser } from "./auth/user-context"

export default function Navbar() {
  const { user } = useUser()
  const [isOpen, setIsOpen] = useState(false)

  const navigationLinks = [
    { href: "/", label: "Home" },
    { href: "/#status", label: "Status" },
    { href: "/#community", label: "Community" },
    { href: "/faq", label: "FAQ" },
    { href: "/rules", label: "Rules" },
    { href: "https://github.com/miners-online", label: "Source Code", external: true },
  ]

  return (
    <header className="border-b border-slate-700/50 bg-slate-900/50 backdrop-blur-sm sticky top-0 z-50">
      <div className="container mx-auto px-4 py-4">
        <nav className="flex items-center justify-between">
          {/* Logo and Title */}
          <div className="flex items-center space-x-2">
            <Image
              width="64"
              height="64"
              alt="Miners Online Logo"
              className="h-8 w-8 text-emerald-400"
              src="/favicon.svg"
            />
            <span className="text-2xl font-bold text-white">Miners Online</span>
            <Badge variant="outline" className="border-amber-500 text-amber-400">
              Alpha
            </Badge>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-4">
            {navigationLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-slate-300 hover:text-white transition-colors"
                {...(link.external && { target: "_blank", rel: "noopener noreferrer" })}
              >
                {link.label}
              </Link>
            ))}
            {!user ? (
              <Link href="/api/logto/sign-in" className="text-slate-300 hover:text-white transition-colors">
                Sign In
              </Link>
            ) : (
              <UserDropdown
                user={user}
                onSignOut={async () => {
                  window.location.href = "/api/logto/sign-out"
                }}
                onSettings={async () => {
                  window.location.href = "/settings"
                }}
              />
            )}
          </div>

          {/* Mobile Navigation */}
          <div className="flex md:hidden items-center space-x-2">
            {/* User Auth for Mobile */}
            {!user ? (
              <Link href="/api/logto/sign-in" className="text-slate-300 hover:text-white transition-colors text-sm">
                Sign In
              </Link>
            ) : (
              <UserDropdown
                user={user}
                onSignOut={async () => {
                  window.location.href = "/api/logto/sign-out"
                }}
                onSettings={async () => {
                  window.location.href = "/settings"
                }}
              />
            )}

            {/* Mobile Menu Button */}
            <Sheet open={isOpen} onOpenChange={setIsOpen}>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon" className="text-slate-300 hover:text-white">
                  <Menu className="h-6 w-6" />
                  <span className="sr-only">Toggle navigation menu</span>
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="bg-slate-900 border-slate-700">
                <div className="flex flex-col space-y-4 mt-8">
                  {navigationLinks.map((link) => (
                    <Link
                      key={link.href}
                      href={link.href}
                      className="text-slate-300 hover:text-white transition-colors text-lg py-2"
                      onClick={() => setIsOpen(false)}
                      {...(link.external && { target: "_blank", rel: "noopener noreferrer" })}
                    >
                      {link.label}
                    </Link>
                  ))}
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </nav>
      </div>
    </header>
  )
}
