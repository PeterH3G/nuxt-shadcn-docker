<script setup lang="ts">
import { Icon } from "@iconify/vue";

const appName = useAppConfig().app.name;
const appDisclaimer = "&reg; 2024 | All rights reserved";
</script>

<template>
  <footer>
    <div class="container flex flex-col justify-center items-center">
      <div class="disclaimer text-xs inline-flex justify-center items-center">
        <span v-text="appName" />
        <span v-html="appDisclaimer" />
      </div>
    </div>
  </footer>
</template>
