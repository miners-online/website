import RootLayout from '@/components/RootLayout/layout'
import type { AppProps } from 'next/app'
 
export default function MyApp({ Component, pageProps }: AppProps) {
  return <RootLayout {...pageProps}> 
    <Component {...pageProps}/>
  </RootLayout>
}