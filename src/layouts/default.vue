<script setup lang="ts">
import { Icon } from "@iconify/vue";
const maxWidth = useAppConfig().layout.maxWidth;
</script>

<template>
  <div class="layout grid grid-rows-[auto_1fr_auto] min-h-full">
    <AppHeader>
      <template #drawer-button>
        <Button class="drawer-button" variant="ghost"
          ><Icon icon="mdi:menu"
        /></Button>
      </template>
    </AppHeader>
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

/* Layout components */
.layout .drawer-button {
  @apply flex md:hidden w-10 h-10 p-0;
  @apply rounded-full text-2xl;
}
</style>
