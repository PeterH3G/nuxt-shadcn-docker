<script setup lang="ts">
import { Icon } from "@iconify/vue";

definePageMeta({
  name: "Dashboard",
  icon: "mdi:view-dashboard",
  middleware: "auth",
  order: 1,
  slug: 'dashboard',
});

const { pending, data: api } = await useLazyAsyncData("dashboard", () =>
  $fetch("/api/auth/dashboard")
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
