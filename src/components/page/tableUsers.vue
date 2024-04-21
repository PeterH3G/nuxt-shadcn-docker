<script setup lang="ts">
import { Icon } from '@iconify/vue'

const { data: users, error, pending } = await useFetch('/api/users', {

  server: true,
})

if (error.value) {
  // show error message
}

const headers = computed(() => {
  return [
    { label: 'id', icon: 'mdi:database', class: '' },
    { label: 'name', icon: 'mdi:account-circle', class: '' },
    { label: 'username', icon: 'mdi:account-circle-outline', class: '' },
    { label: 'email', icon: 'mdi:email', class: '' },
    { label: 'phone', icon: 'mdi:phone', class: '' },
    { label: 'website', icon: 'mdi:earth', class: '' },
  ]
})
</script>

<template>
  <div v-if="pending">
    Loading data...
  </div>

  <Table v-else-if="users">
    <TableHeader>
      <TableRow>
        <TableHead v-for="(header, i) in headers" :key="i" :class="header.class">
          <Label class="inline-flex items-center">
            <Icon :icon="`${header.icon}`" />{{ header.label }}
          </Label>
        </TableHead>
      </TableRow>
    </TableHeader>
    <TableBody>
      <TableRow v-for="user in users" :key="user.id">
        <TableCell v-for="header in headers" :key="header.label">
          <span class="inline-flex justify-start items-center">
            <Icon :icon="`${header.icon}`" />
            {{ user[header.label] }}
          </span>
        </TableCell>
      </TableRow>
    </TableBody>
  </Table>

  <div v-else>
    No data found
  </div>
</template>

<style scoped>
th {
  @apply bg-primary text-primary-foreground;
}
label,
span {
  @apply grid grid-cols-[auto_1fr] gap-2;
}
</style>