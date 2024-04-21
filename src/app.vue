<script setup lang="ts">
import { appDescription, appName } from '~/constants'

useHead({
  title: appName,
  titleTemplate: (titleChunk) => {
    return titleChunk ? `${appName} | ${appDescription}` : `${appName}`
  },
  meta: [{ name: 'description', content: `${appName} ${appDescription}` }],
  bodyAttrs: {
    class: `app bg-background text-foreground`,
  },
})
</script>

<template>
  <AppHeader />
  <NuxtLayout>
    <NuxtPage />
  </NuxtLayout>
  <AppFooter />
</template>

<style>
html,
body,
#__nuxt {
  height: 100%;
  margin: 0;
  padding: 0;
  bottom: 0;
}

#__nuxt {
  @apply grid grid-rows-[auto_1fr_auto];
}

header,
aside,
footer {
  @apply p-2 sm:p-4;
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
