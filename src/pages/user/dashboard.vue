<script setup lang="ts">
definePageMeta({
  name: "Dashboard",
  icon: "mdi:view-dashboard",
  middleware: "auth",
  order: 1,
  slug: "dashboard",
});

const { pending, data: api } = await useLazyAsyncData("dashboard", () =>
  $fetch("/api/auth/dashboard")
);

watch(api, (newApi) => {});

const showFooter = ref(false);
</script>

<template>
  <div class="container h-full sm:h-auto">
    <PageHero :api="api?.hero">
      <CardContent>
        <h1 class="text-xl text-center mb-4" v-text="api?.hero.title" />
      </CardContent>

      <CardFooter class="flex justify-start items-center text-xs">
        footer
      </CardFooter>
    </PageHero>
  </div>
</template>
