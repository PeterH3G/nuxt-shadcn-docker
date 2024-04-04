<script setup lang="ts">
import { Icon } from "@iconify/vue";
import { storeToRefs } from "pinia";

const { user } = storeToRefs(useAuthStore());

const button = <any>{
  icon: user.value.icon,
  text: user.value.name,
  variant: "outline",
};

const dropdownLabel = {
  class: "flex items-center",
  icon: "mdi:slider",
  show: true,
  text: "User Options",
};

const dropdownItems = [
  { text: "text 1", icon: "mdi:exclamation" },
  { text: "text 2", icon: "mdi:exclamation" },
];
</script>

<template>
  <client-only>
    <DropdownMenu>
      <DropdownMenuTrigger as-child>
        <Button :variant="button.variant">
          <Icon :icon="button.icon" />
          <strong v-text="button.text" />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        <DropdownMenuLabel
          v-if="dropdownLabel.show"
          :class="dropdownLabel.class"
        >
          <Icon :icon="dropdownLabel.icon" />
          <strong v-text="dropdownLabel.text" />
        </DropdownMenuLabel>
        <DropdownMenuSeparator v-if="dropdownLabel.show" />
        <DropdownMenuItem v-for="(item, i) in dropdownItems" :key="i">
          <Icon :icon="item.icon" />
          <span v-text="item.text" />
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  </client-only>
</template>
