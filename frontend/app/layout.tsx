import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

import Navbar from "@/components/navbar"

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Miners Online",
  description: "Join our community and explore the world of Minecraft together",
  icons: {
    icon: "/favicon.svg",
  }
};


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <div className="min-h-screen bg-gradient-to-b from-green-900/20 to-green-950/30">
          <Navbar />
          {children}
          <footer className="border-t py-6 mt-12">
            <div className="container mx-auto px-4 text-center text-muted-foreground">
              <p>© {new Date().getFullYear()} Miners Online. All rights reserved.</p>
              <p>NOT AN OFFICIAL MINECRAFT SERVICE. NOT APPROVED BY OR ASSOCIATED WITH MOJANG OR MICROSOFT.</p>
            </div>
          </footer>
        </div>
      </body>
    </html>
  );
}
