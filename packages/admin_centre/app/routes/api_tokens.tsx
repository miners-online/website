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
          <DataTable columns={columns} data={results} filterKey="name" filterDisplay="names"/>
        </CardContent>
      </Card>
    </BaseLayout>
  );
}
