<script setup lang="ts">
const layoutIsCentered = useAppConfig().layout.isCentered;
const layoutMaxWidth = layoutIsCentered
  ? useAppConfig().layout.maxWidth
  : "100%";
</script>

<template>
  <div class="layout min-h-full">
    <Header />

    <main>
      <slot />
    </main>

    <Footer />
  </div>
</template>

<style scoped>
.layout {
  display: grid;
  grid-template-columns: 1;
  grid-template-rows: auto 1fr auto;
}

/** CENTERED CONTENT */
.layout main > :nth-child(1) {
  width: 100%;
  max-width: v-bind(layoutMaxWidth);
  @apply mx-auto;
}
</style>
