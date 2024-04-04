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
          <Button variant="ghost">
            <Icon :icon="`${item.meta?.icon}`" />
            {{ item.meta?.title }}
          </Button>
        </NuxtLink>
      </NavigationMenuItem>
    </NavigationMenuList>
  </NavigationMenu>
</template>

<style scoped>
a.link > button {
  @apply bg-card hover:bg-accent;
}

a.link.router-link-active > button {
  @apply bg-accent;
}
</style>