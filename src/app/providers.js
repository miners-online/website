'use client';

import { Content, Theme } from '@carbon/react';

import SiteHeader from '@/components/SiteHeader/SiteHeader';

export function Providers({ children }) {
  return (
    <div>
      <SiteHeader />
      <Theme theme="white">
        <Content>{children}</Content>
      </Theme>
    </div>
  );
}
