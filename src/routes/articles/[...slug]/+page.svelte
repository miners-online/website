<script lang="ts">
    import { page } from '$app/stores';
    import {
        Row,
        Column,
        Breadcrumb,
        BreadcrumbItem,
    } from "carbon-components-svelte";

	export let data;
</script>

<Row>
    <Column>
        <Breadcrumb>
            <BreadcrumbItem href="/">Miners Online</BreadcrumbItem>
            <BreadcrumbItem href="/articles">Articles</BreadcrumbItem>
            <BreadcrumbItem href={$page.url.toString()} isCurrentPage>{data.post.title}</BreadcrumbItem>
        </Breadcrumb>
        <h1>{data.post.title}</h1>
        <p>Published: {new Date(data.post.date).toDateString()}</p>
    </Column>
</Row>
<Row>
    <Column>
        <div>{@html data.post.content}</div>
    </Column>
</Row>
