import './globals.scss';

import { Providers } from './providers';

export const metadata = {
  title: 'Miners Online',
  description: 'The official website of Miners Online',
};

interface Props  { 
  children: React.ReactNode;
}

export default function RootLayout({ children }: Props) {
  return (
    <html lang="en">
      <body>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
