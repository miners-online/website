"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Download, ExternalLink } from "lucide-react"
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import Link from "next/link"

export interface ModpackSectionProps {
  mrpackUrl: string
  zipUrl?: string
  modrinthUrl: string
}

export default function ModpackSection(props: ModpackSectionProps) {
  const [showDownloadOptions, setShowDownloadOptions] = useState(false)

  return (
    <>
      <Card>
        <CardHeader>
          <CardTitle>Mod Pack</CardTitle>
          <CardDescription>Enhance your gameplay with our custom mod pack. <b>This mod pack is required to join the server.</b></CardDescription>
        </CardHeader>
        <CardContent className="space-y-2">
          <p>Our server uses a custom mod pack that includes:</p>
          <ul className="list-disc pl-5 space-y-1">
            <li>Performance optimizations</li>
            <li>Quality of life improvements</li>
            <li>Custom textures and sounds</li>
            <li>Additional building blocks</li>
          </ul>
        </CardContent>
        <CardFooter>
          <Button className="w-full gap-2" onClick={() => setShowDownloadOptions(true)}>
            <Download className="h-4 w-4" />
            Download Mod Pack
          </Button>
        </CardFooter>
      </Card>

      <Dialog open={showDownloadOptions} onOpenChange={setShowDownloadOptions}>
        <DialogContent className="sm:max-w-md">
          <DialogHeader>
            <DialogTitle>How do you want to download this file?</DialogTitle>
            <DialogDescription>Choose your preferred download format</DialogDescription>
          </DialogHeader>
          <div className="flex flex-col space-y-3 py-4">
            <Button asChild variant="default" className="w-full justify-start">
              <Link href={props.mrpackUrl} onClick={() => setShowDownloadOptions(false)}>
                <Download className="mr-2 h-4 w-4" />
                Download <code className="mx-2 px-1 py-0.5 rounded">.mrpack</code>
              </Link>
            </Button>

            {/* <Button asChild variant="default" className="w-full justify-start" disabled>
              <Link href={props.zipUrl} onClick={() => setShowDownloadOptions(false)}>
                <Download className="mr-2 h-4 w-4" />
                Download <code className="mx-2 px-1 py-0.5 rounded">.zip</code>
              </Link>
            </Button> */}

            <Button asChild variant="outline" className="w-full justify-start">
              <Link
                href={props.modrinthUrl}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setShowDownloadOptions(false)}
              >
                <ExternalLink className="mr-2 h-4 w-4" />
                View on Modrinth
              </Link>
            </Button>
          </div>
        </DialogContent>
      </Dialog>
    </>
  )
}

