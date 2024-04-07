<script setup lang="ts">
const page = {
  showFooter: false,
};
</script>

<template>
  <Card class="page">
    <CardHeader class="header">
      <CardTitle class="title">
        <slot name="page-title" />
      </CardTitle>
      <CardDescription class="description">
        <slot name="page-description" />
      </CardDescription>
    </CardHeader>

    <CardContent class="content">
      <div class="prepend">
        <slot name="content-prepend" />
      </div>
      <slot />
      <div class="append">
        <slot name="content-append" />
      </div>
    </CardContent>

    <CardFooter v-if="page.showFooter" class="footer"> Card Footer </CardFooter>
  </Card>
</template>

<style scoped>
/** Page Card Components */
.page {
  @apply bg-card text-card-foreground;
}
.header {
  @apply grid grid-cols-2;
}
.title {
  @apply inline-flex justify-start items-center;
}
.description {
  @apply inline-flex justify-end items-center;
}
.content {
  @apply grid grid-cols-2 gap-4;
}
.footer {
  @apply flex justify-center items-center;
}

/**  Custom Classes */
.content .prepend,
.content .append {
  @apply rounded-md;
  @apply flex flex-col;
  @apply p-4;
}
.content .append {
  @apply bg-muted text-muted-foreground;
}
</style>
