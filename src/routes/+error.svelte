<script>
    import { page } from '$app/stores';
    import {
        truncate,
        breakpoints,
        Content,
        Grid,
        Row,
        Column,
        Button,
        Breadcrumb,
        BreadcrumbItem,
    } from "carbon-components-svelte";

</script>

<Content>
    <Grid>
        <Row>
            <Column>
                <Breadcrumb>
                    <BreadcrumbItem href="/">Miners Online</BreadcrumbItem>
                    <BreadcrumbItem href={$page.url.toString()} isCurrentPage>{$page.status}: {$page.error.message}</BreadcrumbItem>
                </Breadcrumb>
                <h1>{$page.status}: {$page.error.message}</h1>
            </Column>
        </Row>
    </Grid>
</Content>
