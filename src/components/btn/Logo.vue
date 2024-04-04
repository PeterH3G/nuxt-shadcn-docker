<script setup lang="ts">
const avatar_url = "https://avatars.githubusercontent.com/u/500234?v=4";
const brandTitle = useAppConfig().brand.title;
const brandSubtitle = useAppConfig().brand.subtitle;
</script>

<template>
  <NuxtLink class="brand-link" href="/">
    <img class="logo" :src="avatar_url" />
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
  font-size: 0.9rem;
}
</style>
