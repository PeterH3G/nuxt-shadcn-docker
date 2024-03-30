<script setup lang="ts">
const getOrder = (route: any) => route.meta?.order ?? 0;
const routes = [...useRouter().options.routes]
  .sort((a: any, b: any) => getOrder(a) - getOrder(b))
  .filter((route) => getOrder(route) > -1);
</script>

<template>
  <div id="layout-default" class="bg-white dark:bg-slate-800">
    <header
      class="sticky top-0 flex h-16 items-center bg-background-dark px-4 md:px-6"
    >
      <div class="container flex justify-between items-center">
        <NuxtLink id="brandLogo" class="flex" to="/">Logo</NuxtLink>

        <NavigationMenu class="flex">
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
      </div>
    </header>

    <main>
      <slot />
    </main>

    <footer class="py-4">
      <div class="container">footer</div>
    </footer>
  </div>
</template>

<style>
#layout-default {
  height: 100%;
  display: grid;
  grid-template-rows: auto 1fr auto;
  grid-template-columns: auto;
}

header {
  min-height: 50px;
}
</style>
