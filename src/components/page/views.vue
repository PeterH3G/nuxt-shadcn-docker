<script setup lang="ts">
import { Icon } from '@iconify/vue'

const iconViews = 'mdi:eye'

const { data } = await useFetch('/api/pageview')
</script>

<template>
  <div id="app-views" class="grid grid-cols-[auto_1fr] gap-2 items-center">
    <Icon :icon="iconViews" />
    <slot />
    {{ data?.pageview }}
  </div>
</template>

<style>
#app-views {
  @apply border p-2 rounded-md;
}
</style>
