<script setup lang="ts">
definePageMeta({
  name: "Dashboard",
  icon: 'mdi:view-dashboard',
  middleware: "auth",
  order: 1,
});
</script>

<template>
  <Card class="page container bg-card"> Dashboard </Card>
</template>
