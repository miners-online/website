import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Alert, AlertDescription } from "@/components/ui/alert"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import {
  HelpCircle,
  Server,
  Users,
  Code,
  Clock,
  Gamepad2,
  Github,
  MessageCircle,
} from "lucide-react"
import Link from "next/link"

import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import { globals } from "@/lib/globals"

export default function FaqPage() {
  const faqSections = [
    {
      icon: Server,
      title: "Server Basics",
      questions: [
        {
          question: "What is the server IP address?",
          answer: `The server IP is ${globals.serverIP}. You can connect using this address in your Minecraft client.`,
        },
        {
          question: "What Minecraft version does the server support?",
          answer:
            "We support Minecraft Java Edition 1.7.2 through the latest version and the latest Bedrock Edition. We recommend newer versions for the best experience, but we maintain compatibility with older versions for accessibility.",
        },
        {
          question: "Is the server always online?",
          answer:
            "No, during the alpha phase, the server is not available 24/7. We're working towards consistent uptime as we develop our minigames and infrastructure.",
        },
        {
          question: "How is this different from other minigame servers?",
          answer:
            "Miners Online is completely open-source! You can view all our code, contribute features, and help shape the server's development. We're building a transparent, community-driven alternative to traditional minigame networks.",
        },
      ],
    },
    {
      icon: Gamepad2,
      title: "Minigames & Features",
      questions: [
        {
          question: "What minigames are planned?",
          answer:
            "We're planning classic games like Bed Wars and more! Our roadmap is available on GitHub where you can vote on which games to prioritize.",
        },
        {
          question: "When will minigames be available?",
          answer:
            "We don't have specific dates, but we're actively developing core games. Follow our GitHub repositories to see real-time progress on each minigame's development.",
        },
        {
          question: "Will there be ranked/competitive modes?",
          answer:
            "Yes! We plan to have both casual and ranked versions of popular games, with ELO-based matchmaking and seasonal leaderboards. The ranking system will be fully transparent and open-source.",
        },
        {
          question: "What can I do while minigames are in development?",
          answer:
            "Currently, you can explore the lobby, test basic features, and participate in our community discussions. We occasionally run beta tests for games under development.",
        },
      ],
    },
    {
      icon: Code,
      title: "Open Source & Development",
      questions: [
        {
          question: "How can I contribute to minigame development?",
          answer:
            "Check our GitHub organization for open issues, suggest new features, help with testing, or submit code contributions. We welcome developers of all skill levels!",
        },
        {
          question: "Can I see the source code for the minigames?",
          answer:
            "Absolutely! All our minigame plugins, server configurations, and even this website are open-source. Visit github.com/miners-online to explore everything.",
        },
        {
          question: "Will the anti-cheat be open source too?",
          answer:
            "The anti-cheat detection logic will remain private for security reasons, but our ban appeals process, punishment guidelines, and cheat detection statistics will be transparent.",
        },
        {
          question: "How do you prevent cheating with open-source code?",
          answer:
            "Open source doesn't mean vulnerable! We use server-side validation, encrypted communications, and community oversight. Many eyes make bugs (and exploits) shallow.",
        },
      ],
    },
    {
      icon: Users,
      title: "Community & Stats",
      questions: [
        {
          question: "Will there be player statistics and leaderboards?",
          answer:
            "Yes! We'll have detailed stats for each minigame, global leaderboards, and personal progress tracking. All stat calculations will be open-source for full transparency.",
        },
        // {
        //   question: "How do I report cheaters or rule violations?",
        //   answer:
        //     "Use our GitHub Discussions to report players with evidence (screenshots/videos). Our open reporting system ensures transparency in moderation decisions.",
        // },
        {
          question: "Will there be parties and friend systems?",
          answer:
            "Party systems and friend lists are high priority features! You'll be able to play with friends across all minigames once they're implemented.",
        },
        // {
        //   question: "Are there plans for guilds or teams?",
        //   answer:
        //     "Guild systems are planned for the future! We want to build strong community features that encourage teamwork and friendly competition.",
        // },
      ],
    },
    {
      icon: Clock,
      title: "Alpha Status & Future",
      questions: [
        {
          question: "What does 'alpha' mean for a minigame server?",
          answer:
            "Alpha means core minigames aren't ready yet. We're building the foundation: lobbies, player systems, anti-cheat, and basic infrastructure before launching games.",
        },
        {
          question: "Will my stats be reset when you exit alpha?",
          answer:
            "There may be stat resets during major alpha updates, but we'll announce these well in advance. Final release stats will be permanent.",
        },
        {
          question: "How will you compete with established servers like Hypixel?",
          answer:
            "We're not trying to replace existing servers, but offer an alternative focused on transparency, community input, and open development. Players who value these principles will find a home here.",
        },
        {
          question: "Will the server be free to play?",
          answer:
            "Yes! The core server will always be free. We may offer cosmetic ranks or items to support development, but gameplay advantages will never be sold.",
        },
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
              Frequently Asked{" "}
              <span className="bg-gradient-to-r from-emerald-400 to-blue-400 bg-clip-text text-transparent">
                Questions
              </span>
            </h1>
            <p className="text-xl text-slate-300 mb-8 max-w-2xl mx-auto">
              Find answers to common questions about Miners Online, our open-source Minecraft server.
            </p>
          </div>
        </div>
      </section>

      {/* Quick Help Alert */}
      <section className="py-8 px-4">
        <div className="container mx-auto max-w-4xl">
          <Alert className="bg-emerald-900/20 border-emerald-500/50">
            <HelpCircle className="h-4 w-4 text-emerald-400" />
            <AlertDescription className="text-emerald-100">
              <strong className="text-emerald-400">Need immediate help?</strong> Join our{" "}
              <Link
                href="https://github.com/orgs/miners-online/discussions"
                className="underline hover:text-emerald-300"
                target="_blank"
                rel="noopener noreferrer"
              >
                GitHub Discussions
              </Link>{" "}
              where community members and staff can assist you directly.
            </AlertDescription>
          </Alert>
        </div>
      </section>

      {/* FAQ Sections */}
      <section className="py-16 px-4">
        <div className="container mx-auto max-w-4xl">
          <div className="space-y-8">
            {faqSections.map((section, sectionIndex) => (
              <Card key={sectionIndex} className="bg-slate-800/50 border-slate-700">
                <CardHeader>
                  <CardTitle className="text-white flex items-center text-2xl">
                    <section.icon className="h-6 w-6 mr-3 text-emerald-400" />
                    {section.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <Accordion type="single" collapsible className="w-full">
                    {section.questions.map((faq, faqIndex) => (
                      <AccordionItem key={faqIndex} value={`${sectionIndex}-${faqIndex}`} className="border-slate-600">
                        <AccordionTrigger className="text-left text-slate-200 hover:text-white">
                          {faq.question}
                        </AccordionTrigger>
                        <AccordionContent className="text-slate-300 leading-relaxed">{faq.answer}</AccordionContent>
                      </AccordionItem>
                    ))}
                  </Accordion>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Still Have Questions Section */}
      <section className="py-16 px-4">
        <div className="container mx-auto max-w-4xl">
          <Card className="bg-slate-800/50 border-slate-700">
            <CardHeader className="text-center">
              <CardTitle className="text-white text-2xl flex items-center justify-center">
                <MessageCircle className="h-6 w-6 mr-3 text-emerald-400" />
                Still Have Questions?
              </CardTitle>
              <CardDescription className="text-slate-300 text-lg">
                Our community is here to help! Don&lsquo;t hesitate to reach out.
              </CardDescription>
            </CardHeader>
            <CardContent className="text-center space-y-4">
              <div className="grid md:grid-cols-2 gap-4">
                <Button asChild className="w-full">
                  <Link
                    href="https://github.com/orgs/miners-online/discussions"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <MessageCircle className="h-4 w-4 mr-2" />
                    Ask in Discussions
                  </Link>
                </Button>
                <Button variant="outline" asChild className="w-full">
                  <Link href="https://github.com/miners-online" target="_blank" rel="noopener noreferrer">
                    <Github className="h-4 w-4 mr-2" />
                    Browse GitHub
                  </Link>
                </Button>
              </div>
              <p className="text-slate-400 text-sm">
                Response times are typically within 24 hours. Community members often help faster!
              </p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Footer */}
      <Footer/>
    </div>
  )
}
