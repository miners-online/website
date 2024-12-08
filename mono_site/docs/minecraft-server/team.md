---
layout: page
title: The team
---

<script setup>
import {
  VPTeamPage,
  VPTeamPageTitle,
  VPTeamMembers
} from "vitepress/theme"

const members = [
    {
        avatar: "https://avatars.githubusercontent.com/u/41990982?v=4",
        name: "Samuel Hulme",
        title: "Creator",
        links: [
            { icon: "github", link: "https://github.com/ajh123" },
            { icon: "youtube", link: "https://www.youtube.com/channel/UC5ZPyhfbqKT96EmYzANku7Q" },
            { icon: "linkedin", link: "https://www.linkedin.com/in/samuel-hulme-423210254" }
        ]
    },
]
</script>

<VPTeamPage>
    <VPTeamPageTitle>
        <template #title>
            Our Team
        </template>
        <template #lead>
            The development of Miners Online is guided by an small
            team, some of whom have chosen to be featured below.
        </template>
    </VPTeamPageTitle>
    <VPTeamMembers
        :members="members"
    />
</VPTeamPage>