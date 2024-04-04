<script setup lang="ts">
const isLayoutCentered = useAppConfig().layout.isCentered;
const layoutMaxWidth = isLayoutCentered
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

<style scoped>
/** LAYOUT GRID SETTINGS */
.layout {
  display: grid;
  grid-template-columns: 1;
  grid-template-rows: auto 1fr auto;
}

/** CENTERED LAYOUT CONTENT */
.layout header > :nth-child(1),
.layout main > :nth-child(1),
.layout footer > :nth-child(1) {
  width: 100%;
  max-width: v-bind(layoutMaxWidth);
  @apply mx-auto;
}
</style>
