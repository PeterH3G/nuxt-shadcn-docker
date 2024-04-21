<script setup lang="ts">
const linkLabel = 'Go Home'
</script>

<template>
  <Card class="container page mt-6 grid grid-rows-2 gap-6 justify-center items-center">
    <strong class="message">This is not the page you are looking for!</strong>

    <NuxtLink to="/">
      <Button class="message flex w-full" variant="default">
        <strong v-text="linkLabel" />
      </Button>
    </NuxtLink>
  </Card>
</template>

<style scoped>
strong.message {
  @apply text-2xl;
}
button.message {
  @apply bg-muted text-muted-foreground;
}
</style>
