<script lang="ts">
    import * as config from '$lib/config'
    import { theme } from "../store";
    import "carbon-components-svelte/css/all.css";
    import {
        Header,
        HeaderUtilities,
        HeaderAction,
        HeaderSearch,
        HeaderPanelLinks,
        HeaderPanelDivider,
        HeaderPanelLink,
        SkipToContent,
        Grid,
        Row,
        Column,
        Theme,
        RadioButtonGroup,
        RadioButton,
        Content
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

    let ref: any = null;
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
</script>

<Header company="{config.title}" platformName="">
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

<Content style="height:100%">
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
                        themes: ["g10", "g80"],
                        labelA: "Enable dark mode",
                        labelB: "Enable dark mode",
                        hideLabel: true,
                        size: "sm",
                    }}
                    on:update="{(e) => {
                        const eTheme = e.detail.theme;
                        document.documentElement.style.setProperty("color-scheme", ["white", "g10"].includes(eTheme) ? "light" : "dark");
                        theme.set(eTheme)
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
            /* margin-top: auto; */
            /* flex: 0; */
        }
    </style>
</Content>
