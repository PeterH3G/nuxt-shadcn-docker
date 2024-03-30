<script setup lang="ts">
const getOrder = (route: any) => route.meta?.order ?? 0;
const routes = [...useRouter().options.routes]
  .sort((a: any, b: any) => getOrder(a) - getOrder(b))
  .filter((route) => getOrder(route) > -1);
</script>

<template>
  <NavigationMenu>
    <NavigationMenuList>
      <NavigationMenuItem>
        <NuxtLink
          v-for="(item, i) in routes"
          :key="i"
          :to="item.path"
          v-html="item.meta?.title"
        />
      </NavigationMenuItem>
    </NavigationMenuList>
  </NavigationMenu>
</template>
