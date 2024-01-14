<script lang="ts">
    import * as config from '$lib/config'
    import { theme } from "../store";
    import "carbon-components-svelte/css/all.css";
    import {
        Header,
        HeaderUtilities,
        HeaderSearch,
        SkipToContent,
        Grid,
        Row,
        Column,
        Theme,
        Content,
        SideNav,
        SideNavItems,
        SideNavLink
    } from "carbon-components-svelte";

    const data = [
        {
            href: "/a",
            text: "Ka",
            description: "page a",
        },
        {
            href: "/b",
            text: "Kb",
            description: "page b",
        },
    ];

    // @ts-ignore TODO: fix typing in Svelte
    let ref = null;
    let active = false;
    let value = "";
    let selectedResultIndex = 0;

    $: lowerCaseValue = value.toLowerCase();
    $: results =
        value.length > 0
        ? data.filter((item) => {
            return (
                item.text.toLowerCase().includes(lowerCaseValue) ||
                item.description.includes(lowerCaseValue)
            );
            })
        : [];

    let isSideNavOpen = false;
</script>

<Header
    company="{config.title}"
    platformName=""
    bind:isSideNavOpen
    persistentHamburgerMenu={true}
>
    <svelte:fragment slot="skip-to-content">
        <SkipToContent />
    </svelte:fragment>
    <HeaderUtilities>
        <HeaderSearch
            bind:ref
            bind:active
            bind:value
            bind:selectedResultIndex
            placeholder="Search {config.title}"
            {results}
            on:select={() => {
                window.location.href = results[selectedResultIndex].href;
            }}
        />
    </HeaderUtilities>
</Header>

<SideNav bind:isOpen={isSideNavOpen}>
    <SideNavItems>
        <SideNavLink text="Home" href="/"/>
        <SideNavLink text="Articles" href="/articles"/>
    </SideNavItems>
</SideNav>

<Content style="height:100%; padding: 0;">
    <Grid fullWidth id="main">
        <slot/>
        <Row id="spacer-row"/>
        <Row id="footer"> <!-- <the footer> -->
            <Column>
                <p>{config.title} &copy 2023 - {new Date().getFullYear()}</p>
            </Column>
            <Column>
                <Theme
                    persist
                    bind:theme="{$theme}"
                    render="toggle"
                    toggle={{
                        themes: ["white", "g80"],
                        labelA: "Enable dark mode",
                        labelB: "Enable dark mode",
                        hideLabel: true,
                        size: "sm",
                    }}
                    on:update="{(e) => {
                        const eTheme = e.detail.theme;
                        document.documentElement.style.setProperty("color-scheme", ["white", "g80"].includes(eTheme) ? "light" : "dark");
                    }}"
                />
            </Column>
        </Row> <!-- </the footer> -->
    </Grid>

    <style>
        #main {
            height: 100%;
            display: flex;
            flex-direction: column;
        }

        #spacer-row {
            flex: 1;
        }

        #footer {
            margin-top: 48px;
            flex: 0;
            bottom: 0;
        }
    </style>
</Content>
