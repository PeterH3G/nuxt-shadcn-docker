<script setup lang="ts">
import { Icon } from "@iconify/vue";
import { Button } from "@/components/ui/button";

const showLabel = ref(false);
const label = "Login";
</script>

<template>
  <client-only>
    <Dialog>
      <DialogTrigger>
        <Button variant="outline">
          <Icon icon="mdi:login" />
          {{ showLabel ? label : null }}
        </Button>
      </DialogTrigger>

      <DialogContent class="dark:border-card dark:bg-card">
        <DialogHeader>
          <DialogTitle>
            <Icon icon="mdi:login" />
            User Login
          </DialogTitle>
          <DialogDescription> User can login here. </DialogDescription>
        </DialogHeader>

        <DialogFooter> Save changes </DialogFooter>
      </DialogContent>
    </Dialog>
  </client-only>
</template>

<style>
@keyframes fadeIn {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}

@keyframes fadeOut {
  from {
    opacity: 1;
  }
  to {
    opacity: 0;
  }
}

.DialogOverlay[data-state="open"],
.DialogContent[data-state="open"] {
  animation: fadeIn 4000ms ease-out;
}

.DialogOverlay[data-state="closed"],
.DialogContent[data-state="closed"] {
  animation: fadeOut 4000ms ease-in;
}
</style>
