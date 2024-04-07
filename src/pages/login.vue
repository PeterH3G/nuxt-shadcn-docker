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
  <Page>
    <template #card-content>
      <PagePre :data="data" />
    </template>
  </Page>
</template>
