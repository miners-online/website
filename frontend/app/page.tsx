import Hero from "@/components/hero"
import ServerStatus from "@/components/server-status"
import { globals } from "../lib/globals"
import { Faq } from "@/components/faq"
import { faq_items } from "@/lib/faq"

export const runtime = 'edge';

export default function Home() {
  return (
    <main className="container mx-auto px-4 py-8">
      <Hero
        heading = "Welcome to Miners Online"
        buttons = {{
          secondary: {
            text: "View on GitHub",
            url: "https://github.com/miners-online",
          },
        }}
        description={globals.siteDescription}
        right={<ServerStatus/>}
      />
      <Faq
        items={faq_items}
      />
    </main>
  )
}

