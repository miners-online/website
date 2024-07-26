<template>
    <LayoutHeader />
    <div class="container px-4 md:px-8 py-6">
        <Card title="Test">
            AAAAAA
        </Card>
    </div>
    <LayoutFooter />
</template>
  
<script setup lang="ts">
    import Card from 'shadcn-docs-nuxt/components/content/Card.vue';

    const config = useConfig();
    
    useSeoMeta({
        title: `Downloads - ${config.value.site.name}`,
        ogTitle: "Downloads",
        description: "Use our download centre to download our things.",
    });
</script>