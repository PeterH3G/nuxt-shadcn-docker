<script setup lang="ts">
import { Icon } from "@iconify/vue";

const appName = useAppConfig().app.name;
</script>

<template>
  <header>
    <div class="container header">
      <div class="prepend">
        <Button class="app-logo" href="/" variant="ghost" />
        <span>{{ appName }}</span>
      </div>
      <div class="append">
        <Button class="drawer-button" variant="ghost"
          ><Icon icon="mdi:menu"
        /></Button>
      </div>
    </div>
  </header>
</template>

<style scoped>
/* Flexed items */
.container.header {
  @apply flex justify-between items-center;
}
.container.header .prepend,
.container.header .append {
  @apply flex justify-center items-center;
}

/* Layout Components */
.app-logo {
  background-image: url("https://avatars.githubusercontent.com/u/500234?v=4");
  background-repeat: no-repeat;
  background-position: center center;
  background-size: cover;
  @apply mr-4;
}
.app-logo,
.drawer-button {
  @apply w-10 h-10 p-0 rounded-full;
}
.drawer-button {
  @apply text-3xl;
}
</style>
