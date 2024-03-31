<script setup lang="ts">
definePageMeta({
  title: "Home",
  description: "Hello Universe!",
  icon: "mdi:home",
  order: 0,
});

const card = {
  showDescription: true,
  showFooter: false,
};
</script>

<template>
  <Card>
    <CardHeader>
      <CardTitle>{{ $route.meta.title }}</CardTitle>
      <CardDescription v-if="card.showDescription">{{
        $route.meta.description
      }}</CardDescription>
    </CardHeader>

    <CardContent>
      <slot />
      test
    </CardContent>

    <CardFooter v-if="card.showFooter"> Card footer </CardFooter>
  </Card>
</template>
