<script setup lang="ts">
definePageMeta({
  name: "Home",
  icon: "mdi:home",
  order: 0,
});

// DATA SETTINGS
const { pending, data } = await useLazyFetch("/api/pages/home");
watch(data, (newData) => {
  // Because posts might start out null, you won't have access
  // to its contents immediately, but you can watch it.
});
</script>

<template>
  <Card class="page container bg-card">
    <pre v-text="data" class="p-4 bg-muted text-muted-foreground rounded-md" />
  </Card>
</template>
