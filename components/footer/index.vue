<script setup lang="ts"></script>

<template>
  <footer>
    <div class="content">
      <div style="grid-area: footLeft">left</div>
      <AppBrand style="grid-area: footCenter" />
      <div style="grid-area: footRight">right</div>
      <div style="grid-area: footDisclaimer">disclaimer here</div>
    </div>
  </footer>
</template>

<style scoped>
footer {
  @apply flex justify-center items-center py-2;
}

.content {
  display: grid;
  grid-template-columns: 3;
  grid-template-rows: 2;
  grid-template-areas: "footLeft footCenter footRight" "footDisclaimer footDisclaimer footDisclaimer";

  justify-content: center;
  align-items: center;
}
</style>
