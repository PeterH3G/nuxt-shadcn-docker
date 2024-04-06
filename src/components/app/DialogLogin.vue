<script setup lang="ts">
import { Icon } from "@iconify/vue";

// ICON SETTINGS
const icon = {
  trigger: "mdi:login",
  username: "mdi:account",
  submit: "mdi:send",
};
const iconOnly = ref(true);

// DIALOG SETTINGS
const dialog = <any>{
  trigger: {
    button: {
      icon: icon.trigger,
      variant: "outline",
      text: "Login",
    },
  },
  title: {
    icon: icon.trigger,
    text: "Login",
  },
  description: "You can login here",
  menuLabel: {
    text: "Login",
  },
  footer: {
    button: {
      icon: icon.submit,
      text: "Submit",
    },
  },
};
</script>

<template>
  <client-only>
    <Dialog>
      <DialogTrigger>
        <Button :variant="dialog.trigger.button.variant">
          <Icon :icon="dialog.trigger.button.icon" />
          <span
            :class="iconOnly ? `sr-only` : ``"
            v-text="dialog.trigger.button.text"
          />
        </Button>
      </DialogTrigger>

      <DialogContent class="dark:border-card dark:bg-card">
        <DialogHeader>
          <DialogTitle class="flex justify-start items-center">
            <Icon :icon="dialog.title.icon" />
            <span v-text="dialog.title.text" />
          </DialogTitle>
          <DialogDescription v-text="dialog.dialogDescription" />
        </DialogHeader>

        <DialogFooter> </DialogFooter>
      </DialogContent>
    </Dialog>
  </client-only>
</template>
