import { FaqItem } from "@/components/faq";
import { globals } from "./globals";
import ModpackSection from "@/components/modpack-section";
import { ServerScheduleCard } from "@/components/server-schedule-card";
import Link from "next/link";

const serverSchedule = [
  { day: "Monday", active: true, startTime: "9:00 AM", endTime: "8:30 PM" },
  { day: "Tuesday", active: true, startTime: "9:00 AM", endTime: "8:30 PM" },
  { day: "Wednesday", active: true, startTime: "9:00 AM", endTime: "8:30 PM" },
  { day: "Thursday", active: true, startTime: "9:00 AM", endTime: "8:30 PM" },
  { day: "Friday", active: true, startTime: "9:00 AM", endTime: "8:30 PM" },
  { day: "Saturday", active: true, startTime: "12:00 PM", endTime: "8:30 PM" },
  { day: "Sunday", active: true, startTime: "12:00 PM", endTime: "8:30 PM" },
]

export const faq_items: FaqItem[] = [
  {
    question: "How do I join the server?",
    answer: "To join the server, you need to install our custom mod pack. You can download it from our website. Once you have the mod pack installed, you can connect to the server using the IP address 'minersonline.uk' (without quotes).",
  },
  {
    question: "Does Miners Online have a mod pack?",
    answer: <>
      Yes, we have a custom mod pack that includes performance optimizations, quality of life improvements, custom textures and sounds, and additional building blocks.
      <ModpackSection
        modrinthUrl={globals.modPack.modrinthUrl}
        mrpackUrl={globals.modPack.mrpackUrl}
      />
    </>,
  },
  {
    question: "Is Miners Online 24/7?",
    answer: <>
      No, Miners Online is not a 24/7 server. We have scheduled operating hours to ensure a healthy electricity consumption.
      <ServerScheduleCard
        serverName={`${globals.siteName} Schedule`}
        description="Weekly operating hours"
        schedule={serverSchedule}
        timezone="the UK"
        className="mt-12"
      />
    </>
  },
  {
    question: "Does Miners Online have rules?",
    answer: <>
      Yes, Miners Online has rules to ensure a safe and enjoyable experience for all players.
      You can view the rules on <Link href="/rules" className="text-blue-500">the rules page</Link>.,
    </>
  },
  {
    question: "Can I donate to Miners Online?",
    answer: "No, Miners Online does not accept donations. We are a non-profit community server and do not accept any form of payment. We appreciate your support and participation in the community.",
  },
  {
    question: "Is Miners Online affiliated with Mojang or Microsoft?",
    answer: "No, Miners Online is not an official Minecraft service and is not approved by or associated with Mojang or Microsoft.",
  },
  {
    question: "Is Miners Online open source?",
    answer: "Yes, Miners Online has open source parts. You can view most source code on GitHub.",
  },
  {
    question: "How can I report a bug or suggest a feature?",
    answer: "You can report a bug or suggest a feature by creating an issue on our GitHub repository. Please provide as much detail as possible so that we can address your issue or feature request.",
  },
  {
    question: "Can I contribute to Miners Online?",
    answer: "Yes, you can contribute to Miners Online by submitting a pull request on GitHub. We welcome contributions from the community and appreciate any help to improve the server.",
  },
  {
    question: "How can I contact Miners Online?",
    answer: "You can contact Miners Online on GitHub.",
  },
];
