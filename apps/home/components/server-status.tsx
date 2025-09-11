"use client"

import { useState, useEffect } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Wifi, WifiOff, Users, Clock } from "lucide-react"
import { globals } from "@/lib/globals";
import { type ServerStatus } from "@/lib/minecraft_status";

interface ServerStatusInfo {
  online: boolean
  players: number
  maxPlayers: number
  motd: string[]
  lastSeen?: string
}

export function ServerStatus() {
  const [status, setStatus] = useState<ServerStatusInfo>({
    online: false,
    players: 0,
    maxPlayers: 0,
    motd: ["Loading..."],
    lastSeen: undefined,
  })

  useEffect(() => {
    const fetchServerStatus = async () => {
      try {
        const response = await fetch(`https://api.mcsrvstat.us/2/${globals.serverIP}`)
        const data = (await response.json()) as ServerStatus
        setStatus({
          online: data.online,
          players: data.online ? data.players.online : 0,
          maxPlayers: data.online ? data.players.max : 0,
          motd: data.online ? data.motd.clean : ["Server is offline"],
          lastSeen: data.online ? undefined : new Date().toLocaleString(),
        })
      } catch (error) {
        console.error("Failed to fetch server status:", error)
      }
    }

    fetchServerStatus()
    // Refresh status every 30 seconds
    const interval = setInterval(fetchServerStatus, 30000)
    return () => clearInterval(interval)
  }, [])

  return (
    <Card className="w-full max-w-md">
      <CardHeader className="pb-3">
        <CardTitle className="flex items-center gap-2 text-lg">
          {status.online ? (
            <Wifi className="h-5 w-5 text-primary" />
          ) : (
            <WifiOff className="h-5 w-5 text-muted-foreground" />
          )}
          Server Status <code className="text-lg font-mono bg-muted px-3 py-1 rounded">play.minersonline.uk</code>
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-3">
        <div className="flex items-center justify-between">
          <span className="text-sm text-muted-foreground">Status</span>
          <Badge variant={status.online ? "default" : "secondary"}>{status.online ? "Online" : "Offline"}</Badge>
        </div>

        <div className="flex items-center justify-between">
          <span className="text-sm text-muted-foreground flex items-center gap-1">
            <Users className="h-4 w-4" />
            Players
          </span>
          <span className="font-medium">
            {status.players}/{status.maxPlayers}
          </span>
        </div>

        { status.lastSeen && (
          <div className="flex items-center justify-between">
            <span className="text-sm text-muted-foreground flex items-center gap-1">
              <Clock className="h-4 w-4" />
              Last seen
            </span>
            <span className="text-sm">{status.lastSeen}</span>
          </div>
        )}
        { status.motd && (
          <div>
            <span className="text-sm text-muted-foreground">Message of the Day</span>
            <p className="text-sm mt-1">{status.motd.map((line, index) => (
              <span key={index}>
                {line}
                {index < status.motd.length - 1 && <br />}
              </span>
            ))}</p>
          </div>
        )}
      </CardContent>
    </Card>
  )
}
