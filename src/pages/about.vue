<script setup lang="ts">
definePageMeta({
  name: "About",
  icon: "mdi:account-details",
  order: 1,
  slug: "about",
});

const { pending, data: api } = await useLazyAsyncData("about", () =>
  $fetch("/api/pages/about")
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
