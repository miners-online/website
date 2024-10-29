import type { Metadata } from "next";
import { ThemeProvider } from "@/components/theme-provider";
import { Navbar } from "@/components/navbar";
import { GeistSans } from "geist/font/sans";
import { GeistMono } from "geist/font/mono";
import { Footer } from "@/components/footer";
import Giscus from "@/components/giscus"
import "./globals.css";

import dynamic from "next/dynamic";

const VersionContextProvider = dynamic(
  () => import("@/components/context/version"),
  { ssr: false }
);


export const metadata: Metadata = {
  title: "Miners Online",
  metadataBase: new URL("https://minersonline.uk/"),
  description: "",
  icons: {
    icon: '/favicon.svg',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${GeistSans.variable} ${GeistMono.variable} font-regular`}
        suppressHydrationWarning
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <VersionContextProvider>
            <Navbar />
            <main className="sm:container mx-auto w-[88vw] h-auto">
              {children}
              <div className="py-8">
                <Giscus/>
              </div>
            </main>
            <Footer />
          </VersionContextProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
