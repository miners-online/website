import {
  Links,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
} from "@remix-run/react";
import "./global.scss";
import AppHeader from "~/components/AppHeader/AppHeader"
import { Content, Theme } from '@carbon/react';

export function Layout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" type="image/png" href="/favicon.png"/>
        <link rel="icon" type="image/svg" href="/favicon.svg"/>
        <Meta />
        <Links />
      </head>
      <body>
        <div>
          <Theme theme="g100">
            <AppHeader />
          </Theme>
          <Content>
            {children}
          </Content>
        </div>
        <ScrollRestoration />
        <Scripts />
      </body>
    </html>
  );
}

export default function App() {
  return <Outlet />;
}
