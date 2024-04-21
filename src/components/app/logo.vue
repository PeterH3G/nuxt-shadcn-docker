<script setup lang="ts">
import { appLogoURL } from '~/constants'

const props = defineProps({
  size: {
    type: Number,
    default: 24,
    required: false,
  },
  link: {
    type: Boolean,
    default: false,
    required: false,
  },
})
</script>

<template>
  <NuxtLink
    v-if="props.link" id="logo"
  >
    <Button
      class="flex"
      :style="{
        backgroundImage: `url(${appLogoURL})`,
        width: `${$props.size}px`,
        height: `${$props.size}px`,
      }"
      variant="ghost"
    />
  </NuxtLink>
  <img v-else id="logo" :width="props.size" :src="appLogoURL">
</template>

<style scoped>
a#logo button {
  background-repeat: no-repeat;
  background-position: center center;
  background-size: contain;

  @apply rounded-full hover:ring;
}
</style>
