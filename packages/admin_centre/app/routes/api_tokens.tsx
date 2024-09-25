import React from "react";
import type { MetaFunction } from "@remix-run/cloudflare";
import type { LoaderFunction } from "@remix-run/node";
import { json } from "@remix-run/node";
import {
  useLoaderData
} from "@remix-run/react";

import type { DisplayableAPIToken } from "~/lib/models";
import { getAPITokensSecure } from "~/lib/models";
import { DataTable } from "~/components/data-table";
import { columns } from "~/components/tokens-columns";

export const meta: MetaFunction = () => {
  return [
    { title: "API Tokens | Admin Centre" },
    {
      name: "description",
      content: "Miners Online Admin Centre API Tokens",
    },
  ];
};

export const loader: LoaderFunction = async () => {
  let results = await getAPITokensSecure();
  return json(results);
};

export default function API_Tokens() {
  const results: DisplayableAPIToken[] = useLoaderData<typeof loader>() as DisplayableAPIToken[];
  return (
    <>
      <h1>API Tokens</h1>
      <div className="container mx-auto py-10">
      <DataTable columns={columns} data={results} filterKey="name" filterDisplay="names"/>
    </div>
    </>
  );
}
