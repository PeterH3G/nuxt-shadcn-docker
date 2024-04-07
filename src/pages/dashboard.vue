<script setup lang="ts">
definePageMeta({
  name: "Dashboard",
  icon: "mdi:view-dashboard",
  middleware: "auth",
  order: 1,
});

// API SETTINGS
const { data: api } = useFetch("/api/auth/dashboard");
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
