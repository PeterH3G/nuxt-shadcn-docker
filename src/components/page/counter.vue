<script setup lang="ts">
import { Icon } from '@iconify/vue'

const { count, inc, dec } = useCount()
</script>

<template>
  <div class="flex flex-col items-center">
    <Label class="inline-flex justify-center items-center text-xl mb-4">
      <Icon icon="mdi:plus-minus" />
      Counter
    </Label>

    <div class="content flex">
      <Button class="inline-flex uppercase text-xs" variant="ghost" @click="dec()">
        <Icon icon="mdi:minus" />
        Decrease
      </Button>
      <div class="flex mx-6 justify-center text-3xl">
        {{ count }}
      </div>
      <Button class="flex uppercase text-xs" variant="ghost" @click="inc()">
        <Icon icon="mdi:plus" />
        Increase
      </Button>
    </div>
  </div>
</template>