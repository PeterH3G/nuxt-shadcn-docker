<script setup lang="ts">
import { Icon } from "@iconify/vue";

const icon = {
  menu: "mdi:account",
  dark: "mdi:moon-and-stars",
  light: "mdi:weather-sunny",
  system: "mdi:computer-classic",
};

const config = <any>{
  menuButton: {
    variant: "outline",
    text: "Toggle theme",
  },
  menuLabel: {
    show: true,
    text: "Theme Options",
  },
  menuItems: [
    { text: "Light", preference: "light", icon: icon.light },
    { text: "Dark", preference: "dark", icon: icon.dark },
    { text: "System", preference: "system", icon: icon.system },
  ],
};

const colorMode = useColorMode();
const quickSwitch = () => {
  colorMode.preference = colorMode.preference === "dark" ? "light" : "dark";
};
const useQuickSwitch = ref(true);
</script>

<template>
  <client-only>
    <Button
      v-if="useQuickSwitch"
      @click="quickSwitch()"
      :variant="config.menuButton.variant"
    >
      <Icon
        :icon="icon.dark"
        class="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0"
      />
      <Icon
        :icon="icon.light"
        class="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100"
      />
      <span class="sr-only">{{ config.menuButton.text }}</span>
    </Button>

    <DropdownMenu v-if="!useQuickSwitch">
      <DropdownMenuTrigger as-child>
        <Button :variant="config.menuButton.variant">
          <Icon
            :icon="icon.dark"
            class="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0"
          />
          <Icon
            :icon="icon.light"
            class="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100"
          />
          <span class="sr-only">{{ config.menuButton.text }}</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        <DropdownMenuLabel
          v-if="config.menuLabel.show"
          v-text="config.menuLabel.text"
        />
        <DropdownMenuItem
          v-for="(item, i) in config.menuItems"
          :key="i"
          @click="colorMode.preference = item.preference"
        >
          <Icon :icon="item.icon" />
          <span v-text="item.text" />
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  </client-only>
</template>
