import type { Metadata } from 'next'
import { Providers } from './providers';
import './globals.scss'


export const metadata: Metadata = {
  title: 'Miners Online',
  description: 'The official website for all of Miners Online.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        <Providers>{children}</Providers>
      </body>
    </html>
  )
}
