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
const iconOnly = useAppConfig().buttons.global.iconOnly;
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
        <Button class="trigger" variant="outline">
          <Icon :icon="drawer.trigger.icon" />
          <span
            v-if="iconOnly ? null : drawer.trigger.text"
            v-text="inHeader ? drawer.trigger.text : null"
          />
        </Button>
      </DrawerTrigger>
      <DrawerContent>
        <DrawerHeader class="header">
          <DrawerTitle class="title">
            <Icon :icon="drawer.title.icon" />
            <span v-text="drawer.title.text" />
          </DrawerTitle>
          <DrawerDescription>
            {{ drawer.description.text }}
          </DrawerDescription>
        </DrawerHeader>

        <div class="content">
          <div class="prepend">
            <h1 v-text="data?.messages.hello" />
            <template v-for="(item, i) in data?.notes" :key="i">
              <h2>{{ item.title }}</h2>
              <span v-text="item.description" />
              <p v-text="item.components" />
            </template>
          </div>
          <div class="append">append</div>
        </div>

        <DrawerFooter class="pt-2">
          <DrawerClose as-child>
            <Button class="cancel" :variant="drawer.close.variant">
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
button.trigger {
  @apply inline-flex justify-start items-center;
}

.header {
  @apply flex flex-col justify-start items-center;
}

.title {
  @apply inline-flex justify-start items-center;
}

.content {
  @apply grid grid-cols-2 gap-4;
  @apply px-4;
}
.content .prepend,
.content .append {
  @apply rounded-md p-4;
}
.content .append {
  @apply bg-muted text-muted-foreground;
}

button.cancel {
  @apply inline-flex justify-center items-center;
}
</style>
