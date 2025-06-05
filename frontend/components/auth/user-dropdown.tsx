"use client"

import { LogOut, Settings } from "lucide-react"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { User } from "@/lib/logto"

interface Props {
  onSignOut: () => Promise<void>;
  onSettings: () => Promise<void>;
  user: User;
}

export default function UserDropdown({ onSignOut, onSettings, user }: Props) {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="ghost" className="h-auto p-2 hover:bg-accent">
          <div className="flex items-center gap-3">
            {/* Left column: Avatar */}
            <Avatar className="h-8 w-8">
              <AvatarImage src={user.picture} alt={user.name} />
              <AvatarFallback className="text-sm">{user.initials}</AvatarFallback>
            </Avatar>
            {/* Right column: Full name */}
            <div className="hidden sm:block text-left">
              <p className="text-sm font-medium leading-none">{user.name}</p>
            </div>
          </div>
        </Button>
      </DropdownMenuTrigger>

      <DropdownMenuContent className="w-64" align="end" forceMount>
        {/* Row 1: User Information */}
        <div className="flex items-center gap-3 p-3">
          {/* Left column: Avatar */}
          <Avatar className="h-10 w-10">
            <AvatarImage src={user.picture} alt={user.name} />
            <AvatarFallback>{user.initials}</AvatarFallback>
          </Avatar>
          {/* Right column: Name and email */}
          <div className="flex flex-col space-y-1 leading-none">
            <p className="font-medium text-sm">{user.name}</p>
            <p className="text-xs text-muted-foreground">{user.email}</p>
          </div>
        </div>

        <DropdownMenuSeparator />

        {/* Row 2: Settings Link */}
        <DropdownMenuItem onClick={onSettings} className="cursor-pointer">
          <Settings className="mr-2 h-4 w-4" />
          <span>Settings</span>
        </DropdownMenuItem>

        <DropdownMenuSeparator />

        {/* Row 3: Sign Out */}
        <DropdownMenuItem onClick={onSignOut} className="cursor-pointer text-red-600 focus:text-red-600">
          <LogOut className="mr-2 h-4 w-4" />
          <span>Sign out</span>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
