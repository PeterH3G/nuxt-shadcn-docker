<script setup lang="ts">
import { cn } from "@/lib/utils";

definePageMeta({
  title: "About",
  description: "About PeterH3G",
  icon: "comment-person",
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
      <CardDescription v-if="card.showDescription">{{
        $route.meta.description
      }}</CardDescription>
    </CardHeader>

    <CardContent>
      <slot />
    </CardContent>

    <CardFooter v-if="card.showFooter"> Card footer </CardFooter>
  </Card>
</template>
