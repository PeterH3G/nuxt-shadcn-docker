<script setup lang="ts">
definePageMeta({
  name: "Login",
  icon: "mdi:login",
  order: 2,
});

// DATA SETTINGS
const { pending, data } = await useLazyFetch("/api/pages/login");
watch(data, (newData) => {
  // Because posts might start out null, you won't have access
  // to its contents immediately, but you can watch it.
});
</script>

<template>
  <Card class="page container bg-card">
    <pre v-text="data" class="api-box" />

    <AppFormLogin class="app-login" />
  </Card>
</template>

<style scoped>
.api-box {
  @apply p-4 bg-muted text-muted-foreground rounded-md;
}
.app-login {
  @apply mt-6 mx-4;
  @apply grid grid-rows-1 grid-cols-2 gap-4;
}
</style>
