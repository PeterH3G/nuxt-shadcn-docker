<script setup lang="ts">
import { Icon } from "@iconify/vue";
import { storeToRefs } from "pinia";
const { authenticated } = storeToRefs(useAuthStore());  
const routes = useNuxtApp().$sortedRoutes;
</script>

<template>
  <NavigationMenu>
    <NavigationMenuList>
      <template v-for="(item, i) in routes" :key="i">
        <NavigationMenuItem v-if="!item.meta?.middleware">
          <NuxtLink :to="item.path">
            <Button class="bg-primary text-primary-foreground" variant="ghost">
              <Icon :icon="`${item.meta?.icon}`" />
              {{ item.meta?.name }}
            </Button>
          </NuxtLink>
        </NavigationMenuItem>
        <NavigationMenuItem v-if="item.meta?.middleware && authenticated">
          <NuxtLink :to="item.path">
            <Button class="bg-primary text-primary-foreground" variant="ghost">
              <Icon :icon="`${item.meta?.icon}`" />
              {{ item.meta?.name }}
            </Button>
          </NuxtLink>
        </NavigationMenuItem>
      </template>
    </NavigationMenuList>
  </NavigationMenu>
</template>
