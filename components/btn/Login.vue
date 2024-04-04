<script setup lang="ts">
import { Icon } from "@iconify/vue";
import { storeToRefs } from "pinia";

const { guest } = storeToRefs(useAuthStore());

const button = <any>{
  icon: guest.value.icon,
  text: guest.value.name,
  variant: "outline",
};

const dialog = {
  icon: guest.value.icon,
  description: "You can login here",
  title: guest.value.name + ` Login`,
  loginButtontext: "Log me in!",
};
</script>

<template>
  <client-only>
    <Dialog>
      <DialogTrigger>
        <Button :variant="button.variant">
          <Icon :icon="button.icon" />
          <strong v-text="button.text" />
        </Button>
      </DialogTrigger>

      <DialogContent class="dark:border-card dark:bg-card">
        <DialogHeader>
          <DialogTitle class="flex justify-start items-center">
            <Icon :icon="dialog.icon" />
            <span v-text="dialog.title" />
          </DialogTitle>
          <DialogDescription>{{ dialog.description }} </DialogDescription>
        </DialogHeader>

        <DialogFooter>
          <Button variant="ghost">
            <Icon :icon="button.icon" />
            {{ dialog.loginButtontext }}
          </Button>
        </DialogFooter>
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
