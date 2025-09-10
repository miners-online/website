import type { Metadata } from "next";
import { SpeedInsights } from "@vercel/speed-insights/next"

import "./globals.css";

import { globals } from "../lib/globals";
import {
  ClerkProvider,
} from '@clerk/nextjs'


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
    <html>
      <SpeedInsights/>
      <body>
        <ClerkProvider>
          {children}
        </ClerkProvider>
      </body>
    </html>
  );
}
