<script setup lang="ts">
const appName = useAppConfig().app.name;
const appDescription = useAppConfig().app.description;

useHead({
  title: appName,
  titleTemplate: (titleChunk) => {
    return titleChunk ? `${appName}` : `${appName}`;
  },
  meta: [{ name: "description", content: `${appDescription}` }],
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
/** Ensure full dimensions */
html,
body,
#__nuxt {
  width: 100%;
  height: 100%;
  min-height: 100%;
}

/** Grid/Drawer positioning fix */
body {
  bottom: 0;
}

/** Nuxt Router CSS */
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

/** Dialogs CSS */
@keyframes fadeIn {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}
@keyframes fadeOut {
  from {
    opacity: 1;
  }

  to {
    opacity: 0;
  }
}
.DialogOverlay[data-state="open"],
.DialogContent[data-state="open"] {
  animation: fadeIn 4000ms ease-out;
}
.DialogOverlay[data-state="closed"],
.DialogContent[data-state="closed"] {
  animation: fadeOut 4000ms ease-in;
}
</style>
