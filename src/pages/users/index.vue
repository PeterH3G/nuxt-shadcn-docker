<script setup lang="ts">
import { Icon } from '@iconify/vue'

definePageMeta({
  name: 'Users',
  icon: 'mdi:account-multiple',
  description: 'JSON Placeholder',
  layout: 'default',
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
      users content
    </CardContent>
  </Card>
</template>
