import type { MetaFunction } from "@remix-run/cloudflare";

import { Button } from "~/components/ui/button"
import { ModeToggle } from "~/components/mode-toggle"

export const meta: MetaFunction = () => {
  return [
    { title: "Home | Admin Centre" },
    {
      name: "description",
      content: "Miners Online Admin Centre Home",
    },
  ];
};

export default function Home() {
  return (
    <>
      <ModeToggle/>
      <h1>Home</h1>
      <Button>Click me</Button>
    </>
  );
}
