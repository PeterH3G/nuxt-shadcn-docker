<script setup lang="ts">
const avatar_url = useAppConfig().avatar_url;
const brand = useAppConfig().brand;
const layoutIsCentered = useAppConfig().layout.isCentered;
const layoutMaxWidth = layoutIsCentered
  ? useAppConfig().layout.maxWidth
  : "100%";

useHead({
  title: brand.title,
  titleTemplate: (titleChunk) => {
    return titleChunk ? `${brand.title} | route.name` : `route.name`;
  },
  meta: [{ name: "description", content: `${brand.title} ${brand.subtitle}` }],
  bodyAttrs: {
    class: "app",
    style: `background-image: url(${avatar_url})`,
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

html.dark .layout {
  background: radial-gradient(
    rgba(255, 255, 255, 0.75),
    rgba(255, 255, 255, 0)
  );
}

html.light .layout {
  background: radial-gradient(rgba(255, 255, 255, 1), rgba(255, 255, 255, 0));
}

body {
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
  max-width: v-bind(layoutMaxWidth);
  @apply mx-auto;
}
</style>
