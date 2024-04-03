<script setup lang="ts">
import { useAuthStore } from "~/stores/useAuth";
const auth = useAuthStore();
</script>

<template>
  <header class="flex h-16 items-center px-4 md:px-6">
    <div class="container flex justify-between items-center">
      <div id="header-prepend">
        <HeaderLogo />
      </div>

      <div id="header-append" class="flex items-center">
        <AppNavigation class="mr-4" />
        <AppTheme />

        <AppUser v-if="auth.isLoggedIn" />
        <AppLogin v-else />
      </div>
    </div>
  </header>
</template>
