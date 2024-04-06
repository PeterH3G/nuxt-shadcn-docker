<script setup lang="ts">
import { Icon } from "@iconify/vue";
import { useForm } from "vee-validate";
import { toTypedSchema } from "@vee-validate/zod";
import * as z from "zod";

const icon = {
  menu: "mdi:login",
};

const config = <any>{
  dialogButton: {
    variant: "outline",
    text: "Toggle theme",
  },
  dialogTitle: "Login",
  dialogDescription: "You can login here",
  menuLabel: {
    show: true,
    text: "Theme Options",
  },
};

const formSchema = toTypedSchema(
  z.object({
    username: z.string().min(2).max(50),
  })
);

const form = useForm({
  validationSchema: formSchema,
});

const onSubmit = form.handleSubmit((values) => {
  console.log("Form submitted!", values);
});
</script>

<template>
  <client-only>
    <Dialog>
      <DialogTrigger>
        <Button :variant="config.dialogButton.variant">
          <Icon :icon="icon.menu" />
        </Button>
      </DialogTrigger>

      <DialogContent class="dark:border-card dark:bg-card">
        <DialogHeader>
          <DialogTitle class="flex justify-start items-center">
            <Icon :icon="icon.menu" />
            <span v-text="config.dialogTitle" />
          </DialogTitle>
          <DialogDescription v-text="config.dialogDescription" />
        </DialogHeader>

        <form @submit="onSubmit">
          <FormField v-slot="{ componentField }" name="username">
            <FormItem>
              <FormLabel>Username</FormLabel>
              <FormControl>
                <Input
                  type="text"
                  placeholder="shadcn"
                  v-bind="componentField"
                />
              </FormControl>
              <FormDescription>
                This is your public display name.
              </FormDescription>
              <FormMessage />
            </FormItem>
          </FormField>

          <DialogFooter>
            <Button type="submit">
              <Icon :icon="icon.menu" />{{ config.buttonText }}</Button
            >
          </DialogFooter>
        </form>
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
