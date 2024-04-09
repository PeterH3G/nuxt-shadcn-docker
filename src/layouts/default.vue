<script setup lang="ts">
const maxWidth = useAppConfig().layout.maxWidth;
</script>

<template>
  <div class="layout grid grid-rows-[auto_1fr_auto] min-h-full">
    <Header />
    <main class="flex flex-col justify-center items-center">
      <slot />
    </main>
    <Footer />
  </div>
</template>

<style>
/** Centered content */
.layout header > :nth-child(1),
.layout main > :nth-child(1),
.layout footer > :nth-child(1) {
  width: 100%;
  max-width: v-bind(maxWidth);
  margin: 0 auto;
}
</style>
