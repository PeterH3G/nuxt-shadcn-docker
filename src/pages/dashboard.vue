<script setup lang="ts">
definePageMeta({
  name: "Dashboard",
  middleware: "auth",
  order: 1,
});
</script>

<template>
  <Card class="page container bg-card"> Dashboard </Card>
</template>
