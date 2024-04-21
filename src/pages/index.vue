<script setup lang="ts">
import { Icon } from '@iconify/vue'

definePageMeta({
  name: 'Home',
  icon: 'mdi:home',
  description: 'Page',
  layout: 'home',
  order: 0,
})
</script>

<template>
  <Card class="container">
    <CardHeader>
      <CardTitle>
        <Label class="inline-flex items-center font-bold">
          <Icon :icon="`${$route.meta.icon}`" />
          {{ $route.meta.name }}
        </Label>
      </CardTitle>
    </CardHeader>

    <CardContent>
      <PageInputEntry />
    </CardContent>
  </Card>
</template>
