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
/* Centered content */
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

/* Dialogs and popovers */
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
