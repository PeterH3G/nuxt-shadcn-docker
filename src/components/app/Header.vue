<script setup lang="ts">
const appTitle = useAppConfig().app.name;
const appSubtitle = useAppConfig().app.repository;
const showButtonDeveloper = useAppConfig().layout.buttonDeveloper.show;

// TAILWIND BINDINGS
const tw = <any>{
  buttonLogo: {
    class: "mr-2 w-10 h-10 p-0 rounded-full",
    variant: "ghost",
  },
};
</script>

<template>
  <header>
    <div class="container flex justify-between items-center">
      <div class="w-full flex justify-start items-center">
        <NuxtLink href="/">
          <Button id="app-logo" v-bind="tw.buttonLogo" />
        </NuxtLink>

        <div class="flex flex-col">
          <strong v-text="appTitle" />
          <span v-text="appSubtitle" />
        </div>
      </div>
      <div class="w-full hidden sm:flex justify-end items-center">
        <AppNavigation class="mr-2" />
        <AppButtonDeveloper v-if="showButtonDeveloper" inHeader />
        <AppButtonTheme inHeader />
      </div>
      <AppButtonDrawer />
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
