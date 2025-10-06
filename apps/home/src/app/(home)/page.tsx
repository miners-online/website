import Link from "next/link";

export default function HomePage() {
  const sellingPoints = [
    {
      title: "Open Source & Transparent",
      body:
        "All server code and configuration are public. Read, learn, and contribute on GitHub. No hidden mechanics.",
    },
    {
      title: "Efficient & Sustainable",
      body:
        "Servers run primarily when players are active, focusing resources on quality—not idle uptime.",
    },
    {
      title: "Personal Community",
      body:
        "A small space where you can actually know other players. Your feedback influences development.",
    },
    {
      title: "Safe & Welcoming",
      body:
        "Focused on respectful interaction. A calm alternative to crowded, anonymous networks.",
    },
    {
      title: "Custom Features (Planned)",
      body:
        "Thoughtful mini-games (like Golf), cosmetic progression, and lightweight stats—built deliberately.",
    },
    {
      title: "Learn & Contribute",
      body:
        "Interested in server or plugin development? Follow along and participate through issues & discussions.",
    },
  ];

  return (
    // ...existing code...
    <div className="flex flex-col gap-24"> 
      {/* Hero */}
      <section className="text-center pt-12 md:pt-20">
        <div className="mx-auto max-w-5xl px-4">
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-6">
            An Open Minecraft Mini-Game Project
          </h1>
          <p className="mx-auto max-w-2xl text-slate-600 dark:text-slate-300 text-lg leading-relaxed">
            Miners Online is an open source Java Edition mini-game server—transparent and community-shaped.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/docs/rules" className="inline-flex justify-center rounded-md bg-emerald-600 text-white px-6 py-3 text-sm font-medium shadow hover:bg-emerald-500 focus:outline-none focus:ring-2 focus:ring-emerald-400">
              Read Rules
            </Link>
            <Link href="/docs/faq" className="inline-flex justify-center rounded-md border border-slate-300 dark:border-slate-700 px-6 py-3 text-sm font-medium hover:bg-slate-100 dark:hover:bg-slate-800 focus:outline-none focus:ring-2 focus:ring-emerald-400">
              FAQ
            </Link>
            <Link href="https://github.com/orgs/miners-online/discussions" className="inline-flex justify-center rounded-md border border-slate-300 dark:border-slate-700 px-6 py-3 text-sm font-medium hover:bg-slate-100 dark:hover:bg-slate-800 focus:outline-none focus:ring-2 focus:ring-emerald-400">
              Discussions
            </Link>
          </div>
          <div className="mt-10 inline-flex flex-col items-center gap-2 text-sm">
            <span className="uppercase tracking-wide text-slate-500 dark:text-slate-400">
              Server Address
            </span>
            <code className="rounded bg-slate-900 text-emerald-300 px-4 py-2 text-base shadow-inner">
              play.minersonline.uk
            </code>
          </div>
        </div>
      </section>

      {/* Why Join */}
      <section className="px-4">
        <div className="mx-auto max-w-5xl">
          <h2 className="text-2xl md:text-3xl font-semibold tracking-tight text-center mb-10">
            Why Join Now?
          </h2>
          <div className="grid gap-8 md:grid-cols-3">
            {[
              { t: "Real Connections", d: "Recognize and remember people. Early members help define culture." },
              { t: "Your Voice Matters", d: "Ideas travel directly into development—not lost in a queue." },
              { t: "Passion Over Profit", d: "Built for learning and craft—not monetization funnels." }
            ].map(item => (
              <div key={item.t} className="rounded-lg border border-slate-200 dark:border-slate-800 bg-white/70 dark:bg-slate-900/60 backdrop-blur p-6">
                <h3 className="font-semibold mb-3">{item.t}</h3>
                <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                  {item.d}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Offering */}
      <section className="px-4">
        <div className="mx-auto max-w-6xl">
          <h2 className="text-2xl md:text-3xl font-semibold tracking-tight text-center mb-12">
            What We Offer (and Plan)
          </h2>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {sellingPoints.map(p => (
              <div key={p.title} className="rounded-lg border border-slate-200 dark:border-slate-800 bg-white/60 dark:bg-slate-900/50 p-5 shadow-sm">
                <h3 className="font-medium mb-2">{p.title}</h3>
                <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">{p.body}</p>
              </div>
            ))}
          </div>
          <p className="text-center text-xs mt-8 text-slate-500 dark:text-slate-500">
            Features evolve based on participation and feedback.
          </p>
        </div>
      </section>

      {/* Status placeholder */}
      <section className="px-4">
        <div className="mx-auto max-w-xl text-center">
          <h2 className="text-2xl md:text-3xl font-semibold mb-4">Server Status</h2>
          <p className="text-slate-600 dark:text-slate-400 mb-6 text-sm leading-relaxed">
            Status integration coming soon: online/offline state and player count.
          </p>
          <div className="inline-flex items-center gap-2 rounded-full border border-slate-300 dark:border-slate-700 px-5 py-2 text-sm">
            <span className="h-2 w-2 rounded-full bg-amber-400 animate-pulse" />
            <span>Checking...</span>
          </div>
        </div>
      </section>

      {/* Join CTA */}
      <section className="px-4 pb-24">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-3xl font-bold tracking-tight mb-6">
            Ready to Get Involved?
          </h2>
          <p className="text-slate-600 dark:text-slate-400 mb-8 leading-relaxed">
            Read the rules, skim the FAQ, or join a discussion thread—early participation helps shape direction.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/docs" className="rounded-md bg-emerald-600 text-white px-6 py-3 text-sm font-medium shadow hover:bg-emerald-500 focus:outline-none focus:ring-2 focus:ring-emerald-400">
              Documentation
            </Link>
            <Link href="/docs/faq" className="rounded-md border border-slate-300 dark:border-slate-700 px-6 py-3 text-sm font-medium hover:bg-slate-100 dark:hover:bg-slate-800 focus:outline-none focus:ring-2 focus:ring-emerald-400">
              FAQ
            </Link>
            <Link href="https://github.com/orgs/miners-online/discussions" className="rounded-md border border-slate-300 dark:border-slate-700 px-6 py-3 text-sm font-medium hover:bg-slate-100 dark:hover:bg-slate-800 focus:outline-none focus:ring-2 focus:ring-emerald-400">
              Discussions
            </Link>
          </div>
        </div>
      </section>
    </div>
    // ...existing code...
  );
}