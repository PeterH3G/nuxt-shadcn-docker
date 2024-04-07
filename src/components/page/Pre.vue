<script setup lang="ts">
const props = defineProps<{
    data?: any;
}>()

const pre = reactive({
  data: props.data ? props.data : 'No data',
});
</script>

<template>
  <pre v-text="pre" />
</template>

<style scoped>
pre {
  @apply text-green-500 text-xs;
  @apply p-4;
}
</style>