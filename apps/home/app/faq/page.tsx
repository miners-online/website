import { SiteHeader } from "@/components/site-header"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { HelpCircle, Server, Gamepad2, Users, Settings, Shield } from "lucide-react"
import { SiteFooter } from "@/components/site-footer"

export default function FAQPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-200 via-blue-100 to-emerald-200 dark:from-slate-900 dark:via-slate-800 dark:to-emerald-900">
      <SiteHeader />
      <main className="container py-16">
        <div className="mx-auto max-w-4xl">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold tracking-tight mb-4">Frequently Asked Questions</h1>
            <p className="text-lg text-muted-foreground text-pretty">
              Find answers to common questions about Miners Online. Can&lsquo;t find what you&lsquo;re looking for? Contact our
              support team.
            </p>
          </div>

          <div className="grid gap-8">
            {/* Getting Started */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Server className="h-5 w-5 text-primary" />
                  Getting Started
                </CardTitle>
              </CardHeader>
              <CardContent>
                <Accordion type="single" collapsible className="w-full">
                  <AccordionItem value="connect">
                    <AccordionTrigger>How do I connect to the server?</AccordionTrigger>
                    <AccordionContent className="text-sm leading-relaxed">
                      To connect to Miners Online, open your Minecraft Java Edition client and add a new server with the
                      IP address: <code className="bg-muted px-2 py-1 rounded text-xs">play.minersonline.uk</code>. We
                      support Minecraft versions 1.19 and above. Make sure you have a stable internet connection for the
                      best experience.
                    </AccordionContent>
                  </AccordionItem>

                  <AccordionItem value="versions">
                    <AccordionTrigger>What Minecraft versions are supported?</AccordionTrigger>
                    <AccordionContent className="text-sm leading-relaxed">
                      We support Minecraft Java Edition versions 1.19 through 1.21. We recommend using the latest
                      version for the best performance and access to all features. Bedrock Edition is not currently
                      supported.
                    </AccordionContent>
                  </AccordionItem>

                  <AccordionItem value="first-time">
                    <AccordionTrigger>What should I do when I first join?</AccordionTrigger>
                    <AccordionContent className="text-sm leading-relaxed">
                      When you first join, you&lsquo;ll spawn in our welcome area. We highly recommend visiting the tutorial
                      island to learn about our unique features, commands, and game mechanics. Use{" "}
                      <code className="bg-muted px-2 py-1 rounded text-xs">/tutorial</code> to get started. Don&lsquo;t forget
                      to read our rules with <code className="bg-muted px-2 py-1 rounded text-xs">/rules</code>.
                    </AccordionContent>
                  </AccordionItem>

                  <AccordionItem value="requirements">
                    <AccordionTrigger>Are there any special requirements to play?</AccordionTrigger>
                    <AccordionContent className="text-sm leading-relaxed">
                      You only need a legitimate Minecraft Java Edition account and a stable internet connection. No
                      mods or special clients are required. In fact, using hacked clients or cheating software will
                      result in an immediate ban.
                    </AccordionContent>
                  </AccordionItem>
                </Accordion>
              </CardContent>
            </Card>

            {/* Game Modes */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Gamepad2 className="h-5 w-5 text-primary" />
                  Game Modes & Features
                </CardTitle>
              </CardHeader>
              <CardContent>
                <Accordion type="single" collapsible className="w-full">
                  <AccordionItem value="game-modes">
                    <AccordionTrigger>What game modes are available?</AccordionTrigger>
                    <AccordionContent className="text-sm leading-relaxed">
                      We offer several popular minigames including SkyWars, Bed Wars, Build Battles, PvP Arena, and
                      Capture the Flag. Each game mode has unique rules and objectives. Use{" "}
                      <code className="bg-muted px-2 py-1 rounded text-xs">/games</code> to see all available modes and
                      join games.
                    </AccordionContent>
                  </AccordionItem>

                  <AccordionItem value="economy">
                    <AccordionTrigger>How does the server economy work?</AccordionTrigger>
                    <AccordionContent className="text-sm leading-relaxed">
                      You earn coins by participating in games, completing daily challenges, and achieving milestones.
                      Coins can be used to purchase cosmetics, upgrade your gear, and unlock special features. The
                      economy is balanced to reward both skill and participation, so everyone can progress.
                    </AccordionContent>
                  </AccordionItem>

                  <AccordionItem value="ranks">
                    <AccordionTrigger>Are there ranks or VIP features?</AccordionTrigger>
                    <AccordionContent className="text-sm leading-relaxed">
                      We believe in fair play for everyone. There are no paid ranks or VIP features that give gameplay
                      advantages. All players have equal access to game modes and features. You can earn cosmetic
                      rewards and titles through gameplay achievements.
                    </AccordionContent>
                  </AccordionItem>

                  <AccordionItem value="stats">
                    <AccordionTrigger>How can I view my statistics?</AccordionTrigger>
                    <AccordionContent className="text-sm leading-relaxed">
                      Use <code className="bg-muted px-2 py-1 rounded text-xs">/stats</code> to view your personal
                      statistics including wins, losses, kills, and other achievements. You can also view leaderboards
                      with <code className="bg-muted px-2 py-1 rounded text-xs">/leaderboard</code> to see how you rank
                      against other players.
                    </AccordionContent>
                  </AccordionItem>
                </Accordion>
              </CardContent>
            </Card>

            {/* Technical Issues */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Settings className="h-5 w-5 text-primary" />
                  Technical Issues
                </CardTitle>
              </CardHeader>
              <CardContent>
                <Accordion type="single" collapsible className="w-full">
                  <AccordionItem value="lag">
                    <AccordionTrigger>I&lsquo;m experiencing lag. What can I do?</AccordionTrigger>
                    <AccordionContent className="text-sm leading-relaxed">
                      First, check your internet connection and try restarting Minecraft. If the issue persists, try
                      lowering your render distance and graphics settings. You can also use{" "}
                      <code className="bg-muted px-2 py-1 rounded text-xs">/ping</code> to check your connection to our
                      server. If problems continue, contact our support team.
                    </AccordionContent>
                  </AccordionItem>

                  <AccordionItem value="connection">
                    <AccordionTrigger>I can&lsquo;t connect to the server. What&lsquo;s wrong?</AccordionTrigger>
                    <AccordionContent className="text-sm leading-relaxed">
                      Check our server status on the homepage first. If the server is online, verify you&lsquo;re using the
                      correct IP: <code className="bg-muted px-2 py-1 rounded text-xs">play.minersonline.uk</code>.
                      Ensure you&lsquo;re using a supported Minecraft version (1.19+) and that your firewall isn&lsquo;t blocking
                      the connection.
                    </AccordionContent>
                  </AccordionItem>

                  <AccordionItem value="banned">
                    <AccordionTrigger>I think I was banned unfairly. How do I appeal?</AccordionTrigger>
                    <AccordionContent className="text-sm leading-relaxed">
                      You can submit a ban appeal through our Discord server by creating a support ticket. Appeals must
                      be submitted within 30 days of the ban and should include any relevant evidence. Our staff will
                      review your case fairly and respond within 48 hours.
                    </AccordionContent>
                  </AccordionItem>

                  <AccordionItem value="lost-items">
                    <AccordionTrigger>I lost my items due to a bug. Can you help?</AccordionTrigger>
                    <AccordionContent className="text-sm leading-relaxed">
                      If you lost items due to a server bug or glitch, contact our support team immediately with details
                      about what happened. Include the time, game mode, and what items were lost. We keep detailed logs
                      and can often restore lost items if the loss was due to a server issue.
                    </AccordionContent>
                  </AccordionItem>
                </Accordion>
              </CardContent>
            </Card>

            {/* Community */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Users className="h-5 w-5 text-primary" />
                  Community & Rules
                </CardTitle>
              </CardHeader>
              <CardContent>
                <Accordion type="single" collapsible className="w-full">
                  <AccordionItem value="discord">
                    <AccordionTrigger>Do you have a Discord server?</AccordionTrigger>
                    <AccordionContent className="text-sm leading-relaxed">
                      Yes! Join our Discord community to chat with other players, get support, participate in events,
                      and stay updated on server news. Use{" "}
                      <code className="bg-muted px-2 py-1 rounded text-xs">/discord</code> in-game to get the invite
                      link.
                    </AccordionContent>
                  </AccordionItem>

                  <AccordionItem value="report">
                    <AccordionTrigger>How do I report a rule violation or cheater?</AccordionTrigger>
                    <AccordionContent className="text-sm leading-relaxed">
                      Use <code className="bg-muted px-2 py-1 rounded text-xs">/report [player] [reason]</code> to
                      report rule violations in-game. For serious issues or if no staff are online, create a support
                      ticket in our Discord server with evidence (screenshots or video). Our staff take all reports
                      seriously.
                    </AccordionContent>
                  </AccordionItem>

                  <AccordionItem value="staff">
                    <AccordionTrigger>How can I become a staff member?</AccordionTrigger>
                    <AccordionContent className="text-sm leading-relaxed">
                      We occasionally recruit new staff members from our active community. Staff applications are
                      announced on our Discord server and website. We look for mature, helpful players who are active
                      and have a good understanding of our rules and community.
                    </AccordionContent>
                  </AccordionItem>

                  <AccordionItem value="suggestions">
                    <AccordionTrigger>Can I suggest new features or improvements?</AccordionTrigger>
                    <AccordionContent className="text-sm leading-relaxed">
                      We love hearing from our community. Share your suggestions in our Discord server&lsquo;s suggestion
                      channel or participate in our regular feedback surveys. As an open-source project, we also welcome
                      code contributions on our GitHub repository.
                    </AccordionContent>
                  </AccordionItem>
                </Accordion>
              </CardContent>
            </Card>

            {/* Server Information */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Shield className="h-5 w-5 text-primary" />
                  Server Information
                </CardTitle>
              </CardHeader>
              <CardContent>
                <Accordion type="single" collapsible className="w-full">
                  <AccordionItem value="schedule">
                    <AccordionTrigger>What are the server operating hours?</AccordionTrigger>
                    <AccordionContent className="text-sm leading-relaxed">
                      Miners Online is not a 24/7 server. We typically operate during peak hours (evenings and weekends
                      UK time) and during special events. Check our homepage for current server status and follow our
                      Discord for announcements about operating schedules.
                    </AccordionContent>
                  </AccordionItem>

                  <AccordionItem value="location">
                    <AccordionTrigger>Where are the servers located?</AccordionTrigger>
                    <AccordionContent className="text-sm leading-relaxed">
                      Our servers are hosted in the United Kingdom, providing excellent performance for European
                      players. Players from other regions are welcome, but may experience higher latency depending on
                      their location.
                    </AccordionContent>
                  </AccordionItem>

                  <AccordionItem value="open-source">
                    <AccordionTrigger>What does &ldquo;open-source&rdquo; mean for the server?</AccordionTrigger>
                    <AccordionContent className="text-sm leading-relaxed">
                      Being open-source means our server plugins and configurations are publicly available on GitHub.
                      This promotes transparency, allows community contributions, and ensures the server can continue
                      even if the original team changes. You can view our code and contribute improvements!
                    </AccordionContent>
                  </AccordionItem>

                  <AccordionItem value="updates">
                    <AccordionTrigger>How often do you update the server?</AccordionTrigger>
                    <AccordionContent className="text-sm leading-relaxed">
                      We regularly update the server with new features, bug fixes, and improvements based on community
                      feedback. Major updates are announced on our blog and Discord. We also perform maintenance during
                      off-peak hours to minimize disruption.
                    </AccordionContent>
                  </AccordionItem>
                </Accordion>
              </CardContent>
            </Card>

            {/* Still Need Help */}
            <Card className="bg-primary/5 border-primary/20">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <HelpCircle className="h-5 w-5 text-primary" />
                  Still Need Help?
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-sm leading-relaxed">
                  If you couldn&lsquo;t find the answer to your question, don&lsquo;t hesitate to reach out to our support team:
                </p>
                <ul className="text-sm space-y-2">
                  <li className="flex items-center gap-2">
                    <span className="w-2 h-2 bg-primary rounded-full"></span>
                    <strong>In-game:</strong> Use <code className="bg-muted px-2 py-1 rounded text-xs">/help</code> or{" "}
                    <code className="bg-muted px-2 py-1 rounded text-xs">/support</code>
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-2 h-2 bg-primary rounded-full"></span>
                    <strong>Discord:</strong> Create a support ticket in our Discord server
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-2 h-2 bg-primary rounded-full"></span>
                    <strong>Email:</strong> support@minersonline.uk
                  </li>
                </ul>
                <p className="text-xs text-muted-foreground">
                  Our support team typically responds within 24 hours. For urgent issues, Discord is the fastest way to
                  get help.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </main>
      <SiteFooter />
    </div>
  )
}
