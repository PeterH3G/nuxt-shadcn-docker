<script setup lang="ts">
const isLoggedIn = ref(false);
</script>

<template>
  <header class="sticky top-0 flex h-16 items-center px-4 md:px-6">
    <div class="container flex justify-between items-center">
      <div id="header-prepend">
        <AppBrand />
      </div>

      <div id="header-append" class="flex items-center">
        <AppNavigation class="mr-4" />
        <AppTheme />
        <AppUser v-if="isLoggedIn" />
        <AppLogin v-else />
      </div>
    </div>
  </header>
</template>
