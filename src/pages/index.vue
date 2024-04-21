<script setup lang="ts">
definePageMeta({
  name: 'Home',
  icon: 'mdi:home',
  description: 'Page',
  order: 0,
  layout: 'home',
})
</script>

<template>
  <Card class="container card">
    <PageInputEntry />
  </Card>
</template>