'use client';

import SiteHeader from '@/components/SiteHeader/SiteHeader';
import { Content, Theme } from '@carbon/react';
import React, { ReactNode } from 'react';

interface Props {
  children?: ReactNode
}

export function Providers({ children }: Props) {
  return (
    <div>
      <Theme theme="g100">
        <SiteHeader />
      </Theme>
      <Content>{children}</Content>
    </div>
  );
}