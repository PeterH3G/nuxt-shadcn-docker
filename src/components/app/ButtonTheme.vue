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
const iconOnly = useAppConfig().layout.buttonTheme.iconOnly;

// TAILWIND BINDINGS
const tw = <any>{
  buttonTrigger: {
    class: "",
    variant: "outline",
  },
};

// DROPDOWN SETTINGS
const dropdown = <any>{
  trigger: {
    text: "Theme",
  },
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
          :v-bind="tw.buttonTrigger"
          class="inline-flex justify-start items-center"
        >
          <Icon
            :icon="icon.light"
            class="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100"
          />
          <Icon
            :icon="icon.dark"
            class="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0"
          />
          <span
            v-if="iconOnly ? null : dropdown.trigger.text"
            v-text="inHeader ? dropdown.trigger.text : null"
            class="flex"
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
