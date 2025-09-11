import type React from "react"
import type { Metadata } from "next"
import { ThemeProvider } from "@/components/theme-provider"
import { Suspense } from "react"
import { SpeedInsights } from "@vercel/speed-insights/next"
import { RootProvider } from 'fumadocs-ui/provider';

import { globals } from "../lib/globals";
import {
  ClerkProvider,
} from '@clerk/nextjs'

import "./globals.css"

export const metadata: Metadata = {
  title: globals.siteName,
  description: globals.siteDescription,
  icons: {
    icon: "/favicon-256x256.png",
  }
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html suppressHydrationWarning>
      <SpeedInsights/>
      <body>
        <ClerkProvider>
          <RootProvider>
            <Suspense fallback={null}>
              <ThemeProvider attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange>
                {children}
              </ThemeProvider>
            </Suspense>
          </RootProvider>
        </ClerkProvider>
      </body>
    </html>
  );
}
