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
            <BreadcrumbItem href={$page.url.toString()} isCurrentPage>{data.post.title}</BreadcrumbItem>
        </Breadcrumb>
        <h1>{data.post.title}</h1>
    </Column>
</Row>
<Row>
    <Column>
        <div>{@html data.post.content}</div>
    </Column>
</Row>
