import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Download } from "lucide-react"

export default function ModpackSection() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Mod Pack</CardTitle>
        <CardDescription>Enhance your gameplay with our custom mod pack</CardDescription>
      </CardHeader>
      <CardContent className="space-y-2">
        <p>Our server uses a custom mod pack that includes:</p>
        <ul className="list-disc pl-5 space-y-1">
          <li>Performance optimizations</li>
          <li>Quality of life improvements</li>
          <li>Custom textures and sounds</li>
          <li>Additional building blocks</li>
          <li><b>It is required to join the server</b></li>
        </ul>
      </CardContent>
      <CardFooter>
        <Button className="w-full gap-2">
          <Download className="h-4 w-4" />
          Download Mod Pack
        </Button>
      </CardFooter>
    </Card>
  )
}
