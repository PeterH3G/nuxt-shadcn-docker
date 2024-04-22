<script setup lang="ts">
import { Icon } from '@iconify/vue'

definePageMeta({
  name: 'About',
  description: 'Something about...',
  icon: 'mdi:account-details',
  layout: 'default',
  order: 1,
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
      About content
    </CardContent>
  </Card>
</template>
