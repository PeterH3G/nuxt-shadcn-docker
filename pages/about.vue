<script setup lang="ts">
definePageMeta({
  title: "About",
  description: "About PeterH3G",
  icon: "mdi:comment-person",
  order: 1,
});

const { data, error, pending } = await useFetch("/api/pages", {
  pick: ["about"],
  server: false,
});
</script>

<template>
  <div class="container">
    <PageHero :data="data"> about </PageHero>
  </div>
</template>
