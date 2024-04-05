<script setup lang="ts">
import { storeToRefs } from "pinia";
const { globals } = storeToRefs(useLayoutStore());
const maxWidth = globals.value.maxWidth;
</script>

<template>
  <div class="layout grid grid-rows-[auto_1fr_auto] min-h-full">
    <Header />
    <main>
      <slot />
    </main>
    <Footer />
  </div>
</template>

<style>
/** CENTERED CONTENT GLOBALS */
.layout header > :nth-child(1),
.layout main .page .container,
.layout footer > :nth-child(1) {
  width: 100%;
  max-width: v-bind(maxWidth);
  @apply m-auto;
}
</style>
