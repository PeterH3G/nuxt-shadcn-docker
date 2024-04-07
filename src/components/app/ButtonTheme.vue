<script setup lang="ts">
import { Icon } from "@iconify/vue";

defineProps<{
  inHeader?: boolean;
  inDrawer?: boolean;
}>();

// ICON SETTINGS
const icon = {
  menu: "mdi:account",
  dark: "mdi:weather-night",
  light: "mdi:weather-sunny",
  system: "mdi:desktop-classic",
};
const iconOnly = useAppConfig().buttons.developer.iconOnly;

// DROPDOWN SETTINGS
const triggerButton = <any>{
  variant: "outline",
  text: "Theme switch",
};

const dropdown = <any>{
  label: {
    text: "Theme Options",
  },
  items: [
    { text: "Light", preference: "light", icon: icon.light },
    { text: "Dark", preference: "dark", icon: icon.dark },
    { text: "System", preference: "system", icon: icon.system },
  ],
};

// THEME SETTINGS
const colorMode = useColorMode();
const useQuickSwitch = ref(true);
const quickSwitch = () => {
  colorMode.preference = colorMode.preference === "dark" ? "light" : "dark";
};
</script>

<template>
  <clientOnly>
    <DropdownMenu>
      <DropdownMenuTrigger as-child>
        <Button
          @click="useQuickSwitch ? quickSwitch() : null"
          :variant="triggerButton.variant"
          class="trigger-button"
        >
          <Icon :icon="icon.light" class="icon-light" />
          <Icon :icon="icon.dark" class="icon-dark" />
          <span
            class="trigger-text"
            v-text="
              !iconOnly && inHeader ? triggerButton.text : triggerButton.text
            "
          />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent v-if="useQuickSwitch ? false : true" align="end">
        <DropdownMenuLabel v-text="dropdown.label.text" />
        <DropdownMenuItem
          v-for="(item, i) in dropdown.items"
          :key="i"
          @click="colorMode.preference = item.preference"
        >
          <Icon :icon="item.icon" />
          <span v-text="item.text" />
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  </clientOnly>
</template>

<style scoped>
.trigger-button {
  @apply inline-flex justify-start items-center;
}
.trigger-text {
  @apply flex;
}
.icon-dark {
  @apply h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0;
}
.icon-light {
  @apply absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100;
}
</style>
