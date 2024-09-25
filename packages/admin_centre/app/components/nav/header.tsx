import { Link } from "@remix-run/react";
import {
  User2,
  LogOut,
  Settings,
} from "lucide-react";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "~/components/ui/breadcrumb";
import { Input } from "~/components/ui/input";
import { Button } from "~/components/ui/button";
import { Search, PanelLeft } from "lucide-react";
import { Sheet, SheetContent, SheetTrigger } from "~/components/ui/sheet";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "~/components/ui/dropdown-menu";
import { Avatar, AvatarFallback, AvatarImage } from "~/components/ui/avatar";
import { ModeToggle } from "~/components/mode-toggle"
import React from "react";

export interface NavItem {
  to: string;
  label: string;
  icon: React.ReactNode;
  active?: boolean;
}

export interface BreadcrumbItem {
  to: string;
  label: string;
}

export function Header({ items, breadcrumbs }: { items: NavItem[], breadcrumbs: BreadcrumbItem[] }) {
  return (
    <header className="sticky top-0 z-30 flex h-14 items-center gap-4 border-b bg-background px-4 sm:static sm:h-auto sm:border-0 sm:bg-transparent sm:px-6">
      <MobileMenu items={items} />
      <BreadcrumbNav items={breadcrumbs}/>
      <SearchBar />
      <ModeToggle/>
      <UserAccountDropdown />
    </header>
  );
}

function MobileMenu({ items }: { items: NavItem[] }) {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button size="icon" variant="outline" className="sm:hidden">
          <PanelLeft className="h-5 w-5" />
          <span className="sr-only">Toggle Menu</span>
        </Button>
      </SheetTrigger>
      <SheetContent side="left" className="sm:max-w-xs">
        <nav className="grid gap-6 text-lg font-medium">
          <Link
            to="/"
          >
            <img src="/favicon.svg"/>
          </Link>
          {/* Render navigation items passed as props */}
          {items.map((item, index) => (
            <LinkItem key={index} to={item.to} label={item.label} icon={item.icon} active={item.active} />
          ))}
        </nav>
      </SheetContent>
    </Sheet>
  );
}

interface LinkItemProps {
  to: string;
  label: string;
  icon: React.ReactNode;
  active?: boolean;
}

function LinkItem({ to, label, icon, active = false }: LinkItemProps) {
  return (
    <Link
      to={to}
      className={`flex items-center gap-4 px-2.5 ${
        active ? "text-foreground" : "text-muted-foreground"
      } hover:text-foreground`}
    >
      {icon}
      {label}
    </Link>
  );
}

function BreadcrumbNav({ items }: { items: BreadcrumbItem[] }) {
  const new_items = [...items]; // Copy the array, make sure the original stay the same
  let last_item = new_items.pop();
  return (
    <Breadcrumb className="hidden md:flex">
      <BreadcrumbList>
        {new_items.map((item, index) => (
          <div key={index}>
            <BreadcrumbItem>
              <BreadcrumbLink asChild>
                <Link to={item.to}>{item.label}</Link>
              </BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator/>
          </div>
        ))}
        <BreadcrumbPage>{last_item?.label}</BreadcrumbPage>
      </BreadcrumbList>
    </Breadcrumb>
  );
}

function SearchBar() {
  return (
    <>
      <Input
        type="search"
        placeholder="Search..."
        className="ml-auto hidden h-9 w-[200px] lg:flex"
      />
      <Button size="icon" variant="outline" className="ml-auto lg:hidden">
        <Search className="h-5 w-5" />
        <span className="sr-only">Search</span>
      </Button>
    </>
  );
}

function UserAccountDropdown() {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="ghost" className="relative h-8 w-8 rounded-full">
          <Avatar className="h-8 w-8">
            <AvatarImage src="https://avatar.example.com/username" alt="User Avatar" />
            <AvatarFallback>JD</AvatarFallback> {/* Default initials if no avatar */}
          </Avatar>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-56">
        <div className="flex items-center p-2">
          <Avatar className="mr-2 h-10 w-10">
            <AvatarImage src="https://avatar.example.com/username" alt="User Avatar" />
            <AvatarFallback>JD</AvatarFallback>
          </Avatar>
          <div>
            <p className="text-sm font-medium leading-none">John Doe</p>
            <p className="text-xs text-muted-foreground">john.doe@example.com</p>
          </div>
        </div>
        <DropdownMenuSeparator />
        <DropdownMenuItem>
          <User2 className="mr-2 h-4 w-4" />
          <span>Profile</span>
        </DropdownMenuItem>
        <DropdownMenuItem>
          <Settings className="mr-2 h-4 w-4" />
          <span>Settings</span>
        </DropdownMenuItem>
        <DropdownMenuSeparator />
        <DropdownMenuItem>
          <LogOut className="mr-2 h-4 w-4" />
          <span>Logout</span>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}