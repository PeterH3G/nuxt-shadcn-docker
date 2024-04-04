<script setup lang="ts">
const disclaimer = "&reg; All rights reserved";
</script>

<template>
  <footer>
    <div class="container">
      <div class="foot left">
        <FooterPoweredby />
      </div>
      <div class="foot right">
        <FooterSocials />
      </div>

      <div class="foot disclaimer" v-html="disclaimer" />
    </div>
  </footer>
</template>

<style>
footer {
  @apply flex justify-center items-center py-2;
}
footer .container {
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 2;
  grid-template-areas: "left right" "disclaimer disclaimer";
  grid-gap: 10px;
}
footer .foot.left {
  grid-area: left;
}
footer .foot.right {
  grid-area: right;
}
footer .foot.disclaimer {
  grid-area: disclaimer;
  @apply text-center text-xs;
}

footer .foot {
  @apply items-center justify-center;
}
footer .foot .content {
  @apply flex flex-col items-center;
  @apply bg-card rounded-md py-4 h-full;
}
footer .foot strong.label {
  @apply text-center uppercase;
}
footer .foot ul.items {
  @apply flex flex-wrap justify-center items-center;
}
footer .foot.center .content {
  @apply justify-center;
}
</style>
