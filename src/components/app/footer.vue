<script setup lang="ts">
import { appName } from '~/constants'
</script>

<template>
  <footer class="grid grid-flow-rows items-center">
    <Label class="disclaimer inline-flex justify-center items-center text-center">
      <AppLogo class="mr-1" />
      {{ appName }} 2024 | All rights reserved
    </Label>
  </footer>
</template>