import { Clock } from "lucide-react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { cn } from "@/lib/utils"

interface ScheduleDay {
  day: string
  active: boolean
  startTime?: string
  endTime?: string
}

interface ServerScheduleCardProps {
  serverName: string
  description?: string
  schedule: ScheduleDay[]
  timezone?: string
  className?: string
}

export function ServerScheduleCard({
  serverName = "Minecraft Server",
  description = "Weekly operating schedule",
  schedule,
  timezone = "UTC",
  className,
}: ServerScheduleCardProps) {
  return (
    <Card className={cn("w-full max-w-md", className)}>
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <Clock className="h-5 w-5" />
          {serverName}
        </CardTitle>
        <CardDescription>{description}</CardDescription>
        <p className="text-xs text-muted-foreground mt-1">All times in {timezone}</p>
      </CardHeader>
      <CardContent>
        <div className="rounded-md border">
          <div className="grid grid-cols-3 border-b bg-muted/50 p-3 text-sm font-medium">
            <div>Day</div>
            <div className="col-span-2">Hours</div>
          </div>
          <div className="divide-y">
            {schedule.map((day) => (
              <div key={day.day} className="grid grid-cols-3 p-3 text-sm">
                <div className="flex items-center gap-2">
                  <div
                    className={cn("h-2 w-2 rounded-full", day.active ? "bg-green-500" : "bg-gray-300 dark:bg-gray-600")}
                    aria-hidden="true"
                  />
                  <span>{day.day}</span>
                </div>
                <div className="col-span-2">
                  {day.active ? (
                    <span>
                      {day.startTime} - {day.endTime}
                    </span>
                  ) : (
                    <span className="text-muted-foreground">Closed</span>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </CardContent>
    </Card>
  )
}

