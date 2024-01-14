<script>
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
            <BreadcrumbItem href="/articles" isCurrentPage>Articles</BreadcrumbItem>
        </Breadcrumb>
    </Column>
</Row>
<Row>
    <Column>
        <h1>Articles</h1>

        <ul>
            {#each data.posts as post}
                <li>
                    <h2>
                        <a href={post.path}>
                            {post.meta.title}
                        </a>
                    </h2>
                    Published: {new Date(post.meta.date).toDateString()}
                </li>
            {/each}
        </ul>
    </Column>
</Row>