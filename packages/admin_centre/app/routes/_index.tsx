import type { MetaFunction } from "@remix-run/cloudflare";

// import type { LoaderFunction } from "@remix-run/cloudflare";
// import { json } from "@remix-run/cloudflare";
// import { useLoaderData } from "@remix-run/react";

import { Button } from '@carbon/react';
import { Add } from '@carbon/react/icons';


export const meta: MetaFunction = () => {
  return [
    { title: "New Remix App" },
    {
      name: "description",
      content: "Welcome to Remix on Cloudflare!",
    },
  ];
};

// export const loader: LoaderFunction = async ({ context, params }) => {
//   const { env, cf, ctx } = context.cloudflare;
//   let { results } = await env.DB.prepare(
//     "SELECT * FROM tokens"
//   ).bind().all();
//   return json(results);
// };

export default function Index() {
  // const results = useLoaderData<typeof loader>();
  return (
    <>
      <Button>Click me</Button>
      <Add />
    </>
  );
}
