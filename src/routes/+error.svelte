<script>
    import { page } from '$app/stores';
    import {
        Row,
        Column,
        Breadcrumb,
        BreadcrumbItem,
    } from "carbon-components-svelte";

</script>

<Row>
    <Column>
        <Breadcrumb>
            <BreadcrumbItem href="/">Miners Online</BreadcrumbItem>
            <BreadcrumbItem href={$page.url.toString()} isCurrentPage>{$page.status}: {$page.error?.message}</BreadcrumbItem>
        </Breadcrumb>
        <h1>{$page.status}: {$page.error?.message}</h1>
    </Column>
</Row>
