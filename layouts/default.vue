<script setup lang="ts">
import { cn } from "@/lib/utils";
const isLoggedIn = ref(false);
</script>

<template>
  <div class="layout-default min-h-full">
    <header class="sticky top-0 flex h-16 items-center px-4 md:px-6">
      <div class="container flex justify-between items-center">
        <div id="header-prepend">
          <AppBrand />
        </div>

        <div id="header-append" class="flex items-center">
          <AppNavigation :class="cn('mr-4')" />

          <AppTheme />

          <AppUser v-if="isLoggedIn">
            <template #user-nav> </template>
          </AppUser>

          <AppLogin v-else />
        </div>
      </div>
    </header>

    <main>
      <slot />
    </main>

    <footer>
      <div class="container">footer</div>
    </footer>
  </div>
</template>

<style scoped>
.layout-default {
  display: grid;
  grid-template-columns: 1;
  grid-template-rows: auto 1fr auto;
}
</style>
