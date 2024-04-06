<script setup lang="ts">
import { useForm } from "vee-validate";
import { toTypedSchema } from "@vee-validate/zod";
import * as z from "zod";

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

import { Icon } from "@iconify/vue";
import { storeToRefs } from "pinia";
const { authenticated } = storeToRefs(useAuthStore());
</script>

<template>
  <client-only>
    <Dialog>
      <DialogTrigger>
        <Button class="rounded-full hover:bg-secondary" variant="ghost">
          <Icon icon="mdi:login" />
        </Button>
      </DialogTrigger>

      <DialogContent class="dark:border-card dark:bg-card">
        <DialogHeader>
          <DialogTitle class="flex justify-start items-center">
            <Icon icon="mdi:login" />
            <span v-text="`Login`" />
          </DialogTitle>
          <DialogDescription>Login here</DialogDescription>
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
            <Button type="submit"> <Icon icon="mdi:login" />Login </Button>
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
