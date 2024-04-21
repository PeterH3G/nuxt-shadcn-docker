<script setup lang="ts">
import { Icon } from '@iconify/vue'
import { appDescription, appName } from '~/constants'

const logoSize = ref(40)

const getOrder = (route: any) => route.meta?.order ?? 0
const navigation = [...useRouter().options.routes].filter(route =>
  !!route.meta && 'order' in route.meta).sort((a, b) => getOrder(a) - getOrder(b))

const appThemeText = 'Theme'
</script>

<template>
  <header class="grid grid-cols-[auto_1fr_auto] gap-2 items-center">
    <AppLogo link href="/" :size="logoSize" />

    <div id="titles" class="grid grid-flow-row">
      <strong class="text-sm" v-html="appName" />
      <span class="text-xs" v-html="appDescription" />
    </div>

    <div class="hidden sm:flex justify-end items-center">
      <nav class="inline-flex items-center">
        <NuxtLink v-for="(link, i) in navigation" :key="i" :href="link.path">
          <Button class="inline-flex items-center mr-1" variant="default">
            <Icon :icon="`${link.meta?.icon}`" />
            {{ link.name }}
          </Button>
        </NuxtLink>
      </nav>
    </div>

    <div class="append grid grid-flow-col gap-2">
      <PageViews />

      <AppTheme>
        {{ appThemeText }}
      </AppTheme>

      <AppDrawer :navigation="navigation" />
    </div>
  </header>
</template>