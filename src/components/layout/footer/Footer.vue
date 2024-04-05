<script setup lang="ts">
import { Icon } from "@iconify/vue";

const brandTitle = useAppConfig().brand.title;
const disclaimer = "All rights reserved";
</script>

<template>
  <footer class="flex justify-center items-center">
    <div class="container">
      <div class="left">
        <LayoutFooterPoweredby class="content" />
      </div>
      <div class="right">
        <LayoutFooterSocials class="content" />
      </div>
      <div class="disclaimer">
        {{ brandTitle }}
        <Icon icon="mdi:registered-trademark" /> 
        <span v-text="`| ${disclaimer}`" class="ml-2" />
      </div>
    </div>
  </footer>
</template>

<style>
footer .container {
  @apply grid grid-cols-2 grid-flow-row gap-2 sm:gap-4 p-2;
  @apply justify-start items-start;
}
footer .left,
footer .right {
  @apply flex flex-col;
}
footer .content > .items {
  @apply flex flex-wrap justify-center items-center;
}
footer .disclaimer {
  @apply col-span-2 flex justify-center items-center;
  @apply text-xs;
}
</style>
