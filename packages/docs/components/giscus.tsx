"use client";

import dynamic from "next/dynamic";

const GiscusProvider = dynamic(() => import("@giscus/react"), { ssr: false });

export default function Giscus() {
  return (
    <GiscusProvider
      repo="miners-online/.github"
      repoId="R_kgDOMm4RAA"
      category="Site discussion"
      categoryId="DIC_kwDOMm4RAM4CjxVW"
      mapping="title"
      strict="1"
      reactionsEnabled="1"
      emitMetadata="0"
      inputPosition="top"
      theme="preferred_color_scheme"
      lang="en"
    />
  );
}
