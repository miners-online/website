import { SiteHeader } from "@/components/site-header"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { AlertTriangle, Shield, Users, MessageSquare, Gamepad2, Ban } from "lucide-react"
import { SiteFooter } from "@/components/site-footer"

export default function RulesPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-200 via-blue-100 to-emerald-200 dark:from-slate-900 dark:via-slate-800 dark:to-emerald-900">
      <SiteHeader />
      <main className="container py-16">
        <div className="mx-auto max-w-4xl">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold tracking-tight mb-4">Server Rules</h1>
            <p className="text-lg text-muted-foreground text-pretty">
              Please read and follow these rules to ensure a fun and fair experience for everyone on Miners Online.
            </p>
          </div>

          <div className="grid gap-8">
            {/* General Conduct */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Users className="h-5 w-5 text-primary" />
                  General Conduct
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-3">
                  <div className="flex items-start gap-3">
                    <Badge variant="outline" className="mt-1 text-xs">
                      1
                    </Badge>
                    <p className="text-sm leading-relaxed">
                      <strong>Respect all players:</strong> Treat everyone with kindness and respect. Harassment,
                      bullying, or discrimination of any kind will not be tolerated.
                    </p>
                  </div>
                  <div className="flex items-start gap-3">
                    <Badge variant="outline" className="mt-1 text-xs">
                      2
                    </Badge>
                    <p className="text-sm leading-relaxed">
                      <strong>No inappropriate content:</strong> Keep all content family-friendly. This includes
                      usernames, skins, builds, and chat messages.
                    </p>
                  </div>
                  <div className="flex items-start gap-3">
                    <Badge variant="outline" className="mt-1 text-xs">
                      3
                    </Badge>
                    <p className="text-sm leading-relaxed">
                      <strong>Follow staff instructions:</strong> Listen to and cooperate with server moderators and
                      administrators at all times.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Chat Rules */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <MessageSquare className="h-5 w-5 text-primary" />
                  Chat Rules
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-3">
                  <div className="flex items-start gap-3">
                    <Badge variant="outline" className="mt-1 text-xs">
                      1
                    </Badge>
                    <p className="text-sm leading-relaxed">
                      <strong>No spam or flooding:</strong> Avoid sending repetitive messages, excessive caps, or
                      flooding the chat with unnecessary content.
                    </p>
                  </div>
                  <div className="flex items-start gap-3">
                    <Badge variant="outline" className="mt-1 text-xs">
                      2
                    </Badge>
                    <p className="text-sm leading-relaxed">
                      <strong>English only in global chat:</strong> Use English in public channels to ensure everyone
                      can participate in conversations.
                    </p>
                  </div>
                  <div className="flex items-start gap-3">
                    <Badge variant="outline" className="mt-1 text-xs">
                      3
                    </Badge>
                    <p className="text-sm leading-relaxed">
                      <strong>No advertising:</strong> Do not advertise other servers, Discord servers, or external
                      services without permission.
                    </p>
                  </div>
                  <div className="flex items-start gap-3">
                    <Badge variant="outline" className="mt-1 text-xs">
                      4
                    </Badge>
                    <p className="text-sm leading-relaxed">
                      <strong>No personal information:</strong> Never share personal information like real names,
                      addresses, phone numbers, or social media accounts.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Gameplay Rules */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Gamepad2 className="h-5 w-5 text-primary" />
                  Gameplay Rules
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-3">
                  <div className="flex items-start gap-3">
                    <Badge variant="outline" className="mt-1 text-xs">
                      1
                    </Badge>
                    <p className="text-sm leading-relaxed">
                      <strong>No cheating or exploiting:</strong> Use of hacked clients, exploits, or any unfair
                      advantages is strictly prohibited and will result in immediate punishment.
                    </p>
                  </div>
                  <div className="flex items-start gap-3">
                    <Badge variant="outline" className="mt-1 text-xs">
                      2
                    </Badge>
                    <p className="text-sm leading-relaxed">
                      <strong>No griefing:</strong> Do not destroy, modify, or steal from other players' builds or items
                      without permission.
                    </p>
                  </div>
                  <div className="flex items-start gap-3">
                    <Badge variant="outline" className="mt-1 text-xs">
                      3
                    </Badge>
                    <p className="text-sm leading-relaxed">
                      <strong>Play fairly:</strong> Participate in games with good sportsmanship. No rage quitting, team
                      killing, or intentionally disrupting gameplay.
                    </p>
                  </div>
                  <div className="flex items-start gap-3">
                    <Badge variant="outline" className="mt-1 text-xs">
                      4
                    </Badge>
                    <p className="text-sm leading-relaxed">
                      <strong>No alternate accounts:</strong> Using multiple accounts to gain unfair advantages or
                      bypass punishments is not allowed.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Building Rules */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Shield className="h-5 w-5 text-primary" />
                  Building Rules
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-3">
                  <div className="flex items-start gap-3">
                    <Badge variant="outline" className="mt-1 text-xs">
                      1
                    </Badge>
                    <p className="text-sm leading-relaxed">
                      <strong>Appropriate builds only:</strong> All builds must be family-friendly and appropriate for
                      all ages. No offensive or inappropriate structures.
                    </p>
                  </div>
                  <div className="flex items-start gap-3">
                    <Badge variant="outline" className="mt-1 text-xs">
                      2
                    </Badge>
                    <p className="text-sm leading-relaxed">
                      <strong>No lag machines:</strong> Do not create redstone contraptions or builds designed to cause
                      server lag or performance issues.
                    </p>
                  </div>
                  <div className="flex items-start gap-3">
                    <Badge variant="outline" className="mt-1 text-xs">
                      3
                    </Badge>
                    <p className="text-sm leading-relaxed">
                      <strong>Respect build themes:</strong> In themed building competitions or areas, ensure your
                      builds match the specified theme and quality standards.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Punishments */}
            <Card className="border-destructive/20">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-destructive">
                  <Ban className="h-5 w-5" />
                  Punishments
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="bg-destructive/10 p-4 rounded-lg">
                  <div className="flex items-start gap-2 mb-3">
                    <AlertTriangle className="h-4 w-4 text-destructive mt-0.5" />
                    <p className="text-sm font-medium text-destructive">Rule violations will result in consequences:</p>
                  </div>
                  <div className="space-y-2 text-sm">
                    <p>
                      <strong>Minor violations:</strong> Warning, temporary mute, or short-term suspension
                    </p>
                    <p>
                      <strong>Major violations:</strong> Temporary ban (1-30 days) depending on severity
                    </p>
                    <p>
                      <strong>Severe violations:</strong> Permanent ban with no appeal option
                    </p>
                  </div>
                </div>
                <p className="text-sm text-muted-foreground">
                  Punishments are issued at staff discretion based on the severity and frequency of rule violations.
                  Repeat offenders will face increasingly severe consequences.
                </p>
              </CardContent>
            </Card>

            {/* Appeals and Contact */}
            <Card>
              <CardHeader>
                <CardTitle>Appeals and Contact</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-sm leading-relaxed">
                  If you believe you have been unfairly punished, you may submit an appeal through our Discord server.
                  Appeals must be submitted within 30 days of the punishment and include relevant evidence.
                </p>
                <p className="text-sm leading-relaxed">
                  For questions about rules or to report rule violations, contact our staff team through:
                </p>
                <ul className="text-sm space-y-1 ml-4">
                  <li>• In-game: Use /report or /staff commands</li>
                  <li>• Discord: Create a support ticket</li>
                  <li>• Email: support@minersonline.uk</li>
                </ul>
              </CardContent>
            </Card>

            <div className="text-center p-6 bg-muted/30 rounded-lg">
              <p className="text-sm text-muted-foreground">
                By playing on Miners Online, you agree to follow these rules. Rules may be updated at any time, and
                players are responsible for staying informed of changes.
              </p>
              <p className="text-xs text-muted-foreground mt-2">Last updated: September 2025</p>
            </div>
          </div>
        </div>
      </main>
      <SiteFooter />
    </div>
  )
}
