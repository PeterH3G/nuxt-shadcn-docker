<script setup lang="ts">
import { Icon } from "@iconify/vue";

definePageMeta({
  name: "About",
  icon: "mdi:account-details",
  order: 1,
  slug: 'about',
});

const { pending, data: api } = await useLazyAsyncData("about", () =>
  $fetch("/api/pages/about")
);

watch(api, (newApi) => {
  // Might start out null, no access immediately,
  // but you can watch it.
});
</script>

<template>
  <Page>
    <template #page-title>
      <Icon :icon="`${$route.meta.icon}`" />
      <span v-text="`${$route.meta.name}`" />
    </template>
    <template #page-description>
      <span v-text="api?.content.description" />
      <Icon :icon="`${api?.content.descriptionIcon}`" />
    </template>

    <template #content-prepend>
      <h1 v-text="api?.content.title" />
      <span v-text="api?.content.description" />
    </template>
    <template #content-append> <PagePre :data="api" /></template>
  </Page>
</template>
