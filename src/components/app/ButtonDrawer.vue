<script setup lang="ts">
import { Icon } from "@iconify/vue";

const routes = useNuxtApp().$sortedRoutes;

// ICON SETTINGS
const icon = {
  trigger: "mdi:menu",
  title: "mdi:account",
  cancel: "mdi:cancel",
};
const iconOnly = useAppConfig().buttons.global.iconOnly;

// DRAWER SETTINGS
const drawer = <any>{
  trigger: {
    icon: icon.trigger,
    text: "Menu",
  },
  title: {
    icon: icon.title,
    text: "Menu",
  },
  description: {
    text: "Navigations & Settings",
  },
  close: {
    icon: icon.cancel,
    variant: "outline",
    text: "Cancel",
  },
};
const isOpen = ref(false);
</script>

<template>
  <ClientOnly>
    <Drawer v-model:open="isOpen">
      <DrawerTrigger as-child>
        <Button class="flex sm:hidden" variant="outline">
          <Icon :icon="drawer.trigger.icon" />
          <span v-if="!iconOnly" v-text="drawer.trigger.text" />
        </Button>
      </DrawerTrigger>
      <DrawerContent>
        <DrawerHeader class="drawer-header">
          <DrawerTitle class="drawer-title">
            <Icon :icon="drawer.title.icon" />
            <span v-text="drawer.title.text" />
          </DrawerTitle>
          <DrawerDescription>
            {{ drawer.description.text }}
          </DrawerDescription>
        </DrawerHeader>

        <NuxtLink
          v-for="(item, i) in routes"
          :key="i"
          class="drawer-links"
          :to="item.path"
        >
          <Button v-if="!item.meta?.middleware" @click="isOpen = !isOpen">
            <Icon :icon="<string>item.meta?.icon" />
            <span v-text="item.meta?.name" />
          </Button>
        </NuxtLink>

        <div class="options">
          <AppButtonDeveloper inDrawer />
          <AppButtonTheme inDrawer />
        </div>

        <DrawerFooter class="pt-2">
          <AppFooter />
        </DrawerFooter>
      </DrawerContent>
    </Drawer>
  </ClientOnly>
</template>

<style scoped>
/** Component elements */
.drawer-header {
  @apply flex flex-col justify-start items-center;
}
.drawer-title {
  @apply inline-flex justify-start items-center;
}

/** Router Link Settings */
.drawer-links {
  @apply flex;
}
.drawer-links button {
  @apply flex w-full rounded-none uppercase bg-muted text-muted-foreground;
}
.router-link-active.router-link-exact-active button {
  @apply bg-primary text-primary-foreground;
}

/** Options settings */
.options {
  @apply grid grid-cols-2 grid-flow-row gap-4;
  @apply py-4 mx-4;
}
</style>
