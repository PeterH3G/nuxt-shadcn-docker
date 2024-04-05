<script setup lang="ts">
import { Icon } from "@iconify/vue";

defineProps<{
  data?: any;
}>();

const card = {
  showDescription: true,
  showFooter: true,
};
</script>

<template>
  <Card id="hero" class="min-h-full grid grid-rows-[auto_1fr_auto]">
    <CardHeader class="container">
      <CardTitle class="flex justify-between items-center">
        <div class="prepend flex justify-start items-center">
          <Icon :icon="`${$route.meta.icon}`" />
          <span v-text="$route.meta.slug" />
        </div>
        <div class="append flex justify-end items-center"></div>
      </CardTitle>
      <CardDescription
        v-text="card.showDescription ? $route.meta.description : ''"
      />
    </CardHeader>

    <CardContent class="container h-full"><slot /> </CardContent>

    <CardFooter v-if="card.showFooter" class="container">
      Card footer
    </CardFooter>
  </Card>
</template>

<style scoped>
#hero {
  @apply py-2 md:py-4;
}
#hero .container {
  @apply bg-card;
}
</style>
