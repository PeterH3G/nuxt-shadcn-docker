<script setup lang="ts">
import { Icon } from "@iconify/vue";

// ICON SETTINGS
const icon = {
  trigger: "mdi:menu",
  title: "mdi:account",
  cancel: "mdi:cancel",
};

// TAILWIND BINDINGS
const tw = <any>{
  triggerButton: {
    class: "w-10 h-10 p-0 rounded-full text-2xl",
    variant: "outline",
  },
  nuxtLinkButton: {
    class: "rounded-none uppercase bg-muted text-muted-foreground",
  },
};

// DRAWER SETTINGS
const drawerTrigger = {
  icon: icon.trigger,
  text: "Menu",
};
const drawerTitle = {
  icon: icon.title,
  text: "Menu",
};
const drawerDescription = {
  text: "Navigation & Settings",
};

const routes = useNuxtApp().$sortedRoutes;
const isOpen = ref(false);
</script>

<template>
  <ClientOnly>
    <Drawer v-model:open="isOpen">
      <DrawerTrigger as-child>
        <Button class="flex sm:hidden" v-bind="tw.triggerButton">
          <Icon :icon="drawerTrigger.icon" />
        </Button>
      </DrawerTrigger>
      <DrawerContent>
        <DrawerHeader class="flex flex-col justify-start items-center">
          <DrawerTitle class="inline-flex justify-start items-center">
            <Icon :icon="drawerTitle.icon" />
            <span v-text="drawerTitle.text" />
          </DrawerTitle>
          <DrawerDescription>
            {{ drawerDescription.text }}
          </DrawerDescription>
        </DrawerHeader>

        <NuxtLink
          v-for="(item, i) in routes"
          :key="i"
          class="flex"
          :to="item.path"
        >
          <Button
            v-if="!item.meta?.middleware"
            @click="isOpen = !isOpen"
            class="flex w-full"
            v-bind="tw.nuxtLinkButton"
          >
            <Icon :icon="<string>item.meta?.icon" />
            <span v-text="item.meta?.name" />
          </Button>
        </NuxtLink>

        <DrawerFooter class="pt-2">
          <div class="grid grid-cols-2 grid-flow-row gap-4 py-4 mx-4">
            <AppButtonDeveloper inDrawer />
            <AppButtonTheme inDrawer />
          </div>
        </DrawerFooter>
      </DrawerContent>
    </Drawer>
  </ClientOnly>
</template>
