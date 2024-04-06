<script setup lang="ts">
import { Icon } from "@iconify/vue";
import { useForm } from "vee-validate";
import { toTypedSchema } from "@vee-validate/zod";
import * as z from "zod";

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

// FORM SETTINGS
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

        <form @submit="onSubmit">
          <FormField v-slot="{ componentField }" name="username">
            <FormItem>
              <FormLabel class="form-label">
                <Icon :icon="icon.username" />
                <strong v-text="`Username`" />
              </FormLabel>
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
              <Icon :icon="dialog.footer.button.icon" />{{
                dialog.footer.button.text
              }}</Button
            >
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  </client-only>
</template>

<style scoped>
.form-label {
  @apply flex justify-start items-center;
}
</style>
