import React from "react";
import type { MetaFunction } from "@remix-run/cloudflare";
import type { LoaderFunction } from "@remix-run/node";
import { json } from "@remix-run/node";
import {
  useLoaderData
} from "@remix-run/react";

import type { SecureAPIToken } from "~/lib/models";
import { getAPITokensSecure } from "~/lib/models";
import { Button } from "~/components/ui/button";


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
  const results: SecureAPIToken[] = useLoaderData<typeof loader>() as SecureAPIToken[];
  return (
    <>
      <h1>API Tokens</h1>
      {results.map((token) => {
        return (
          <div key={token.id}>
            <h2>{token.clientId}</h2>
            <p>{token.clientId}</p>
            <p>{new Date(token.createdAt).toDateString()}</p>
            <p>{new Date(token.updatedAt).toDateString()}</p>
          </div>
        )
      })}
    </>
  );
}
