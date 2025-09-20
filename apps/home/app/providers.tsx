"use client"

import { RootProvider } from 'fumadocs-ui/provider';
import { ThemeProvider } from "@/components/theme-provider"

import type { ReactNode } from "react"

export function Providers({ children }: { children: ReactNode }) {
  return (
    <ThemeProvider attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange>
      <RootProvider>
        {children}
      </RootProvider>
    </ThemeProvider>
  )
}