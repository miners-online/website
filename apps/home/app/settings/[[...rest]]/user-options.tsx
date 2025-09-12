"use client"
import {
  UserProfile,
} from '@clerk/nextjs'
import { Pickaxe } from 'lucide-react'
import { MinecraftAccountsPage } from "./minecraft-accounts-page"

export function UserOptions() { 
  return (
    <UserProfile>
      <UserProfile.Page label="Minecraft Accounts" labelIcon={<Pickaxe />} url="minecraft-accounts">
        <MinecraftAccountsPage/>
      </UserProfile.Page>
    </UserProfile>
  )
}

