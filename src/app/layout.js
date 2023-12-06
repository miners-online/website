import './globals.scss';

import { Providers } from './providers';

export const metadata = {
  title: 'Miners Online',
  description: 'The official website of Miners Online',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
