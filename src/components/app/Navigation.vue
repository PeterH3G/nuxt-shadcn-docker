<script setup lang="ts">
import { Icon } from "@iconify/vue";
import { storeToRefs } from "pinia";
const { authenticated } = storeToRefs(useAuthStore());

const getOrder = (route: any) => route.meta?.order ?? 0;
const routes = [...useRouter().options.routes]
  .sort((a: any, b: any) => getOrder(a) - getOrder(b))
  .filter((route) => getOrder(route) > -1);
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
