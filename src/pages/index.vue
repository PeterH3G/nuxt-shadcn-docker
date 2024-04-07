<script setup lang="ts">
definePageMeta({
  name: "Home",
  icon: "mdi:home",
  order: 0,
});

// API SETTINGS
const { data: api } = useFetch("/api/pages/home");
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
