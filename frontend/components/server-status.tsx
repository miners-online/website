import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

export default function ServerStatus() {
  // In a real implementation, you would fetch the server status
  const isOnline = true

  return (
    <Card>
      <CardHeader>
        <CardTitle>Server Information</CardTitle>
        <CardDescription>Everything you need to connect to our server</CardDescription>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="flex justify-between items-center">
          <span className="font-medium">Status:</span>
          <Badge variant={isOnline ? "default" : "destructive"} className={isOnline ? "bg-green-500" : ""}>
            {isOnline ? "Online" : "Offline"}
          </Badge>
        </div>

        <div className="flex justify-between items-center">
          <span className="font-medium">Server IP:</span>
          <code className="relative rounded bg-muted px-[0.3rem] py-[0.2rem] font-mono text-sm">minersonline.uk</code>
        </div>

        <div className="flex justify-between items-center">
          <span className="font-medium">Version:</span>
          <span>Java Edition 1.21.1</span>
        </div>

        <div className="flex justify-between items-center">
          <span className="font-medium">Players:</span>
          <span>24/100 Online</span>
        </div>
      </CardContent>
    </Card>
  )
}
