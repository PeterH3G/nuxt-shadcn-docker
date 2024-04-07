<script setup lang="ts">
const maxWidth = useAppConfig().layout.maxWidth;
</script>

<template>
  <div class="layout grid grid-rows-[auto_1fr_auto] min-h-full">
    <AppHeader />
    <main class="flex flex-col justify-center items-center">
      <slot />
    </main>
    <AppFooter />
  </div>
</template>

<style>
/** Centered content */
.layout header > :nth-child(1),
.layout main > :nth-child(1),
.layout footer > :nth-child(1) {
  width: 100%;
  max-width: v-bind(maxWidth);
  @apply m-auto py-2 px-2;
}

/* Layout components */
.layout .drawer-button {
  @apply flex md:hidden w-10 h-10 p-0;
  @apply rounded-full text-2xl;
}

/** Global Page CSS */
.page {
  @apply bg-card text-card-foreground;
  @apply flex flex-col h-full;
}
.page-header {
  @apply grid grid-cols-2 items-center;
}
.page-title {
  @apply inline-flex justify-start items-center;
}
.page-title .iconify {
  @apply text-4xl mr-2;
}
.page-description {
  @apply inline-flex justify-end items-center text-xs;
}
.page-description .iconify {
  @apply text-4xl ml-2;
}
.page-content {
  @apply flex flex-col h-full justify-start items-center;
}
.page-footer {
  @apply flex justify-center items-center;
}
</style>
