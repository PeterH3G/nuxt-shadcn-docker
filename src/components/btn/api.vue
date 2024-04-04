<script setup lang="ts">
import { Icon } from "@iconify/vue";

defineProps<{
  data?: any;
}>();

const api = {
  icon: "mdi:api",
  label: "Data",
};
</script>

<template>
  <Dialog>
    <DialogTrigger class="flex justify-center items-center">
      <client-only>
        <Button variant="ghost">
          <Icon :icon="api.icon" />
          <span v-text="api.label" />
        </Button>
      </client-only>
    </DialogTrigger>
    <DialogContent class="dark:border-card dark:bg-card">
      <DialogHeader>
        <DialogTitle class="flex justify-start items-center">
          <Icon :icon="api.icon" />
          <span v-text="api.label + ` ${$route.meta.title} Page`" />
        </DialogTitle>
        <DialogDescription>
          <pre v-text="data ? data : `no data`" />
        </DialogDescription>
      </DialogHeader>
      <DialogFooter></DialogFooter>
    </DialogContent>
  </Dialog>
</template>
