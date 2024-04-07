<script setup lang="ts">
import { Icon } from "@iconify/vue";

definePageMeta({
  name: "Login",
  icon: "mdi:login",
  order: 2,
  slug: "login",
});

const { pending, data: api } = await useLazyAsyncData("login", () =>
  $fetch("/api/pages/login")
);

watch(api, (newApi) => {
  // Might start out null, no access immediately,
  // but you can watch it.
});

const showFooter = ref(true);
</script>

<template>
  <Card class="page">
    <CardHeader class="page-header">
      <CardTitle class="page-title">
        <Icon :icon="`${$route.meta.icon}`" />
        <span v-text="`${$route.meta.name}`" />
      </CardTitle>

      <CardDescription class="page-description">
        <span v-text="api?.content.description" />
        <Icon :icon="`${api?.content.descriptionIcon}`" />
      </CardDescription>
    </CardHeader>

    <CardContent class="page-content">
      <div class="hero">
        <h1 v-text="api?.content.title" />
        <span v-text="api?.content.description" />
      </div>
    </CardContent>

    <CardFooter class="page-footer">
      <span v-if="showFooter">Card Footer</span>
    </CardFooter>
  </Card>
</template>

<style scoped>
.page-content {
  @apply grid grid-cols-1;
  @apply justify-center items-start;
}
.hero {
  @apply bg-muted p-2 sm:p-4;
}
</style>
