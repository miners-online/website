import { Content, Theme } from '@carbon/react';
import SiteHeader from '@/components/SiteHeader/SiteHeader';
import type { AppProps } from 'next/app'
import '../globals.scss';
 
export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Theme theme="white">
      <Theme theme="g100">
        <SiteHeader/>
      </Theme>
      <Content>
        <Component {...pageProps}/>
      </Content>
    </Theme>
)}