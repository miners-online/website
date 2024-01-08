<script lang="ts">
    import * as config from '$lib/config'
    import { theme } from "$lib";
    import "carbon-components-svelte/css/white.css";
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
        RadioButton
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
    let isOpen1 = false;
</script>

<Theme
    persist
    bind:theme="{$theme}"
    on:update="{(e) => {
        const theme = e.detail.theme;
        document.documentElement.style.setProperty("color-scheme", ["white", "g10"].includes(theme) ? "light" : "dark");
    }}"
>
    <Header company="Miners Online" platformName="">
        <svelte:fragment slot="skip-to-content">
            <SkipToContent />
        </svelte:fragment>
        <HeaderUtilities>
            <HeaderSearch
                bind:ref
                bind:active
                bind:value
                bind:selectedResultIndex
                placeholder="Search Miners Online"
                {results}
                on:select={() => {
                    window.location.href = results[selectedResultIndex].href;
                }}
            />
        </HeaderUtilities>
    </Header>

    <!-- <Theme bind:theme/> -->

    <!-- <RadioButtonGroup legendText="Carbon theme" bind:selected={theme}>
        {#each ["g10", "g80", "g90", "g100", "white"] as value}
          <RadioButton labelText={value} {value} />
        {/each}
    </RadioButtonGroup> -->
    <slot/>
</Theme>

<footer>
    <Grid>
        <Row>
        <Column>
            <p>{config.title} &copy 2023 - {new Date().getFullYear()}</p>
        </Column>
        </Row>
    </Grid>
</footer>
