import type { MetaFunction } from "@remix-run/cloudflare";

import { Button } from '@carbon/react';
import { Add } from '@carbon/react/icons';
import React from "react";


export const meta: MetaFunction = () => {
  return [
    { title: "API Tokens | Admin Centre" },
    {
      name: "description",
      content: "Miners Online Admin Centre API Tokens",
    },
  ];
};

export default function API_Tokens() {
  return (
    <>
      <h1>API Tokens</h1>
      <Button>Click me</Button>
      <Add />
    </>
  );
}
