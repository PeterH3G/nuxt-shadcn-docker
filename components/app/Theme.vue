<script setup lang="ts">
import { Icon } from "@iconify/vue";

const colorMode = useColorMode();

const button = <any>{
  icon: "mdi:account",
  variant: "outline",
};

const dropdownLabel = <any>{
  iconDark: "mdi:moon-and-stars",
  iconLight: "mdi:weather-sunny",
  show: false,
  text: "User Options",
};

const dropdownItems = [
  { text: "Light", preference: "light", icon: dropdownLabel.iconLight },
  { text: "Dark", preference: "dark", icon: dropdownLabel.iconDark },
  { text: "System", preference: "system", icon: "mdi:computer-classic" },
];
</script>

<template>
  <client-only>
    <DropdownMenu>
      <DropdownMenuTrigger as-child>
        <Button :variant="button.variant">
          <Icon
            :icon="dropdownLabel.iconDark"
            class="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0"
          />
          <Icon
            :icon="dropdownLabel.iconLight"
            class="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100"
          />
          <span class="sr-only">Toggle theme</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        <DropdownMenuItem
          v-for="(item, i) in dropdownItems"
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
