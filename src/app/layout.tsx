import SiteHeader from '@/components/SiteHeader/SiteHeader';
import './globals.scss';

import { Content, Theme } from '@carbon/react';

export const metadata = {
  title: 'Miners Online',
  description: 'The official website of Miners Online',
};

interface Props  { 
  children: React.ReactNode;
}

export default function BaseLayout({ children }: Props) {
  return (
    <html lang="en">
      <body>
        <Theme theme="white">
          <Theme theme="g100">
            <SiteHeader/>
          </Theme>
          <Content>{children}</Content>
        </Theme>
      </body>
    </html>
  );
}
