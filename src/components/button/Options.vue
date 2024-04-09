<script setup lang="ts">
import { Icon } from "@iconify/vue";

defineProps<{
  iconOnly?: boolean;
}>();

// COMPONENT CONFIGURATION
const config = <any>{
  trigger: {
    icon: "mdi:cogs",
    text: "Options",
  },
};

const items = [
  { text: "Option 1", icon: "mdi:check" },
  { text: "Option 2", icon: "mdi:check" },
  { text: "Option 3", icon: "mdi:check" },
];
</script>

<template>
  <ClientOnly>
    <DropdownMenu>
      <DropdownMenuTrigger as-child>
        <Button class="grid grid-flow-col" variant="outline">
          <Icon :icon="config.trigger.icon" />
          <span v-text="config.trigger.text" />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        <DropdownMenuItem v-for="(item, i) in items" :key="i">
          <Icon :icon="item.icon" />
          <span v-text="item.text" />
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  </ClientOnly>
</template>
