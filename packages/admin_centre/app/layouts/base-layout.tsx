import React from 'react';
import { Sidebar } from "~/components/nav/side-bar";
import { Header, NavItem, BreadcrumbItem } from "~/components/nav/header";

import {
  Home,
  KeyIcon
} from "lucide-react";

type BaseLayoutProps = {
  children: React.ReactNode;
  breadcrumbs: BreadcrumbItem[]
};

const items: NavItem[] = [
  {
    icon: <Home className="h-5 w-5"/>,
    to: '/',
    label: "Dashboard"
  },
  {
    icon: <KeyIcon className="h-5 w-5"/>,
    to: '/api_tokens',
    label: "API Tokens"
  }
]

export const BaseLayout: React.FC<BaseLayoutProps> = ({ children, breadcrumbs }) => {
  return (
    <div className="flex min-h-screen w-full flex-col bg-muted/40">
      <Sidebar items={items}/>
      <div className="flex flex-col sm:gap-4 sm:py-4 sm:pl-14">
        <Header items={items} breadcrumbs={breadcrumbs}/>
        <main className="grid flex-1 items-start gap-4 p-4 sm:px-6 sm:py-0 md:gap-8">
          {children}
        </main>
      </div>
    </div>
  );
};
