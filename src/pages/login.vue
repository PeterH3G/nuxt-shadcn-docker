<script setup lang="ts">
definePageMeta({
  name: "Login",
  icon: "mdi:login",
  order: 2,
  slug: "login",
});

const { pending, data: api } = await useLazyAsyncData("login", () =>
  $fetch("/api/pages/login")
);

watch(api, (newApi) => {});

const config = <any>{
  hero: {
    class: "grid grid-rows-[auto_1fr_auto]",
    content: {
      class: "grid grid-rows-[auto_auto] justify-center items-center",
    },
  },
};
</script>

<template>
  <div class="container h-full sm:h-auto">
    <PageHero :api="api?.hero" :class="config.hero.class">
      <CardContent :class="config.hero.content.class">
        <h1 class="text-xl text-center mb-4" v-text="api?.hero.content.title" />
        <PageLoginForm />
      </CardContent>

      <CardFooter class="flex justify-start items-center text-xs">
        footer
      </CardFooter>
    </PageHero>
  </div>
</template>
