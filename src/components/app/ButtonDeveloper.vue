<script setup lang="ts">
import { Icon } from "@iconify/vue";

const { data } = await useFetch("/api/developer");

const config = ref(<any>{
  menuButton: {
    icon: "mdi:account-cog",
    variant: "outline",
    text: "Dev",
  },
  menuContent: {
    align: "end",
  },
  menuLabel: {
    show: true,
    text: "Developer Options",
  },
});
</script>

<template>
  <client-only>
    <DropdownMenu>
      <DropdownMenuTrigger as-child>
        <Button :variant="config.menuButton.variant">
          <Icon :icon="config.menuButton.icon" />
          <span class="sr-only">{{ config.menuButton.text }}</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent :align="config.menuContent.align">
        <DropdownMenuLabel
          v-if="config.menuLabel.show"
          v-text="config.menuLabel.text"
        />
        <DropdownMenuItem>
          {{ data }}
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  </client-only>
</template>
