import type React from "react"
import type { Metadata } from "next"
import { Suspense } from "react"
import { SpeedInsights } from "@vercel/speed-insights/next"

import { globals } from "../lib/globals";

import "./globals.css"
import { Providers } from "./providers";

import { AuthProvider } from '@/components/auth/auth-context';

import { logtoConfig } from "@/lib/auth"
import { getLogtoContext, signIn, signOut } from '@logto/next/server-actions';

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
  const context = await getLogtoContext(logtoConfig);

  const onSignIn = async () => {
    'use server';
    await signIn(logtoConfig);
  }

  const onSignOut = async () => {
    'use server';
    await signOut(logtoConfig);
  }

  return (
    <html suppressHydrationWarning>
      <SpeedInsights/>
      <body>
        <Providers>
          <Suspense fallback={null}>
            <AuthProvider
              logtoContext={context}
              signIn={onSignIn}
              signOut={onSignOut}
            >
              {children}
            </AuthProvider>
          </Suspense>
        </Providers>
      </body>
    </html>
  );
}
