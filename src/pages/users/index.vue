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
  <Card class="container page">
    <CardHeader>
      <CardTitle>
        <Label class="inline-flex items-center font-bold">
          <Icon icon="mdi:api" />
          JSONPlaceholders Users
        </Label>
      </CardTitle>
    </CardHeader>
    <CardContent>
      <PageTableUsers />
    </CardContent>
  </Card>
</template>