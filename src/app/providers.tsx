'use client';

import { Content, Theme } from '@carbon/react';

import SiteHeader from '@/components/SiteHeader/SiteHeader';

interface Props  { 
  children: React.ReactNode;
}

export function Providers({ children }: Props) {
  return (
    <Theme theme="white">
      <Theme theme="g100">
        <SiteHeader />
      </Theme>
      <Content>{children}</Content>
    </Theme>
  );
}
