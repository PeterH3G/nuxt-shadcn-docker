<script setup lang="ts">
definePageMeta({
  name: "Home",
  icon: "mdi:home",
  order: 0,
  slug: "home",
});

const { pending, data: api } = await useLazyAsyncData("home", () =>
  $fetch("/api/pages/home")
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
