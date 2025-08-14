"use client"

import Link from "next/link"
import Image from "next/image"
import { Menu } from "lucide-react"
import { useState } from "react"
import UserDropdown from "./auth/user-dropdown"
import { Badge } from "./ui/badge"
import { Button } from "./ui/button"
import { Sheet, SheetContent, SheetTrigger, SheetTitle } from "./ui/sheet"
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuContent,
  NavigationMenuTrigger,
} from "./ui/navigation-menu"
import { useUser } from "./auth/user-context"

export default function Navbar() {
  const { user } = useUser()
  const [isOpen, setIsOpen] = useState(false)

  const navigationItems = [
    { href: "/", label: "Home", group: null },
    { href: "/#status", label: "Status", group: "Server" },
    { href: "/faq", label: "FAQ", group: "Server" },
    { href: "/rules", label: "Rules", group: "Server" },
    { href: "/#community", label: "Community", group: "Resources" },
    { href: "https://github.com/miners-online", label: "Source Code", group: "Resources", external: true },
  ]

  // Group the items programmatically
  const groupedItems = navigationItems.reduce(
    (acc, item) => {
      if (item.group) {
        if (!acc.grouped[item.group]) {
          acc.grouped[item.group] = []
        }
        acc.grouped[item.group].push(item)
      } else {
        acc.standalone.push(item)
      }
      return acc
    },
    { standalone: [], grouped: {} } as {
      standalone: typeof navigationItems
      grouped: Record<string, typeof navigationItems>
    },
  )

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
            <NavigationMenu>
              <NavigationMenuList className="space-x-2">
                {/* Standalone Links */}
                {groupedItems.standalone.map((link) => (
                  <NavigationMenuItem key={link.href}>
                    <NavigationMenuLink asChild>
                      <Link
                        href={link.href}
                        className="group inline-flex h-9 w-max items-center justify-center rounded-md bg-transparent px-4 py-2 text-sm font-medium text-slate-300 transition-colors hover:bg-slate-800 hover:text-white focus:bg-slate-800 focus:text-white focus:outline-none disabled:pointer-events-none disabled:opacity-50"
                        {...(link.external && { target: "_blank", rel: "noopener noreferrer" })}
                      >
                        {link.label}
                      </Link>
                    </NavigationMenuLink>
                  </NavigationMenuItem>
                ))}

                {/* Grouped Links */}
                {Object.entries(groupedItems.grouped).map(([groupName, links]) => (
                  <NavigationMenuItem key={groupName}>
                    <NavigationMenuTrigger className="bg-transparent text-slate-300 hover:bg-slate-800 hover:text-white focus:bg-slate-800 focus:text-white data-[active]:bg-slate-800 data-[state=open]:bg-slate-800">
                      {groupName}
                    </NavigationMenuTrigger>
                    <NavigationMenuContent>
                      <div className="grid w-48 gap-1 p-2 bg-slate-900 border-0 rounded-md shadow-lg">
                        {links.map((link) => (
                          <NavigationMenuLink key={link.href} asChild>
                            <Link
                              href={link.href}
                              className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-slate-800 hover:text-white focus:bg-slate-800 focus:text-white text-slate-300"
                              {...(link.external && { target: "_blank", rel: "noopener noreferrer" })}
                            >
                              <div className="text-sm font-medium leading-none">{link.label}</div>
                            </Link>
                          </NavigationMenuLink>
                        ))}
                      </div>
                    </NavigationMenuContent>
                  </NavigationMenuItem>
                ))}
              </NavigationMenuList>
            </NavigationMenu>

            {!user ? (
              <Link
                href="/api/logto/sign-in"
                className="text-slate-300 hover:text-white transition-colors px-4 py-2 rounded-md hover:bg-slate-800"
              >
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
              <SheetContent side="right" className="bg-slate-900 border-slate-700 px-4">
                {/* Mobile Navigation Links */}
                <div className="flex flex-col space-y-4 mt-8">
                  <SheetTitle className="text-lg font-bold text-white mb-4">Navigation</SheetTitle>
                  {/* Standalone Links */}
                  {groupedItems.standalone.map((link) => (
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

                  {/* Grouped Links */}
                  {Object.entries(groupedItems.grouped).map(([groupName, links]) => (
                    <div key={groupName} className="space-y-2">
                      <div className="text-slate-400 text-sm font-medium uppercase tracking-wider">{groupName}</div>
                      {links.map((link) => (
                        <Link
                          key={link.href}
                          href={link.href}
                          className="text-slate-300 hover:text-white transition-colors text-lg py-2 pl-4"
                          onClick={() => setIsOpen(false)}
                          {...(link.external && { target: "_blank", rel: "noopener noreferrer" })}
                        >
                          {link.label}
                        </Link>
                      ))}
                    </div>
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
