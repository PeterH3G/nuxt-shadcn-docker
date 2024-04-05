<script setup lang="ts">
import { Icon } from "@iconify/vue";

const appName = useAppConfig().brand.title;
const disclaimer = "All rights reserved";
const disclaimerIcon = 'mdi:registered-trademark'
</script>

<template>
  <footer class="flex justify-center items-center p-2 md:p-4"">
    <div class="container flex flex-col">
      <LayoutSocials class="content" />
      
        <div
          id="disclaimer"
          class="mt-2 text-xs inline-flex justify-center items-center"
        >
          <strong>{{ appName }}</strong>
          <span class="inline-flex justify-center items-center">
            <Icon :icon="disclaimerIcon" />
            {{ disclaimer }}
          </span>
        </div>
    </div>
  </footer>
</template>
