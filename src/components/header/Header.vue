<script setup lang="ts">
const appTitle = useAppConfig().app.name;
const appSubtitle = useAppConfig().app.repository;

// TAILWIND BINDINGS
const tw = <any>{
  logoButton: {
    class: "mr-2 w-10 h-10 p-0 rounded-full",
    variant: "ghost",
  },
};
</script>

<template>
  <header>
    <div class="container flex justify-between items-center p-2 sm:p4">
      <div class="w-full flex justify-start items-center">
        <NuxtLink href="/">
          <Button id="app-logo" v-bind="tw.logoButton" />
        </NuxtLink>

        <div class="flex flex-col">
          <strong v-text="appTitle" />
          <span v-text="appSubtitle" />
        </div>
      </div>
      <div class="w-full hidden sm:flex justify-end items-center">
        <ButtonNavigation />
        <ButtonTheme />
      </div>
      <ButtonDrawer />
    </div>
  </header>
</template>

<style scoped>
/* Header elements */
#app-logo {
  background-image: url("https://avatars.githubusercontent.com/u/500234?v=4");
  background-repeat: no-repeat;
  background-position: center center;
  background-size: cover;
}
</style>
