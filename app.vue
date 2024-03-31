<script setup lang="ts">
const brand = useAppConfig().brand;
const useDarkTheme = useAppConfig().useDarkTheme;

const centeredWidthMax = useAppConfig().layout.centeredWidthMax;
useHead({
  title: brand.title,
  titleTemplate: (titleChunk) => {
    return titleChunk ? `${brand.title} | route.name` : `route.name`;
  },
  meta: [{ name: "description", content: `${brand.title} ${brand.subtitle}` }],
  bodyAttrs: {
    class: useDarkTheme ? "dark" : "light",
  },
});
</script>

<template>
  <NuxtLayout>
    <NuxtPage />
  </NuxtLayout>
</template>

<style>
/** FULL DIMENSION */
html,
body,
#__nuxt {
  width: 100%;
  height: 100%;
}

/** LAYOUT TRANSITIONS */
.layout-enter-active,
.layout-leave-active {
  transition: all 0.4s;
}

.layout-enter-from,
.layout-leave-to {
  filter: grayscale(1);
}

/** PAGE TRANSITIONS */
.page-enter-active,
.page-leave-active {
  transition: all 0.4s;
}

.page-enter-from,
.page-leave-to {
  opacity: 0;
  filter: blur(1rem);
}

/** CENTERED CONTENT */
.layout header > :nth-child(1),
.layout main > :nth-child(1),
.layout footer > :nth-child(1) {
  width: 100%;
  max-width: v-bind(centeredWidthMax);
  @apply mx-auto;
}
</style>
