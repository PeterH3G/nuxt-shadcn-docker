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

html.dark .layout {
  background: radial-gradient(
    rgba(255, 255, 255, .75),
    rgba(255, 255, 255, 0)
  );
}
html.light .layout {
  background: radial-gradient(
    rgba(255, 255, 255, 1),
    rgba(255, 255, 255, 0)
  );
}

body {
  background-image: url("/assets/img/logo_196.png");
  background-position: center center;
  background-repeat: no-repeat;
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
