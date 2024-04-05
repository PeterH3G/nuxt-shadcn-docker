<script setup lang="ts">
import { Icon } from "@iconify/vue";

const brandTitle = useAppConfig().brand.title;
const disclaimer = "All rights reserved";
</script>

<template>
  <footer class="flex justify-center items-center py-2 md:py-4">
    <div class="container flex flex-col">
      <FooterSocials class="content" />
      <div
        id="disclaimer"
        class="mt-2 text-xs inline-flex justify-center items-center"
      >
        <strong v-text="brandTitle" />
        <span class="inline-flex justify-center items-center">
          <Icon icon="mdi:registered-trademark" class="mr-1" />|
          {{ disclaimer }}</span
        >
      </div>
    </div>
  </footer>
</template>
