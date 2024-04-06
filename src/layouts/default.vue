<script setup lang="ts">
import { Icon } from "@iconify/vue";

const appName = useAppConfig().app.name;
const appDisclaimer = "&reg; 2024 | All rights reserved";
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
/* Centered content */
.layout header > :nth-child(1),
.layout main > :nth-child(1),
.layout footer > :nth-child(1) {
  width: 100%;
  max-width: v-bind(maxWidth);
  @apply m-auto py-2;
}
</style>
