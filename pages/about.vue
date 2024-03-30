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
}
</script>

<template>
  <Card class="m-0 mx-auto" :class="cn(`w-[800px]`, $attrs.class ?? '')">
    <CardHeader>
      <CardTitle>{{ $route.meta.title }}</CardTitle>
      <CardDescription v-if="card.showDescription">Description here</CardDescription>
    </CardHeader>

    <CardContent>
      <slot />
    </CardContent>

    <CardFooter v-if="card.showFooter"> Card footer </CardFooter>
  </Card>
</template>
