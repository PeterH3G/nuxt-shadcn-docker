<script setup lang="ts">
import { Icon } from "@iconify/vue";

// ICON SETTINGS
const icon = {
  trigger: "mdi:tools",
  cancel: "mdi:cancel",
};
const iconOnly = ref(true);

// DRAWER SETTINGS
const drawer = <any>{
  trigger: {
    icon: icon.trigger,
    text: "Developer",
  },
  title: {
    icon: icon.trigger,
    text: "Developer Menu",
  },
  description: {
    text: "Developer navigations & settings",
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
        <Button variant="outline">
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
        <DrawerFooter class="pt-2">
          <DrawerClose as-child>
            <Button class="drawer-cancel" :variant="drawer.close.variant">
              <Icon :icon="drawer.close.icon" />
              <span v-text="drawer.close.text" />
            </Button>
          </DrawerClose>
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
.drawer-cancel {
  @apply inline-flex justify-center items-center;
}
</style>
