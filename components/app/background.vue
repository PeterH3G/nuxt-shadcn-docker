<script setup lang="ts">
defineProps<{
  showAvatar: boolean;
}>();

const avatar_url = useAppConfig().avatar_url;
const avatar_size = useAppConfig().background_avatar_size;
</script>

<template>
  <ClientOnly>
    <div
      v-bind:style="
        showAvatar
          ? {
              backgroundImage: `url(${avatar_url})`,
              backgroundSize: avatar_size,
            }
          : {}
      "
      class="background"
    >
      <slot />
    </div>
  </ClientOnly>
</template>

<style scoped>
.background {
  z-index: -1;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;

  background-repeat: no-repeat !important;
  background-position: center !important;
}
</style>
