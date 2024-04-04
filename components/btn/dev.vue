<script setup lang="ts">
import { Icon } from "@iconify/vue";

const { data, error, pending } = await useFetch("/api/pages", {
  server: false,
});

const button = <any>{
  icon: "mdi:account-cog",
  variant: "outline",
  text: "Dev",
};

const dropdownLabel = <any>{
  show: false,
  text: "Developer Options",
};
</script>

<template>
  <client-only>
    <DropdownMenu>
      <DropdownMenuTrigger as-child>
        <Button :variant="button.variant">
          <Icon :icon="button.icon" />
          <span class="sr-only">{{ button.text }}</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        <DropdownMenuItem>
          <BtnApi :data="data" />
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  </client-only>
</template>
