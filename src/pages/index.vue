<script setup lang="ts">
definePageMeta({
  name: "Home",
  order: 0,
});

const routes = useNuxtApp().$sortedRoutes;
</script>

<template>
  <Card class="page container bg-card">
    {{ routes }}
    </Card>
</template>
