'use client'

import {
  FluentProvider,
  webLightTheme,
} from "@fluentui/react-components";

export function Providers({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <FluentProvider theme={webLightTheme}>
      {children}
    </FluentProvider>
  )
}