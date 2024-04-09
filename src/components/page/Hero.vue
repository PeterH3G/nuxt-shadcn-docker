<script setup lang="ts">
import { Icon } from "@iconify/vue";

const props = defineProps<{
  api?: any;
}>();
</script>

<template>
  <Card>
    <CardHeader class="grid grid-cols-2 items-center">
      <CardTitle
        class="inline-flex justify-start items-center text-sm sm:text-xl"
      >
        <Icon :icon="`${$route.meta.icon}`" />
        <span v-text="`${$route.meta.name}`" />
      </CardTitle>

      <CardDescription class="inline-flex justify-end items-center text-xs">
        <span v-text="props.api?.description" />
        <Icon :icon="`${props.api?.descriptionIcon}`" />
      </CardDescription>
    </CardHeader>

    <slot />
  </Card>
</template>
