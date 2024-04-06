<script setup lang="ts">
const appTitle = useAppConfig().app.name;
const appSubtitle = useAppConfig().app.repository;
</script>

<template>
  <header>
    <div class="container header">
      <div class="prepend">
        <NuxtLink href="/">
          <Button class="app-logo" variant="ghost" />
        </NuxtLink>

        <div class="app-titles">
          <strong v-text="appTitle" />
          <span v-text="appSubtitle" />
        </div>
      </div>
      <div class="append">
        <AppNavigation class="mr-2" />
        <AppButtonDeveloper inHeader />
        <AppButtonTheme inHeader />
      </div>
      <AppButtonDrawer />
    </div>
  </header>
</template>

<style scoped>
/* Flexed items */
.container.header {
  @apply flex justify-between items-center;
}
.container.header .prepend {
  @apply w-full;
  @apply flex justify-start items-center;
}
.container.header .append {
  @apply w-full hidden;
  @apply sm:flex justify-end items-center;
}

/* Header elements */
.app-logo {
  background-image: url("https://avatars.githubusercontent.com/u/500234?v=4");
  background-repeat: no-repeat;
  background-position: center center;
  background-size: cover;
  @apply mr-2 w-10 h-10 p-0 rounded-full;
}
.app-titles {
  @apply flex flex-col text-xs;
}
</style>
