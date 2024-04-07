<script setup lang="ts">
definePageMeta({
  name: "About",
  icon: "mdi:account-details",
  order: 1,
});

// API SETTINGS
const { data: api } = useFetch("/api/pages/about");
</script>

<template>
  <Page>
    <template #content-prepend>
      <h1 v-text="api?.content.title" />
    </template>
    <template #content-append>
      <PagePre :data="api" />
    </template>
  </Page>
</template>

