<script setup lang="ts">
import { Icon } from "@iconify/vue";
const routes = useNuxtApp().$sortedRoutes;
</script>

<template>
  <NavigationMenu>
    <NavigationMenuList>
      <NavigationMenuItem v-for="(item, i) in routes" :key="i">
        <NuxtLink v-if="!item.meta?.middleware" :to="item.path">
          <Button class="bg-mute text-mute-foreground" variant="ghost">
            <Icon :icon="`${item.meta?.icon}`" />
            {{ item.meta?.name }}
          </Button>
        </NuxtLink>
      </NavigationMenuItem>
    </NavigationMenuList>
  </NavigationMenu>
</template>