<script setup lang="ts">
import { Icon } from "@iconify/vue";

const props = defineProps<{
  data?: any;
}>();

const card = {
  showDescription: true,
  showFooter: false,
};
</script>

<template>
  <Card>
    <CardHeader>
      <CardTitle class="flex justify-between items-center">
        <div class="prepend flex justify-start items-center">
          <Icon :icon="`${$route.meta.icon}`" />
          <span v-text="$route.meta.title" />
        </div>
        <div class="append flex justify-end items-center">
          <DevApi :data="props.data" />
        </div>
      </CardTitle>
      <CardDescription
        v-text="card.showDescription ? $route.meta.description : ''"
      />
    </CardHeader>

    <CardContent> </CardContent>

    <CardFooter v-if="card.showFooter"> Card footer </CardFooter>
  </Card>
</template>
