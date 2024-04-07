<script setup lang="ts">
import { Icon } from "@iconify/vue";

const page = {
  showFooter: false,
};
</script>

<template>
  <Card class="page">
    <CardHeader class="header">
      <CardTitle class="title">
        <Icon :icon="`${$route.meta.icon}`" />
        <span v-text="$route.meta.name" />
      </CardTitle>
      <CardDescription  class="description">Card Description</CardDescription>
    </CardHeader>
    <CardContent  class="content">
      <slot name="card-content" />
    </CardContent>
    <CardFooter  v-if="page.showFooter"  class="footer"> Card Footer </CardFooter>
  </Card>
</template>

<style scoped>
.page {
    @apply bg-card text-card-foreground;
}
.header {
    @apply flex justify-center items-center;
}
.title {
    @apply flex justify-start items-center;
}
.description {
    @apply flex justify-start items-center;
}
.content {
    @apply flex justify-center items-center;
}
.footer {
    @apply flex justify-center items-center;
}
</style>