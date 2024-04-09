<script setup lang="ts">
import { Icon } from "@iconify/vue";

defineProps<{
  inHeader?: boolean;
  inDrawer?: boolean;
}>();

const routes = useNuxtApp().$sortedRoutes;

const config = <any>{
  triggerIcon: "mdi-compass",
  triggerText: "Pages",
  nuxtLink: {
    class: "rounded-none",
  },
  nuxtLinkButton: {
    class: "rounded-none",
    variant: "ghost",
  },
};
</script>

<template>
  <NavigationMenu>
    <NavigationMenuList>
      <NavigationMenuItem>
        <NavigationMenuTrigger>
          <Icon :icon="config.triggerIcon" />
          <span v-text="config.triggerText" />
        </NavigationMenuTrigger>
        <NavigationMenuContent>
          <div class="grid grid-flow-row">
            <NuxtLink v-for="(item, i) in routes" :key="i" :to="item.path">
              <NavigationMenuLink
                v-if="!item.meta?.middleware"
                :class="config.nuxtLink.class"
              >
                <Button class="inline-flex" v-bind="config.nuxtLinkButton">
                  <Icon :icon="`${item.meta?.icon}`" />
                  <span class="w-full" v-text="item.meta?.name" />
                </Button>
              </NavigationMenuLink>
            </NuxtLink>
          </div>
        </NavigationMenuContent>
      </NavigationMenuItem>
    </NavigationMenuList>
  </NavigationMenu>
</template>
