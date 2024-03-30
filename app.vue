<script setup lang="ts">
const brand = useAppConfig().brand;
</script>

<template>
  <NuxtLayout>
    <NuxtPage />
  </NuxtLayout>
</template>

<style>
$transition: all 0.4s;

html,
body,
#__nuxt {
  width: 100%;
  height: 100%;
}

.layout-enter-active,
.layout-leave-active {
  transition: $transition;
}

.layout-enter-from,
.layout-leave-to {
  filter: grayscale(1);
}

.page-enter-active,
.page-leave-active {
  transition: $transition;
}

.page-enter-from,
.page-leave-to {
  opacity: 0;
  filter: blur(1rem);
}
</style>
