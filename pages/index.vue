<script setup lang="ts">
definePageMeta({
  title: "Home",
  description: "Hello Universe!",
  icon: "mdi:home",
  order: 0,
});

const { data, error, pending } = await useFetch("/api/pages", {
  pick: ["home"],
  server: false,
});
</script>

<template>
  <div class="container">
    <PageHero :data="data"> index </PageHero>
  </div>
</template>
