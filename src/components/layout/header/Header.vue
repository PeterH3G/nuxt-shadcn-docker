<script setup lang="ts">
import { useAuthStore } from "~/stores/useAuth";
import { Icon } from "@iconify/vue";

const auth = useAuthStore();
</script>

<template>
  <header class="flex h-auto items-center">
    <div class="container flex justify-between items-center">
      <div id="header-prepend">
        <BtnLogo />
      </div>

      <div id="header-append" class="hidden md:flex md:items-center">
        <LayoutNavigation class="mr-4" />
        <BtnTheme />
        <BtnDev />
        <BtnUser v-if="auth.isLoggedIn" />
        <BtnLogin v-else />
      </div>
      <Button id="drawer-button" class="md:hidden p-2" variant="ghost">
        <Icon icon="mdi-menu" class="text-4xl" />
      </Button>
    </div>
  </header>
</template>