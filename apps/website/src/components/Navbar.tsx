"use client"

import { Avatar, Header } from "@primer/react";

export default function Navbar() {
    return (
        <Header>
        <Header.Item>
            <Header.Link
                href="/"
                sx={{fontSize: 2}}
            >
                <img src="/favicon.svg" height={20} style={{marginRight:5}}/>
                <span>Miners Online</span>
            </Header.Link>
        </Header.Item>
        <Header.Item>
            <Header.Link
                href="/wiki"
                sx={{fontSize: 2, fontWeight:"normal"}}
            >
                Wiki
            </Header.Link>
        </Header.Item>
        <Header.Item full>
            <Header.Link
                href="/blog"
                sx={{fontSize: 2, fontWeight:"normal"}}
            >
                Blog
            </Header.Link>
        </Header.Item>
        {/* <Header.Item
          sx={{
            mr: 0,
          }}
        >
          <Avatar
            src="https://github.com/octocat.png"
            size={20}
            square
            alt="@octocat"
          />
        </Header.Item> */}
      </Header>
    )
}