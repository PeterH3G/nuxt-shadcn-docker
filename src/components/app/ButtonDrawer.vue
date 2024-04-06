<script setup lang="ts">
import { Icon } from "@iconify/vue";

const routes = useNuxtApp().$sortedRoutes;

const icon = {
  trigger: "mdi:menu",
  title: "mdi:account",
  cancel: "mdi:cancel",
};

const config = {
  drawerTrigger: {
    icon: icon.trigger,
    text: "Menu",
  },
  drawerTitle: {
    icon: icon.title,
    text: "User Menu",
  },
  drawerDescription: {
    text: "Your navigations & settings",
  },
  drawerClose: {
    icon: icon.cancel,
    variant: "outline",
    text: "Cancel",
  },
};

const showTriggerText = ref(false);
const isOpen = ref(false);
</script>

<template>
  <ClientOnly>
    <Drawer v-model:open="isOpen">
      <DrawerTrigger as-child>
        <Button variant="outline">
          <Icon :icon="config.drawerTrigger.icon" />
          <span v-text="config.drawerTrigger.text" />
        </Button>
      </DrawerTrigger>
      <DrawerContent>
        <DrawerHeader class="drawer-header">
          <DrawerTitle class="drawer-title">
            <Icon :icon="config.drawerTitle.icon" />
            <span v-text="config.drawerTitle.text" />
          </DrawerTitle>
          <DrawerDescription>
            {{ config.drawerDescription.text }}
          </DrawerDescription>
        </DrawerHeader>

        <NuxtLink
          class="drawer-links"
          v-for="(item, i) in routes"
          :key="i"
          :to="item.path"
        >
          <Button @click="isOpen = !isOpen" class="buttons">
            <Icon :icon="<string>item.meta?.icon" />
            <span v-text="item.meta?.name" />
          </Button>
        </NuxtLink>

        <DrawerFooter class="pt-2">
          <AppFooter />
        </DrawerFooter>
      </DrawerContent>
    </Drawer>
  </ClientOnly>
</template>

<style scoped>
.drawer-header {
  @apply flex flex-col justify-start items-center;
}
.drawer-title {
  @apply inline-flex justify-start items-center;
}
.drawer-links {
  @apply flex;
}
.drawer-links .buttons {
  @apply flex w-full rounded-none uppercase;
}
.drawer-cancel {
  @apply inline-flex justify-center items-center;
}
</style>
