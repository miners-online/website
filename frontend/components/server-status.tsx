"use client";

import { useEffect, useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { globals } from "@/lib/globals";
import { type ServerStatus } from "@/lib/minecraft_status";

export default function ServerStatus() {
  const [serverStatus, setServerStatus] = useState<ServerStatus | null>(null);

  useEffect(() => {
    // Fetch the server status from the API route
    fetch(`https://api.mcsrvstat.us/2/${globals.serverIP}`)
      .then((res) => res.json())
      .then((data: ServerStatus) => setServerStatus(data))
      .catch((err) => console.error("Error fetching Minecraft status:", err));
  }, []);

  return (
    <Card>
      <CardHeader>
        <CardTitle>Server Information</CardTitle>
        <CardDescription>Everything you need to connect to our server</CardDescription>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="flex justify-between items-center">
          <span className="font-medium">Status:</span>
          <Badge variant={serverStatus?.online ? "default" : "destructive"} className={serverStatus?.online ? "bg-green-500" : ""}>
            {serverStatus?.online ? "Online" : "Offline"}
          </Badge>
        </div>

        <div className="flex justify-between items-center">
          <span className="font-medium">Server IP:</span>
          <code className="relative rounded bg-muted px-[0.3rem] py-[0.2rem] font-mono text-sm">{globals.serverIP}</code>
        </div>

        <div className="flex justify-between items-center">
          <span className="font-medium">Version:</span>
          <span>Java Edition 1.21.1</span>
        </div>

        <div className="flex justify-between items-center">
          <span className="font-medium">Players:</span>
          <span>
            {serverStatus?.online 
              ? `${serverStatus.players.online} / ${serverStatus.players.max} Online`
              : "0 / 0 Offline"
            }
          </span>
        </div>
      </CardContent>
    </Card>
  )
}
