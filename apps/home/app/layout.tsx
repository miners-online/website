import type React from "react"
import type { Metadata } from "next"
import { Suspense } from "react"
import { SpeedInsights } from "@vercel/speed-insights/next"

import { globals } from "../lib/globals";

import "./globals.css"
import { Providers } from "./providers";

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
        <Providers>
          <Suspense fallback={null}>
            {children}
          </Suspense>
        </Providers>
      </body>
    </html>
  );
}
