<script setup lang="ts">
definePageMeta({
  name: "Login",
  icon: "mdi:login",
  order: 2,
});

// API SETTINGS
const { data: api } = useFetch("/api/pages/login");
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
