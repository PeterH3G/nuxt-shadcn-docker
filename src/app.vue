<script setup lang="ts">
const brand = useAppConfig().brand;
const show_background_avatar = useAppConfig().show_background_avatar;

useHead({
  title: brand.title,
  titleTemplate: (titleChunk) => {
    return titleChunk ? `${brand.title} | route.name` : `route.name`;
  },
  meta: [{ name: "description", content: `${brand.title} ${brand.subtitle}` }],
  bodyAttrs: {
    class: `app ${show_background_avatar ? "bg-avatar" : ""}`,
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
