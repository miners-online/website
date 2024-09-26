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

import type { DisplayableAPIToken } from "~/lib/models";
import { getAPITokensSecure } from "~/lib/models";
import { DataTable } from "~/components/tables/data-table";
import { columns } from "~/components/tables/tokens-columns";
import { BaseLayout } from "~/layouts/base-layout";
import { BreadcrumbItem } from "~/components/nav/header";

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
  return json(results);
};

export default function API_Tokens() {
  const results: DisplayableAPIToken[] = useLoaderData<typeof loader>() as DisplayableAPIToken[];
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
            data={results}
            filterKey="name"
            filterDisplay="names"
            toolbarExtra={
              <CreateTokenDiaglog/>
            }
          />
        </CardContent>
      </Card>
    </BaseLayout>
  );
}

export function CreateTokenDiaglog() {
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
            Blah
          </DialogDescription>
        </DialogHeader>
      </DialogContent>
    </Dialog>
  )
}
