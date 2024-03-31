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
        <Button class="px-2" :variant="null">
          <NuxtLink
            :to="item.path"
            class="flex flex-col justify-center items-center"
          >
            <Icon :icon="`mdi:` + item.meta?.icon" />
            {{ item.meta?.title }}
          </NuxtLink>
        </Button>
      </NavigationMenuItem>
    </NavigationMenuList>
  </NavigationMenu>
</template>

<style scoped>
.dark .router-link-active {
  @apply text-green-500;
}

.light .router-link-active {
  @apply text-purple-900;
}
</style>
