<script setup lang="ts">
import { Icon } from '@iconify/vue'

// THEME SETTINGS
const colorMode = useColorMode()
const icon = {
  menu: 'mdi:account',
  dark: 'mdi:weather-night',
  light: 'mdi:weather-sunny',
  system: 'mdi:desktop-classic',
}
const items = [
  { text: 'Light', preference: 'light', icon: icon.light },
  { text: 'Dark', preference: 'dark', icon: icon.dark },
  { text: 'System', preference: 'system', icon: icon.system },
]
const useQuickSwitch = ref(true)
function quickSwitch() {
  colorMode.preference = colorMode.preference === 'dark' ? 'light' : 'dark'
}
</script>

<template>
  <DropdownMenu>
    <DropdownMenuTrigger as-child @click="useQuickSwitch ? quickSwitch() : null">
      <Button class="grid grid-cols-[auto_1fr] justify-center items-center text-left" variant="outline">
        <Icon :icon="icon.dark" class="rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
        <Icon :icon="icon.light" class="absolute rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
        <slot />
      </Button>
    </DropdownMenuTrigger>
    <DropdownMenuContent v-if="!useQuickSwitch" align="end">
      <DropdownMenuItem v-for="(item, i) in items" :key="i" @click="colorMode.preference = item.preference">
        <Icon :icon="item.icon" />
        <span v-text="item.text" />
      </DropdownMenuItem>
    </DropdownMenuContent>
  </DropdownMenu>
</template>