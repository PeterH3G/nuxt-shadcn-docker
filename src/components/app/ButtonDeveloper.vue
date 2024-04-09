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

// TAILWIND BINDINGS
const tw = <any>{
  buttonTrigger: {
    class: "",
    variant: "outline",
  },
};

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
    text: "Developer navigation & settings",
  },
  close: {
    icon: icon.close,
    variant: "outline",
    text: "Close",
  },
};

const iconOnly = useAppConfig().layout.buttonDeveloper.iconOnly;
const isOpen = ref(false);

// DATA SETTINGS
const { pending, data } = await useLazyFetch("/api/developer");
watch(data, (newData) => {
  // Because posts might start out null, you won't have access
  // to its contents immediately, but you can watch it.
});
</script>

<template>
  <ClientOnly>
    <Drawer v-model:open="isOpen">
      <DrawerTrigger as-child>
        <Button
          class="inline-flex justify-start items-center"
          v-bind="tw.buttonTrigger"
        >
          <Icon :icon="drawer.trigger.icon" />
          <span
            v-if="iconOnly ? null : drawer.trigger.text"
            v-text="inHeader ? drawer.trigger.text : null"
          />
        </Button>
      </DrawerTrigger>
      <DrawerContent>
        <DrawerHeader class="flex flex-col justify-start items-center">
          <DrawerTitle class="inline-flex justify-start items-center">
            <Icon :icon="drawer.title.icon" />
            <span v-text="drawer.title.text" />
          </DrawerTitle>
          <DrawerDescription>
            {{ drawer.description.text }}
          </DrawerDescription>
        </DrawerHeader>

        <div class="grid grid-cols-2 gap-4 px-4">
          <div class="p-4">
            <h1 v-text="data?.messages.hello" />
            <template v-for="(item, i) in data?.notes" :key="i">
              <h2>{{ item.title }}</h2>
              <span v-text="item.description" />
              <p v-text="item.components" />
            </template>
          </div>
          <div class="p-4">append</div>
        </div>

        <DrawerFooter class="pt-2">
          <DrawerClose as-child>
            <Button
              class="inline-flex justify-center items-center"
              :variant="drawer.close.variant"
            >
              <Icon :icon="drawer.close.icon" />
              <span v-text="drawer.close.text" />
            </Button>
          </DrawerClose>
        </DrawerFooter>
      </DrawerContent>
    </Drawer>
  </ClientOnly>
</template>
