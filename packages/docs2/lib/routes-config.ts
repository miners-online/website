// for page navigation & to sort on leftbar


export type EachRoute = {
  title: string;
  href: string;
  noLink?: true;
  items?: EachRoute[];
};

const minecraft_server_V0_1_0_ROUTES: EachRoute[] = [
  {
    title: "Introduction",
    href: "/",
  },
  {
    title: "Games",
    href: "/games",
    noLink: true,
    items: [
      { title: "Lobby", href: "/lobby" },
    ],
  },
];

type Page = { title: string; href: string };

function getRecurrsiveAllLinks(node: EachRoute) {
  const ans: Page[] = [];
  if (!node.noLink) {
    ans.push({ title: node.title, href: node.href });
  }
  node.items?.forEach((subNode) => {
    const temp = { ...subNode, href: `${node.href}${subNode.href}` };
    ans.push(...getRecurrsiveAllLinks(temp));
  });
  return ans;
}

export function getRoutesFlatten(v: Version) {
  const routes = getRoutesForVersion(v);
  return routes.map((it) => getRecurrsiveAllLinks(it)).flat();
}

export function getRoutesForVersion(v: Version) {
  // Add accordingly
  switch (v) {
    case "minecraft-server/v0.1.0":
      return minecraft_server_V0_1_0_ROUTES;
  }
}

export function getPreviousNext(path: string, v: Version) {
  path = path.split("/").slice(1).join("/");
  const routes = getRoutesFlatten(v);
  const index = routes.findIndex(({ href }) => href == `/${path}`);
  return {
    prev: routes[index - 1],
    next: routes[index + 1],
  };
}



export const availableVersions = ["minecraft-server/v0.1.0"] as const;
export type Version = (typeof availableVersions)[number];
