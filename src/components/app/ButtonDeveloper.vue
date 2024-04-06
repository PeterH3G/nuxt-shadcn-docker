<script setup lang="ts">
import { Icon } from "@iconify/vue";

defineProps<{
  inHeader?: boolean;
  inDrawer?: boolean;
}>();

// ICON SETTINGS
const icon = {
  trigger: "mdi:tools",
  close: "mdi:cancel",
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
    icon: icon.close,
    variant: "outline",
    text: "Close",
  },
};
const isOpen = ref(false);

// DATA SETTINGS
const { pending, data: developer } = await useLazyFetch('/api/developer')
watch(developer, (newDeveloper) => {
  // Because posts might start out null, you won't have access
  // to its contents immediately, but you can watch it.
})
</script>

<template>
  <ClientOnly>
    <Drawer v-model:open="isOpen">
      <DrawerTrigger as-child>
        <Button class="trigger-button" variant="outline">
          <Icon :icon="drawer.trigger.icon" />
          <span
            v-text="drawer.trigger.text"
            :class="iconOnly && inHeader ? `sr-only` : ``"
          />
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

        <pre v-text="developer" />

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
.trigger-button {
  @apply w-full flex justify-start items-center;
}
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
