<script setup lang="ts">
const maxWidth = useAppConfig().layout.isCentered
  ? useAppConfig().layout.maxWidth
  : "100%";
</script>

<template>
  <div class="layout min-h-full">
    <LayoutHeader />
    <main>
      <slot />
    </main>
    <LayoutFooter />
  </div>
</template>

<style>
/** LAYOUT GRID SETTINGS */
.layout {
  display: grid;
  grid-template-columns: 1;
  grid-template-rows: auto 1fr auto;
}

/** LAYOUT COMPONENT GLOBALS */
.layout header,
.layout footer {
  @apply bg-gray-200 dark:bg-gray-900;
}

/** CENTERED CONTENT GLOBALS */
.layout header > :nth-child(1),
.layout main .page .container,
.layout footer > :nth-child(1) {
  width: 100%;
  max-width: v-bind(maxWidth);
  background-color: rgba(255, 255, 255, 0.01);
  @apply m-auto p-4;
}

/** CUSTOM GLOBALS */
.page {
  @apply h-full;
}
.label {
  @apply bg-gray-400 dark:bg-gray-800;
  @apply flex justify-center items-center py-2 sm:py-4;
  @apply text-sm;
}
.content {
  @apply bg-gray-300 dark:bg-gray-700;
  @apply text-sm;
}
</style>
