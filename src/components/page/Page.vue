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
          <div class="prepend">  
      <slot name="content-prepend" />
          </div>
          <div class="append">
      <slot name="content-append" />
          </div>
    </CardContent>
    <CardFooter  v-if="page.showFooter"  class="footer"> Card Footer </CardFooter>
  </Card>
</template>

<style scoped>
/** Page Card Components */
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
  @apply grid grid-cols-2 gap-4;
  @apply px-4;
}
.footer {
    @apply flex justify-center items-center;
}

/**  Custom Classes */
.content .prepend,
.content .append {
  @apply rounded-md;
  @apply flex flex-col;
}
.content .append {
  @apply bg-muted text-muted-foreground;
}
</style>