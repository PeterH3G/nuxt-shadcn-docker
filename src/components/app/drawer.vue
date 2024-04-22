<script setup lang="ts">
import { Icon } from '@iconify/vue'
import { appDescription, appName } from '~/constants'

defineProps<{
  navigation?: any
}>()

const isOpen = ref(false)
</script>

<template>
  <ClientOnly>
    <Drawer v-model:open="isOpen">
      <DrawerTrigger as-child>
        <Button class="flex justify-center items-center sm:hidden" variant="outline">
          <Icon icon="mdi:menu" />
        </Button>
      </DrawerTrigger>

      <DrawerContent class="min-h-[75%] grid grid-rows-[auto_auto_1fr_auto] items-start">
        <DrawerHeader class="header flex justify-between">
          <div class="prepend grid grid-rows-2 grid-cols-[auto_1fr] gap-2 items-center">
            <AppLogo class="row-span-full ring rounded-full" image :size="30" />
            <DrawerTitle class="titles">
              {{ appName }}
            </DrawerTitle>
            <DrawerDescription class="titles">
              {{ appDescription }}
            </DrawerDescription>
          </div>
          <div class="append grid grid-flow-col items-center">
            <PageViews>
              Total views:
            </PageViews>
          </div>
        </DrawerHeader>

        <nav class="grid grid-flow-row">
          <NuxtLink v-for="(link, i) in navigation" :key="i" :href="link.path" @click="isOpen = false">
            <Button class="grid grid-cols-[auto_1fr] w-full h-16" variant="ghost">
              <Icon :icon="`${link.meta?.icon}`" />
              {{ link.name }}
            </Button>
          </NuxtLink>
        </nav>

        <DrawerFooter class="grid grid-flow-col gap-2 text-center">
          Drawer footer content here
        </DrawerFooter>
      </DrawerContent>
    </Drawer>
  </ClientOnly>
</template>

<style scoped>
/** Drawer titles */
.titles {
  line-height: 0%;
  @apply text-left;
}

/** Drawer links */
a button {
  @apply rounded-none text-left text-xl;
}

.router-link-active button,
.router-link-exact-active button {
  @apply bg-accent text-accent-foreground;
}
</style>
