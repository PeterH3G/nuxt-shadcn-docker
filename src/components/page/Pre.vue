<script setup lang="ts">
defineProps<{
    data?: any;
}>()
</script>

<template>
  <pre class="page">
    {{ data ? data  : 'No Data' }}
  </pre>
</template>

<style scoped>
pre.page {
  @apply p-4;
  @apply bg-muted text-muted-foreground rounded-md;
}
</style>