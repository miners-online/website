"use client";

import { useEffect, useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { globals } from "@/lib/globals";
import { type ServerStatus } from "@/lib/minecraft_status";
import { Activity } from "lucide-react";

export default function ServerStatus() {
  const [serverStatus, setServerStatus] = useState<ServerStatus | null>(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const fetchServerStatus = async () => {
      try {
        const response = await fetch(`https://api.mcsrvstat.us/2/${globals.serverIP}`)
        const data = await response.json()
        setServerStatus(data)
      } catch (error) {
        console.error("Failed to fetch server status:", error)
        setServerStatus({ online: false } as ServerStatus)
      } finally {
        setLoading(false)
      }
    }

    fetchServerStatus()
    // Refresh status every 30 seconds
    const interval = setInterval(fetchServerStatus, 30000)
    return () => clearInterval(interval)
  }, [])

  return (
      <section id="status" className="py-16 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-white mb-4">Server Status</h2>
            <p className="text-slate-300">Real-time information about our Minecraft server</p>
          </div>

          <div className="max-w-2xl mx-auto">
            <Card className="bg-slate-800/50 border-slate-700">
              <CardHeader>
                <CardTitle className="flex items-center justify-between text-white">
                  <span className="flex items-center">
                    <Activity className="h-5 w-5 mr-2" />
                    {globals.serverIP}
                  </span>
                  {loading ? (
                    <Badge variant="secondary">Checking...</Badge>
                  ) : (
                    <Badge
                      variant={serverStatus?.online ? "default" : "destructive"}
                      className={serverStatus?.online ? "bg-emerald-600" : ""}
                    >
                      {serverStatus?.online ? "Online" : "Offline"}
                    </Badge>
                  )}
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {serverStatus?.online && (
                  <>
                    <div className="flex justify-between items-center">
                      <span className="text-slate-300">Players Online</span>
                      <span className="text-white font-semibold">
                        {serverStatus.players?.online || 0} / {serverStatus.players?.max || 0}
                      </span>
                    </div>
                    {serverStatus.version && (
                      <div className="flex justify-between items-center">
                        <span className="text-slate-300">Version</span>
                        <span className="text-white font-semibold">{serverStatus.version}</span>
                      </div>
                    )}
                    {serverStatus.motd?.clean && (
                      <div>
                        <span className="text-slate-300 block mb-2">Message of the Day</span>
                        <div className="bg-slate-900/50 p-3 rounded-md">
                          {serverStatus.motd.clean.map((line, index) => (
                            <p key={index} className="text-white text-sm">
                              {line}
                            </p>
                          ))}
                        </div>
                      </div>
                    )}
                  </>
                )}
                {!loading && !serverStatus?.online && (
                  <p className="text-slate-400 text-center py-4">Server is currently offline. Check back later!</p>
                )}
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

  )
}
