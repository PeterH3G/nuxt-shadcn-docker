<script setup lang="ts">
import { Icon } from "@iconify/vue";

const props = defineProps<{
  api?: any;
}>();

const showFooter = ref(true);
</script>

<template>
  <Card class="flex flex-col">
    <CardHeader class="grid grid-cols-2 items-center">
      <CardTitle class="inline-flex justify-start items-center">
        <Icon :icon="`${$route.meta.icon}`" />
        <span v-text="`${$route.meta.name}`" />
      </CardTitle>

      <CardDescription class="inline-flex justify-end items-center text-xs">
        <span v-text="props.api?.description" />
        <Icon :icon="`${props.api?.descriptionIcon}`" />
      </CardDescription>
    </CardHeader>

    <CardContent class="flex flex-col h-full justify-start items-center">
      <slot />
    </CardContent>

    <CardFooter class="flex justify-center items-center">
      <span v-if="showFooter">Card Footer</span>
    </CardFooter>
  </Card>
</template>
