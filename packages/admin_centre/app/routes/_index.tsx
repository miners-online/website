import type { MetaFunction } from "@remix-run/cloudflare";

import { Button } from "~/components/ui/button"
import { BaseLayout } from "~/layouts/base-layout";
import { BreadcrumbItem } from "~/components/nav/header";

export const meta: MetaFunction = () => {
  return [
    { title: "Home | Admin Centre" },
    {
      name: "description",
      content: "Miners Online Admin Centre Home",
    },
  ];
};

const breadcrumbs: BreadcrumbItem[] = [
  {
    label: "Home",
    to: "/"
  }
]

export default function Home() {
  return (
    <BaseLayout breadcrumbs={breadcrumbs}>
      <h1>Home</h1>
      <Button>Click me</Button>
    </BaseLayout>
  );
}
