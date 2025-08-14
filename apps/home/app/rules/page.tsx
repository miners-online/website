import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Alert, AlertDescription } from "@/components/ui/alert"
import { Separator } from "@/components/ui/separator"
import {
  Shield,
  Users,
  Hammer,
  MessageSquare,
  Swords,
  AlertTriangle,
  Gamepad2,
} from "lucide-react"
import Link from "next/link"

import Navbar from "@/components/navbar"
import Footer from "@/components/footer"

export default function RulesPage() {
  const rules = [
    {
      icon: Shield,
      title: "General Conduct",
      description: "Behavior expectations in lobbies and future minigames",
      rules: [
        "Treat all players with respect regardless of skill level or rank",
        "No harassment, toxicity, or unsportsmanlike conduct",
        "Keep chat appropriate for all ages - minimal profanity allowed",
        "No doxxing or sharing personal information of other players",
        "Respect staff decisions and follow their instructions promptly",
        "English is the primary language in main chat channels",
      ],
    },
    {
      icon: MessageSquare,
      title: "Chat and Communication",
      description: "Guidelines for lobby chat and future game communication",
      rules: [
        "No spam, excessive caps, or chat flooding",
        "No advertising other servers, Discord servers, or external services",
        "No begging for ranks, coins, or special treatment",
        "No impersonating staff members, YouTubers, or other players",
        "Use party chat for private conversations during games",
        "Report inappropriate messages instead of arguing in chat",
      ],
    },
    {
      icon: Swords,
      title: "Competitive Integrity",
      description: "Fair play standards for all current and future minigames",
      rules: [
        "No hacked clients, cheats, or unfair advantage modifications",
        "No teaming in solo games (when implemented)",
        "No cross-teaming in team-based games",
        "No intentionally losing games to manipulate stats or matchmaking",
        "No exploiting game bugs or map glitches for advantages",
        "Only authorised mods / mod packs in designated modded games are allowed",
      ],
    },
    {
      icon: Users,
      title: "Party and Team Play",
      description: "Guidelines for playing with friends and in teams",
      rules: [
        "No toxic behavior toward teammates, even if they're performing poorly",
        "Communicate constructively and help newer players learn",
        "No griefing teammates in team-based games",
        "Party leaders are responsible for their members' behavior",
        "No stream sniping or targeting specific players/streamers",
        "Respect party invitations - don't spam invites if declined",
      ],
    },
    {
      icon: Gamepad2,
      title: "Lobby and Waiting Areas",
      description: "Behavior standards in lobbies and pre-game areas",
      rules: [
        "No excessive parkour camping or blocking other players",
        "Keep lobby games and activities fun for everyone",
        "No inappropriate builds in lobby areas",
        "Don't spam game join attempts or lobby NPCs",
        "Respect personal space and don't follow players persistently",
        "No lag machines or redstone contraptions in lobby areas",
      ],
    },
    {
      icon: Hammer,
      title: "Stats and Rankings",
      description: "Guidelines for competitive statistics and leaderboards",
      rules: [
        "No stat padding through illegitimate means",
        "No account sharing to boost statistics or rankings",
        "No creating alternate accounts to manipulate matchmaking",
        "Report suspected stat manipulation or boosting",
        "Accept wins and losses gracefully - no rage quitting penalties",
        "Leaderboard positions are earned through fair play only",
      ],
    },
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-emerald-900">
      {/* Header */}
      <Navbar/>

      {/* Hero Section */}
      <section className="py-16 px-4">
        <div className="container mx-auto text-center">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Server{" "}
              <span className="bg-gradient-to-r from-emerald-400 to-blue-400 bg-clip-text text-transparent">Rules</span>
            </h1>
            <p className="text-xl text-slate-300 mb-8 max-w-2xl mx-auto">
              Guidelines to ensure a fun, fair, and respectful environment for all players in our community.
            </p>
          </div>
        </div>
      </section>

      {/* Alpha Notice */}
      <section className="py-8 px-4">
        <div className="container mx-auto max-w-4xl">
          <Alert className="bg-amber-900/20 border-amber-500/50">
            <AlertTriangle className="h-4 w-4 text-amber-400" />
            <AlertDescription className="text-amber-100">
              <strong className="text-amber-400">Alpha Notice:</strong> These rules may be updated as the server
              develops. Major changes will be announced in our{" "}
              <Link
                href="https://github.com/orgs/miners-online/discussions"
                className="underline hover:text-amber-300"
                target="_blank"
                rel="noopener noreferrer"
              >
                GitHub Discussions
              </Link>
              .
            </AlertDescription>
          </Alert>
        </div>
      </section>

      {/* Rules Sections */}
      <section className="py-16 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="grid gap-8">
            {rules.map((section, index) => (
              <Card key={index} className="bg-slate-800/50 border-slate-700">
                <CardHeader>
                  <CardTitle className="text-white flex items-center text-2xl">
                    <section.icon className="h-6 w-6 mr-3 text-emerald-400" />
                    {section.title}
                  </CardTitle>
                  <CardDescription className="text-slate-300 text-base">{section.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3">
                    {section.rules.map((rule, ruleIndex) => (
                      <li key={ruleIndex} className="flex items-start">
                        <div className="w-2 h-2 bg-emerald-400 rounded-full mt-2 mr-3 flex-shrink-0" />
                        <span className="text-slate-200">{rule}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Enforcement Section */}
      <section className="py-16 px-4">
        <div className="container mx-auto max-w-4xl">
          <Card className="bg-slate-800/50 border-slate-700">
            <CardHeader>
              <CardTitle className="text-white text-2xl flex items-center">
                <Shield className="h-6 w-6 mr-3 text-red-400" />
                Rule Enforcement
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h3 className="text-white font-semibold mb-3">Violation Consequences</h3>
                  <ul className="space-y-2 text-slate-300">
                    <li>
                      • <strong>Chat violations:</strong> Mute (1 hour - permanent)
                    </li>
                    <li>
                      • <strong>Minor cheating:</strong> 7-day ban + stat reset
                    </li>
                    <li>
                      • <strong>Major cheating:</strong> 30-day ban + full account reset
                    </li>
                    <li>
                      • <strong>Severe violations:</strong> Permanent ban from all games
                    </li>
                    <li>
                      • <strong>Repeated offenses:</strong> Escalating penalties
                    </li>
                  </ul>
                </div>
                {/* <div>
                  <h3 className="text-white font-semibold mb-3">Appeals Process</h3>
                  <ul className="space-y-2 text-slate-300">
                    <li>• Appeals can be made via GitHub Discussions</li>
                    <li>• Provide your username and ban reason</li>
                    <li>• Be honest and respectful in your appeal</li>
                    <li>• Staff will review within 48 hours</li>
                  </ul>
                </div> */}
              </div>
              <Separator className="bg-slate-600" />
              <div className="text-center">
                <p className="text-slate-300 mb-4">Questions about the rules? {/*Need to report a violation?*/}</p>
                <Button asChild>
                  <Link
                    href="https://github.com/orgs/miners-online/discussions"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <MessageSquare className="h-4 w-4 mr-2" />
                    Contact Staff
                  </Link>
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Footer */}
      <Footer/>
    </div>
  )
}
