<script setup lang="ts">
const appName = useAppConfig().app.name;
const appDisclaimer = "&reg; 2024 | All rights reserved";
</script>

<template>
  <footer>
    <div class="container flex flex-col justify-center items-center p-2 sm:p-4">
      <div class="disclaimer text-xs inline-flex justify-center items-center">
        <span v-text="appName" />
        <span v-html="appDisclaimer" />
      </div>
    </div>
  </footer>
</template>
