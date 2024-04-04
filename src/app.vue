<script setup lang="ts">
const brand = useAppConfig().brand;
const layoutIsCentered = useAppConfig().layout.isCentered;
const layoutMaxWidth = layoutIsCentered
  ? useAppConfig().layout.maxWidth
  : "100%";

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
  <LayoutBackground>
    <NuxtLayout>
      <NuxtPage />
    </NuxtLayout>
  </LayoutBackground>
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
.layout footer > :nth-child(1) {
  width: 100%;
  max-width: v-bind(layoutMaxWidth);
  @apply mx-auto;
}
</style>
