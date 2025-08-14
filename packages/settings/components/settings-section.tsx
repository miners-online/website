import type React from "react"
import { Card, CardContent } from "@/components/ui/card"

interface SettingsSectionProps {
  title: string
  children: React.ReactNode
}

export function SettingsSection({ title, children }: SettingsSectionProps) {
  return (
    <Card>
      <CardContent className="px-6 py-2">
      <div className="grid grid-cols-3 gap-8">
        {/* Left Column */}
        <div className="col-span-1">
        <h2 className="text-sm font-medium text-gray-500 uppercase tracking-wider">{title}</h2>
        </div>

        {/* Right Column */}
        <div className="col-span-2 space-y-6">{children}</div>
      </div>
      </CardContent>
    </Card>
  )
}
