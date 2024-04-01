<script setup lang="ts">
import { storeToRefs } from "pinia";

const { isAuth } = storeToRefs(useAuthStore());
const showLabel = ref(true);
</script>

<template>
  <header class="flex h-16 items-center px-4 md:px-6">
    <div class="container flex justify-between items-center">
      <div id="header-prepend">
        <AppBrand />
      </div>

      <div id="header-append" class="flex items-center">
        <AppNavigation class="mr-4" />
        <AppTheme />

        <AppUser v-if="isAuth" />
        <AppLogin v-else />
      </div>
    </div>
  </header>
</template>
