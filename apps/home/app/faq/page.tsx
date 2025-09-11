import { SiteHeader } from "@/components/site-header"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { HelpCircle, Server, Gamepad2, Users, Settings, Shield } from "lucide-react"
import { SiteFooter } from "@/components/site-footer"
import Link from "next/link"

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
                      support Minecraft versions 1.8 and above. Make sure you have a stable internet connection for the
                      best experience.
                    </AccordionContent>
                  </AccordionItem>

                  <AccordionItem value="versions">
                    <AccordionTrigger>What Minecraft versions are supported?</AccordionTrigger>
                    <AccordionContent className="text-sm leading-relaxed">
                      We support Minecraft Java Edition versions 1.8 through 1.21.8. We recommend using the latest
                      version for the best performance and access to all features. Bedrock Edition is not currently
                      supported.
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
                    <AccordionTrigger>What game modes are planned?</AccordionTrigger>
                    <AccordionContent className="text-sm leading-relaxed">
                      We&lsquo;re actively developing several unique game modes including Golf (our signature minigame),
                      creative building challenges, and puzzle-based adventures. These are designed for smaller groups
                      and focus on creativity and skill rather than requiring large player counts. Check our blog and
                      for development updates and beta testing opportunities.
                    </AccordionContent>
                  </AccordionItem>

                  <AccordionItem value="economy">
                    <AccordionTrigger>Will there be an economy system?</AccordionTrigger>
                    <AccordionContent className="text-sm leading-relaxed">
                      Yes! We&lsquo;re developing a coin-based economy system where players can earn coins through gameplay
                      achievements and participation. The economy will focus on cosmetic rewards, fun unlockables, tools,
                      and equipment. This system is currently in development and will be introduced as
                      game modes become available.
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
                    <AccordionTrigger>How will statistics work?</AccordionTrigger>
                    <AccordionContent className="text-sm leading-relaxed">
                      We&lsquo;re planning a comprehensive statistics system that will track your achievements, best scores,
                      and progress across different game modes. This will include personal leaderboards and achievement
                      tracking. The statistics system is being developed alongside the game modes and will launch when
                      the first games become available.
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
                      server.

                      If lag continues, it may be due to high server load during peak times. We recommend playing during
                      off-peak hours for a smoother experience. 

                      The issue is likely with your internet connection - contact your Internet Service Provider (ISP) for
                      assistance with connection problems.

                      If you suspect the issue is on our end, please report it in our in our <Link href="support.minersonline.uk">dedicated support platform</Link>
                    </AccordionContent>
                  </AccordionItem>

                  <AccordionItem value="connection">
                    <AccordionTrigger>I can&lsquo;t connect to the server. What&lsquo;s wrong?</AccordionTrigger>
                    <AccordionContent className="text-sm leading-relaxed">
                      Check our server status on the homepage first. If the server is online, verify you&lsquo;re using the
                      correct IP: <code className="bg-muted px-2 py-1 rounded text-xs">play.minersonline.uk</code>.
                      Ensure you&lsquo;re using a supported Minecraft version (1.8+) and that your firewall isn&lsquo;t blocking
                      the connection.

                      If you still can&lsquo;t connect, the issue is likely:
                      <ol>
                        <li>
                          with your internet connection - contact your Internet Service Provider (ISP) for assistance
                          with connection problems.
                        </li>
                        <li>
                          our country restrictions banning your IP address. Use a VPN to connect from a different location.
                        </li>
                      </ol>
                    </AccordionContent>
                  </AccordionItem>

                  <AccordionItem value="banned">
                    <AccordionTrigger>I think I was banned unfairly. How do I appeal?</AccordionTrigger>
                    <AccordionContent className="text-sm leading-relaxed">
                      You can submit a ban appeal through our <Link href="support.minersonline.uk">dedicated support platform</Link>.
                      Appeals must be submitted within 30 days of the ban and should include any relevant evidence.
                      Our staff will review your case fairly and respond within 48 hours.
                    </AccordionContent>
                  </AccordionItem>

                  <AccordionItem value="lost-items">
                    <AccordionTrigger>I lost my items during a game. Can you help?</AccordionTrigger>
                    <AccordionContent className="text-sm leading-relaxed">
                      Items and inventory in our minigames are designed to be temporary and don&lsquo;t persist between game
                      sessions. This is normal behavior for minigame servers - each game starts fresh with balanced
                      equipment. If you&lsquo;re experiencing technical issues during a game (like disconnections), try
                      rejoining or contact support if the problem continues affecting your gameplay experience.
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
                      While we don&lsquo;t use Discord for official support, you can get help through our
                      <Link href="support.minersonline.uk">dedicated support platform</Link>.
                      For community discussions and updates, check our website and in-game announcements.
                    </AccordionContent>
                  </AccordionItem>

                  <AccordionItem value="report">
                    <AccordionTrigger>How do I report a rule violation or cheater?</AccordionTrigger>
                    <AccordionContent className="text-sm leading-relaxed">
                      Use <code className="bg-muted px-2 py-1 rounded text-xs">/report [player] [reason]</code> to
                      report rule violations in-game. For serious issues or if no staff are online, submit a report
                      through our <Link href="support.minersonline.uk">dedicated support platform</Link>
                      with evidence (screenshots or video). Our staff take all reports seriously.
                    </AccordionContent>
                  </AccordionItem>

                  <AccordionItem value="staff">
                    <AccordionTrigger>How can I become a staff member?</AccordionTrigger>
                    <AccordionContent className="text-sm leading-relaxed">
                      We occasionally recruit new staff members from our active community. Staff applications are
                      announced on our server and website. We look for mature, helpful players who are active
                      and have a good understanding of our rules and community.
                    </AccordionContent>
                  </AccordionItem>

                  <AccordionItem value="suggestions">
                    <AccordionTrigger>Can I suggest new features or improvements?</AccordionTrigger>
                    <AccordionContent className="text-sm leading-relaxed">
                      We love hearing from our community. Share your suggestions in our
                      <Link href="https://github.com/orgs/miners-online/discussions/categories/ideas">ideas suggestion
                      channel</Link> or participate in our regular feedback surveys. As an open-source project, we also welcome
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
                      website announcements for operating schedules.
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
                    <strong>Support:</strong> Create a support ticket in our <Link href="support.minersonline.uk">dedicated support platform</Link>
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-2 h-2 bg-primary rounded-full"></span>
                    <strong>Email:</strong> support@minersonline.uk
                  </li>
                </ul>
                <p className="text-xs text-muted-foreground">
                  Our support team typically responds within 24 hours. For urgent issues, use our support platform for
                  the fastest response.
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
