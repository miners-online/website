import { Faq, FaqItem } from "@/components/faq"

export const runtime = 'edge';

const rules: FaqItem[] = [
  {
    question: "Respect other players",
    answer: "Harassment, hate speech, and bullying are strictly prohibited. Treat all players with respect. Violations may result in warnings, fines, or bans.",
  },
  {
    question: "No griefing",
    answer: "Destroying or modifying other players’ builds without permission is not allowed. Offenders may receive fines, temporary building restrictions, or bans.",
  },
  {
    question: "No cheating or exploits",
    answer: "Using hacks, X-ray, auto-clickers, macros, or any form of game exploit is strictly prohibited. Punishments include fines, stat resets, or bans.",
  },
  {
    question: "No spamming or advertising",
    answer: "Spamming chat or advertising other servers, products, or services is not allowed. Offenders may be fined or muted.",
  },
  {
    question: "No inappropriate content",
    answer: "Inappropriate builds, skins, usernames, and messages are not allowed. This includes NSFW content, hate symbols, or offensive material. Offenders may face fines, removal of content, or bans.",
  },
  {
    question: "No sharing personal information",
    answer: "Doxxing or sharing personal information about yourself or others is strictly forbidden. This will result in an immediate ban.",
  },
  {
    question: "No impersonation",
    answer: "Pretending to be another player, staff member, or a public figure is not allowed. Punishments may include warnings, fines, or bans.",
  },
  {
    question: "Allowed modifications",
    answer: "Mods, texture packs, and shaders are allowed **only** if they do not provide an unfair advantage. The official mod pack is permitted. Unapproved modifications may lead to fines or bans.",
  },
  {
    question: "No targeting or cross-teaming (Minigames)",
    answer: "In team-based minigames, teaming with players outside of your assigned team is prohibited. Repeated targeting of specific players is also not allowed. Violators may receive fines, stat resets, or bans.",
  },
  {
    question: "No game-ruining behaviour (Minigames)",
    answer: "Deliberately ruining the game experience (e.g., trolling teammates, feeding opponents, or AFKing in competitive matches) is not allowed. Offenders may receive fines or temporary game restrictions.",
  },
  {
    question: "No boosting or match-fixing (Minigames)",
    answer: "Intentionally manipulating game outcomes (e.g., letting another player win for rewards, win-trading, or match-fixing) is not allowed. Punishments include fines, stat resets, or bans.",
  },
  {
    question: "No exploiting map glitches (Minigames)",
    answer: "Using unintended map glitches (e.g., hiding in out-of-bounds areas or bypassing game mechanics) to gain an unfair advantage is not allowed. Violators may be fined or have rewards removed.",
  },
  {
    question: "No stat padding or farming (Minigames)",
    answer: "Artificially increasing your stats or farming XP/coins using exploits, alternate accounts, or repetitive actions is not allowed. Penalties include fines, stat resets, or bans.",
  },
  {
    question: "Use common sense",
    answer: "If something seems unfair, inappropriate, or disruptive, don’t do it. Server staff have final discretion on rule enforcement.",
  },
  {
    question: "Enforcement policy",
    answer: "Punishments may include warnings, fines (deductions of in-game currency or assets), stat resets, temporary restrictions, or permanent bans, depending on severity and frequency.",
  },
];

export default function Home() {
  return (
    <main className="container mx-auto px-4 py-8">
      <Faq
        heading="Server Rules"
        items={rules}
      />
    </main>
  )
}
