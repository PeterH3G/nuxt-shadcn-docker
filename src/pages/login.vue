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
  <PageHero :api="api">
    <div class="grid grid-cols-1 justify-center items-start">
      <h1 v-text="api?.content.title" />
      <span v-text="api?.content.description" />
    </div>
  </PageHero>
</template>
