<script setup lang="ts">
import { Icon } from "@iconify/vue";

const button = <any>{
  icon: "mdi:account",
  variant: "outline",
  text: "Toggle theme",
};

const dropdownLabel = <any>{
  iconDark: "mdi:moon-and-stars",
  iconLight: "mdi:weather-sunny",
  show: false,
  text: "User Options",
};

const dropdownItems = <any>[
  { text: "Light", preference: "light", icon: dropdownLabel.iconLight },
  { text: "Dark", preference: "dark", icon: dropdownLabel.iconDark },
  { text: "System", preference: "system", icon: "mdi:computer-classic" },
];

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
      :variant="button.variant"
    >
      <Icon
        :icon="dropdownLabel.iconDark"
        class="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0"
      />
      <Icon
        :icon="dropdownLabel.iconLight"
        class="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100"
      />
      <span class="sr-only">{{ button.text }}</span>
    </Button>

    <DropdownMenu v-if="!useQuickSwitch">
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
          <span class="sr-only">{{ button.text }}</span>
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
