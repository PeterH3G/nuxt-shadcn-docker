<script setup lang="ts">
import { Icon } from '@iconify/vue'
import { appDescription, appName } from '~/constants'

const logoSize = ref(40)

const getOrder = (route: any) => route.meta?.order ?? 0
const navigation = [...useRouter().options.routes].filter(route =>
  !!route.meta && 'order' in route.meta).sort((a, b) => getOrder(a) - getOrder(b))
</script>

<template>
  <header class="inline-flex justify-between">
    <div class="prepend grid grid-cols-[auto_1fr] gap-2">
      <AppLogo link href="/" :size="logoSize" />

      <div id="titles" class="grid grid-flow-row">
        <strong class="text-sm" v-html="appName" />
        <span class="text-xs" v-html="appDescription" />
      </div>
    </div>

    <div class="append grid grid-flow-col gap-2 sm:inline-flex justify-end items-center">
      <nav>
        <NuxtLink v-for="(link, i) in navigation" :key="i" :href="link.path">
          <Button class="inline-flex items-center mr-1" variant="ghost">
            <Icon :icon="`${link.meta?.icon}`" />
            {{ link.name }}
          </Button>
        </NuxtLink>
      </nav>

      <PageViews />
      <AppTheme />
      <AppDrawer :navigation="navigation" />
    </div>
  </header>
</template>
