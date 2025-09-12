"use client"

import {
  UserButton,
} from '@clerk/nextjs'
import { Pickaxe } from 'lucide-react'

const DotIcon = () => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" fill="currentColor">
      <path d="M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512z" />
    </svg>
  )
}

function MinecraftAccountsPage() {
  return (
    <div>
      <h1>Custom Test Page</h1>
      <p>This is the content of the custom test page.</p>
    </div>
  )
}

export function UserOptions() {
  return (
    <UserButton>
      {/* You can also pass the content as direct children */}
      <UserButton.UserProfilePage label="Minecraft Accounts" labelIcon={<Pickaxe />} url="minecraft-accounts">
        <MinecraftAccountsPage/>
      </UserButton.UserProfilePage>
    </UserButton>
  )
}