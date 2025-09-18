"use client"

import { RootProvider } from 'fumadocs-ui/provider';
import { ThemeProvider } from "@/components/theme-provider"

import type { ReactNode } from "react"
import { SessionProvider } from 'next-auth/react';

export function Providers({ children }: { children: ReactNode }) {
  return (
    <ThemeProvider attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange>
      <SessionProvider>
        <RootProvider>
          {children}
        </RootProvider>
      </SessionProvider>
    </ThemeProvider>
  )
}