<script setup lang="ts">
import { cn } from "@/lib/utils";

definePageMeta({
  title: "About",
  icon: "$about",
  order: 1,
});

const card = {
  showDescription: true,
  showFooter: false,
};
</script>

<template>
  <Card :class="cn('container mx-auto')">
    <CardHeader>
      <CardTitle>{{ $route.meta.title }}</CardTitle>
      <CardDescription v-if="card.showDescription"
        >Description here</CardDescription
      >
    </CardHeader>

    <CardContent>
      <slot />
    </CardContent>

    <CardFooter v-if="card.showFooter"> Card footer </CardFooter>
  </Card>
</template>
