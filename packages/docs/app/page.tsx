import CardGrid from "@/components/card-grid";
import { Typography } from "@/components/typography";
import Link from "next/link";


const projects = [
  {
    id: 1,
    title: "Miners Online Wiki",
    content: <p>A collaborative wiki for tutorials, FAQs, and documentation. <i>(this very website you&rsquo;re on!)</i></p>
  },
  {
    id: 2,
    title: "Miners Online Minecraft Server",
    content:
    <>
      <p>An open-source Minestom-powered Minecraft: Java Edition server in development.</p>
      <p>Join using the address: <code>minersonline.uk</code></p>
    </>,
    footer: <Link href="/docs/minecraft-server/v0.1.0">Read more</Link>,
  },
  {
    id: 3,
    title: "Net Bits",
    content:
    <>
      <p>Net Bits is a Python package that simplifies data conversion into structured network packets and includes utilities for easy packet processing.</p>
      <p>Install with: <code>pip install netbits</code></p>
    </>,
    footer: <Link href="https://netbits.minersonline.uk/en/latest/">Read the docs</Link>,
  },
]

export default function Home() {
  return (
    <>
      <div className="flex sm:min-h-[41vh] min-h-[38vh] flex-col items-center justify-center text-center px-2 py-8">
        <h1 className="text-3xl font-bold mb-4 sm:text-7xl">
          Miners Online
        </h1>
        <p className="mb-8 sm:text-xl max-w-[800px] text-muted-foreground">
          Welcome to Miners Online, where creators from all disciplines unite to share knowledge and collaborate.
          Our projects range from a collaborative wiki to a Minestom-powered Minecraft server, fostering innovation and community spirit.
        </p>
      </div>
      <div className="flex flex-col px-2 pb-8">
        <Typography>
          <h2>What&rsquo;s Miners Online</h2>
          <p>Miners Online is a collaborative, open-source platform that brings together enthusiasts to create, contribute, and innovate.</p>
          <p>Based in the United Kingdom, Miners Online is a place where community-driven development flourishes.</p>

          <h2>Platform Overview</h2>
          <p>Miners Online supports community-driven projects using modern frameworks to encourage creativity and innovation.</p>
          <p>Whether you&rsquo;re an experienced developer or just starting, we welcome your contributions.</p>

          <h2>Projects</h2>
          <CardGrid cards={projects} columns={2} gap={4} />
        </Typography>
      </div>
    </>
  );
}
