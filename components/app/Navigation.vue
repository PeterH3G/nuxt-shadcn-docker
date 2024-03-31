<script setup lang="ts">
import { Icon } from "@iconify/vue";

const getOrder = (route: any) => route.meta?.order ?? 0;
const routes = [...useRouter().options.routes]
  .sort((a: any, b: any) => getOrder(a) - getOrder(b))
  .filter((route) => getOrder(route) > -1);
</script>

<template>
  <NavigationMenu>
    <NavigationMenuList>
      <NavigationMenuItem v-for="(item, i) in routes" :key="i">
        <NuxtLink :to="item.path" class="link">
            <Icon :icon="`${item.meta?.icon}`" />
            {{ item.meta?.title }}
        </NuxtLink>
      </NavigationMenuItem>
    </NavigationMenuList>
  </NavigationMenu>
</template>

<style scoped>
a.link {
  @apply  p-2 flex flex-col justify-center items-center hover:bg-accent;
}

a.router-link-active {
  @apply bg-accent;
}
</style>
