
import { SiteHeader } from "@/components/site-header"
import { UserOptions } from "./user-options"

export default function SettingsPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-200 via-blue-100 to-emerald-200 dark:from-slate-900 dark:via-slate-800 dark:to-emerald-900">
      <SiteHeader />
      <UserOptions/>
    </div>
  )
}

