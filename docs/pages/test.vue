<template>
    <div class="px-4 py-6 md:px-8">
        <ProseH1>Test</ProseH1>
        <Calculator/>
    </div>
    <AppsPopover/>
</template>
  
<script setup lang="ts">
    const { page } = useContent();
    const config = useConfig();
  
    useSeoMeta({
        title: `Test - ${config.value.site.name}`,
        ogTitle: page.value?.title,
        description: page.value?.description,
        ogDescription: page.value?.description,
        ogImage: config.value.site.ogImage,
        twitterCard: 'summary_large_image',
    });
</script>