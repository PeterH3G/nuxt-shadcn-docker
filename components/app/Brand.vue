<script setup lang="ts">
const brandTitle = useAppConfig().brand.title;
const brandSubtitle = useAppConfig().brand.subtitle;
</script>

<template>
  <NuxtLink class="brand-link" href="/">
    <img class="logo" src="/avatar.png" />
    <div class="titles">
      <strong class="title" v-text="brandTitle" />
      <span class="subtitle" v-text="brandSubtitle" />
    </div>
  </NuxtLink>
</template>

<style scoped>
.brand-link {
  @apply flex items-center;
}
img.logo {
  @apply h-12;
}
.titles {
  @apply flex flex-col;
}
.title {
  font-size: 1rem;
}
.subtitle {
  font-size: 0.8rem;
}
</style>
