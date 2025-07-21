import type { Metadata } from "next";
import { SpeedInsights } from "@vercel/speed-insights/next"

import "./globals.css";

import { globals } from "../lib/globals";
import { UserProvider } from "@/components/auth/user-context";
import { VerificationProvider } from "@/components/auth/verification-context";

import { getLogtoContext } from "@logto/next/server-actions";
import { logtoConfig } from "@/lib/logto";
import { getUser } from "@/lib/logto"


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
  const user = getUser(logtoContext);

  return (
    <html>
      <SpeedInsights/>
      <body>
        <UserProvider initialUser={user}>
          <VerificationProvider>
            {children}
          </VerificationProvider>
        </UserProvider>
      </body>
    </html>
  );
}
