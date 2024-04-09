<script setup lang="ts">
import { Icon } from "@iconify/vue";

defineProps<{
  iconOnly?: boolean;
}>();

// ICON SETTINGS
const icon = {
  menu: "mdi:account",
  dark: "mdi:weather-night",
  light: "mdi:weather-sunny",
  system: "mdi:desktop-classic",
};
const iconOnly = useAppConfig().layout.buttonTheme.iconOnly;

// THEME SETTINGS
const colorMode = useColorMode();
const items = <any>[
  { text: "Light", preference: "light", icon: icon.light },
  { text: "Dark", preference: "dark", icon: icon.dark },
  { text: "System", preference: "system", icon: icon.system },
];
const useQuickSwitch = ref(true);
const quickSwitch = () => {
  colorMode.preference = colorMode.preference === "dark" ? "light" : "dark";
};
</script>

<template>
  <ClientOnly>
    <DropdownMenu>
      <DropdownMenuTrigger as-child>
        <Button class="grid grid-flow-col" variant="outline">
          <Icon
            :icon="icon.dark"
            class="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0"
          />
          <Icon
            :icon="icon.light"
            class="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100"
          />
          <span>Theme</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        <DropdownMenuItem
          v-for="(item, i) in items"
          :key="i"
          @click="colorMode.preference = item.preference"
        >
          <Icon :icon="item.icon" />
          <span v-text="item.text" />
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  </ClientOnly>
</template>
