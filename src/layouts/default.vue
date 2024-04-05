<script setup lang="ts">
const maxWidth = useAppConfig().layout.maxWidth;
</script>

<template>
  <div class="layout grid grid-rows-[auto_1fr_auto] min-h-full">
    <header>Header</header>
    <main>
      <slot />
    </main>
    <footer>footer</footer>
  </div>
</template>

<style>
/** CENTERED CONTENT */
.layout header > :nth-child(1),
.layout footer > :nth-child(1) {
  width: 100%;
  max-width: v-bind(maxWidth);
  @apply m-auto;
}
</style>
