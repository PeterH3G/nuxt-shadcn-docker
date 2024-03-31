<script setup lang="ts">
definePageMeta({
  title: "Home",
  description: "Hello Universe!",
  icon: "home",
  order: 0,
});

const card = {
  showDescription: true,
  showFooter: false,
};
</script>

<template>
  <Card class="px-0">
    <CardHeader class="p-2">
      <CardTitle>{{ $route.meta.title }}</CardTitle>
      <CardDescription v-if="card.showDescription">{{
        $route.meta.description
      }}</CardDescription>
    </CardHeader>

    <CardContent class="p-2">
      <slot />
      test
    </CardContent>

    <CardFooter v-if="card.showFooter"> Card footer </CardFooter>
  </Card>
</template>
