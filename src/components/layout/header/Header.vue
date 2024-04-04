<script setup lang="ts">
import { useAuthStore } from "~/stores/useAuth";
const auth = useAuthStore();
</script>

<template>
  <header class="flex h-16 items-center px-4 md:px-6">
    <div class="container flex justify-between items-center">
      <div id="header-prepend">
        <BtnLogo />
      </div>

      <div id="header-append" class="flex items-center">
        <LayoutNavigation class="mr-4" />
        <BtnTheme />
        <BtnDev />
        <BtnUser v-if="auth.isLoggedIn" />
        <BtnLogin v-else />
      </div>
    </div>
  </header>
</template>
