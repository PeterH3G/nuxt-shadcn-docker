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

watch(api, (newApi) => {
  // Might start out null, no access immediately,
  // but you can watch it.
});

const showFooter = ref(true);
</script>

<template>
  <PageHero :api="api?.hero">
    <div class="grid grid-cols-1 justify-center items-start">
      <h1 v-text="api?.hero.title" />
      <span v-text="api?.hero.description" />
      <PageLoginForm />
    </div>
  </PageHero>
</template>
