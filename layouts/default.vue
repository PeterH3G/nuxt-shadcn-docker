<script setup lang="ts"></script>

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
</style>
