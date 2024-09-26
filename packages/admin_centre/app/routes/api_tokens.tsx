import React from "react";
import type { MetaFunction } from "@remix-run/cloudflare";
import type { LoaderFunction } from "@remix-run/node";
import { json } from "@remix-run/node";
import {
  useLoaderData
} from "@remix-run/react";

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "~/components/ui/card"

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "~/components/ui/dialog"

import { Button } from "~/components/ui/button";
import { Option } from "~/components/ui/multi-select"
import { getAPITokensSecure } from "~/lib/models";
import { DataTable } from "~/components/tables/data-table";
import { columns } from "~/components/tables/tokens-columns";
import { BaseLayout } from "~/layouts/base-layout";
import { BreadcrumbItem } from "~/components/nav/header";
import { CreateTokenForm } from "~/components/forms/create-token-form"
import { getGames } from "~/lib/models";

export const meta: MetaFunction = () => {
  return [
    { title: "API Tokens | Admin Centre" },
    {
      name: "description",
      content: "Miners Online Admin Centre API Tokens",
    },
  ];
};

const breadcrumbs: BreadcrumbItem[] = [
  {
    label: "Home",
    to: "/"
  },
  {
    label: "API Tokens",
    to: "/api_tokens"
  }
]

export const loader: LoaderFunction = async () => {
  let results = await getAPITokensSecure();
  const games = await getGames();
  const options = games.map((item) => ({
    label: item.name,
    value: item.id,
  }));
  return json({ gameOptions: options, tokens: results });
};

export default function API_Tokens() {
  const { gameOptions, tokens } = useLoaderData<typeof loader>();
  return (
    <BaseLayout breadcrumbs={breadcrumbs}>
      <Card>
        <CardHeader>
          <CardTitle>API Tokens</CardTitle>
          <CardDescription>
            Manage and create your API Tokens.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <DataTable
            columns={columns}
            data={tokens}
            filterKey="name"
            filterDisplay="names"
            toolbarExtra={
              <CreateTokenDialog gameOptions={gameOptions}/>
            }
          />
        </CardContent>
      </Card>
    </BaseLayout>
  );
}

export function CreateTokenDialog({ gameOptions }: { gameOptions: Option[] }) {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button className="mr-4">
          Create new token
        </Button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Create new token</DialogTitle>
          <DialogDescription>
            <CreateTokenForm gameOptions={gameOptions}/>
          </DialogDescription>
        </DialogHeader>
      </DialogContent>
    </Dialog>
  )
}
