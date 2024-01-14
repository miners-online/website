<script lang="ts">
    import { page } from '$app/stores';
    import {
        Row,
        Column,
        Breadcrumb,
        BreadcrumbItem,
    } from "carbon-components-svelte";

	export let data;

    let title = data.title;
    let date = data.date;
    let content = data.content;
</script>

<Row>
    <Column>
        <Breadcrumb>
            <BreadcrumbItem href="/">Miners Online</BreadcrumbItem>
            <BreadcrumbItem href="/articles">Articles</BreadcrumbItem>
            <BreadcrumbItem href={$page.url.toString()} isCurrentPage>{title}</BreadcrumbItem>
        </Breadcrumb>
        <h1>{title}</h1>
        <p>Published: {new Date(date).toDateString()}</p>
    </Column>
</Row>
<Row>
    <Column>
        <div>{@html content}</div>
    </Column>
</Row>
