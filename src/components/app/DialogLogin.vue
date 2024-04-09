<script setup lang="ts">
import { Icon } from "@iconify/vue";

// ICON SETTINGS
const icon = {
  trigger: "mdi:login",
  username: "mdi:account",
  submit: "mdi:send",
};
const iconOnly = ref(true);

// TAILWIND BINDINGS
const tw = <any>{
  buttonTrigger: {
    class: "",
    variant: "outline",
  },
};

// DIALOG SETTINGS
const dialog = <any>{
  trigger: {
    text: "Login",
    icon: icon.trigger,
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
        <Button v-bind="tw.buttonTrigger">
          <Icon :icon="dialog.trigger.icon" />
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
