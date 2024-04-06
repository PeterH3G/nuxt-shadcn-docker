<script setup lang="ts">
const appName = useAppConfig().app.name;
</script>

<template>
  <header>
    <div class="container header">
      <div class="prepend">
        <Button class="app-logo" href="/" variant="ghost" />
        <span>{{ appName }}</span>
      </div>
      <div class="append">
        <AppNavigation class="mr-2" />
        <AppDialogLogin />
      </div>
      <slot name="drawer-button" />
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
  @apply md:flex justify-end items-center;
}

/* Header elements */
.app-logo {
  background-image: url("https://avatars.githubusercontent.com/u/500234?v=4");
  background-repeat: no-repeat;
  background-position: center center;
  background-size: cover;
  @apply mr-2 w-10 h-10 p-0 rounded-full;
}
</style>
