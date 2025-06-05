import type { Metadata } from "next";
import { getLogtoContext, signIn, signOut } from '@logto/next/server-actions';
import "./globals.css";

import Navbar from "@/components/navbar"
import { globals } from "../lib/globals";
import { logtoConfig } from "@/lib/logto";


export const metadata: Metadata = {
  title: globals.siteName,
  description: globals.siteDescription,
  icons: {
    icon: "/favicon.svg",
  }
};


export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const logtoContext = await getLogtoContext(logtoConfig);

  return (
    <html lang="en">
      <body className={`antialiased`}>
        <div className="min-h-screen bg-gradient-to-b from-green-900/20 to-green-950/30">
          <Navbar
            logtoContext={logtoContext}
            onSignIn={async () => {
              'use server';

              await signIn(logtoConfig);
            }}
            onSignOut={async () => {
              'use server';

              await signOut(logtoConfig);
            }}
          />
          {children}
          <footer className="border-t py-6 mt-12">
            <div className="container mx-auto px-4 text-center text-muted-foreground">
              <p>© {new Date().getFullYear()} {globals.siteName}. All rights reserved.</p>
              <p>NOT AN OFFICIAL MINECRAFT SERVICE. NOT APPROVED BY OR ASSOCIATED WITH MOJANG OR MICROSOFT.</p>
            </div>
          </footer>
        </div>
      </body>
    </html>
  );
}
