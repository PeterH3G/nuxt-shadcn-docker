<script setup lang="ts">
import { Icon } from '@iconify/vue'

definePageMeta({
  name: 'Login',
  description: 'User Login',
  icon: 'mdi:login',
  layout: 'default',
  order: 2,
})
</script>

<template>
  <Card>
    <CardHeader>
      <CardTitle>
        <Label class="inline-flex items-center font-bold">
          <Icon :icon="`${$route.meta.icon}`" />
          {{ $route.meta.name }}
        </Label>
      </CardTitle>
    </CardHeader>

    <CardContent>
      User Login
    </CardContent>
  </Card>
</template>
