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

// FORM SETTINGS
const formSchema = toTypedSchema(
  z.object({
    username: z.string().min(2).max(50),
  })
);
const form = useForm({
  validationSchema: formSchema,
});
const submit = {
  text: "Submit",
  loadingText: "Submitting...",
};
const onSubmit = form.handleSubmit((values) => {
  console.log("Form submitted!", values);
});
</script>

<template>
  <ClientOnly>
    <form @submit="onSubmit" class="grid grid-rows-[1fr_auto] h-full gap-4">
      <FormField v-slot="{ componentField }" name="username">
        <FormItem>
          <FormLabel class="flex justify-start items-center">
            <Icon :icon="icon.username" />
            <strong v-text="`Username`" />
          </FormLabel>
          <FormControl>
            <Input type="text" placeholder="shadcn" v-bind="componentField" />
          </FormControl>
          <FormDescription> This is your public display name. </FormDescription>
          <FormMessage />
        </FormItem>
      </FormField>
      <Button type="submit">
        <Icon :icon="icon.submit" />
        <span v-text="submit.text" />
      </Button>
    </form>
  </ClientOnly>
</template>
