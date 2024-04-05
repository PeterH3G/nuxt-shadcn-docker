<script setup lang="ts">
const appName = useAppConfig().app.name;

useHead({
  title: appName,
  titleTemplate: (titleChunk) => {
    return titleChunk ? `${appName}` : `${appName}`;
  },
  meta: [{ name: "description", content: `${appName}` }],
  bodyAttrs: {
    class: `app`,
  },
});
</script>

<template>
  <NuxtLayout>
    <NuxtPage />
  </NuxtLayout>
</template>

<style>
html,
body,
#__nuxt {
  width: 100%;
  height: 100%;
}

.layout-enter-active,
.layout-leave-active {
  transition: all 0.4s;
}
.layout-enter-from,
.layout-leave-to {
  filter: grayscale(1);
}

.page-enter-active,
.page-leave-active {
  transition: all 0.4s;
}
.page-enter-from,
.page-leave-to {
  opacity: 0;
  filter: blur(1rem);
}
</style>
