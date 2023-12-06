'use client';

import { Content, Theme } from '@carbon/react';

import SiteHeader from '@/components/SiteHeader/SiteHeader';

interface Props  { 
  children: React.ReactNode
}

export function Providers({ children }: Props) {
  return (
    <div>
      <SiteHeader />
      <Theme theme="white">
        <Content>{children}</Content>
      </Theme>
    </div>
  );
}
