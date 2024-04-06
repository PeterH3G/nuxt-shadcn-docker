<script setup lang="ts">
import { Icon } from "@iconify/vue";

const appName = useAppConfig().app.name;
const appDisclaimer = "&reg; 2024 | All rights reserved";
const maxWidth = useAppConfig().layout.maxWidth;

const drawer = () => {
  const show = ref(true);
  return alert("show drawer");
};
</script>

<template>
  <div class="layout grid grid-rows-[auto_1fr_auto] min-h-full">
    <header>
      <div class="container header">
        <div class="prepend">
          <Button class="app-logo" href="/" variant="ghost" />
          <span>{{ appName }}</span>
        </div>
        <div class="append">
          <Button @click="drawer" class="drawer-button" variant="ghost"
            ><Icon icon="mdi:menu"
          /></Button>
        </div>
      </div>
    </header>
    <main class="flex flex-col justify-center items-center">
      <slot />
    </main>
    <footer>
      <div class="container flex flex-col justify-center items-center">
        <div class="disclaimer text-xs inline-flex justify-center items-center">
          <span v-text="appName" />
          <span v-html="appDisclaimer" />
        </div>
      </div>
    </footer>
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

/* Flexed items */
.layout .container.header {
  @apply flex justify-between items-center;
}
.layout .container.header .prepend,
.layout .container.header .append {
  @apply flex justify-center items-center;
}

/* Layout Components */
.layout .app-logo {
  background-image: url("https://avatars.githubusercontent.com/u/500234?v=4");
  background-repeat: no-repeat;
  background-position: center center;
  background-size: cover;
  @apply mr-4;
}
.layout .app-logo,
.layout .drawer-button {
  @apply w-10 h-10 p-0 rounded-full;
}
.layout .drawer-button {
  @apply text-3xl;
}
</style>
