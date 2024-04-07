<script setup lang="ts">
definePageMeta({
  name: "Dashboard",
  icon: "mdi:view-dashboard",
  middleware: "auth",
  order: 1,
});

// DATA SETTINGS
const { pending, data } = await useLazyFetch("/api/pages/dashboard");
watch(data, (newData) => {
  // Because posts might start out null, you won't have access
  // to its contents immediately, but you can watch it.
});
</script>

<template>
  <Page>
    <template #card-content>
      <PagePre :data="data" />
    </template>
  </Page>
</template>
