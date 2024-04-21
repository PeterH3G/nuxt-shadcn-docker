<script setup lang="ts">
const name = ref('')

const router = useRouter()
function go() {
  if (name.value)
    router.push(`/user/${encodeURIComponent(name.value)}`)
}

const pageTitle = 'Hello Universe!'
const inputPlaceholder = `What's your name?`
</script>

<template>
  <div class="grid grid-flow-row gap-6 my-6 justify-center items-start">
    <h1 class="title">
      {{ pageTitle }}
    </h1>

    <Input
      id="input" v-model="name" :placeholder="inputPlaceholder" type="text" autocomplete="off"
      @keydown.enter="go"
    />

    <Button
      :class="!name ? 'name-no' : 'name-yes'" :disabled="!name" :variant="!name ? 'outline' : 'ghost'"
      @click="go"
    >
      {{ name ? 'GO' : 'Enter your name to proceed' }}
    </Button>
  </div>
</template>

<style scoped>
.title {
  @apply text-4xl text-center;
}

#input {
  @apply bg-accent text-accent-foreground;
  @apply text-center text-2xl animate-pulse;
}

button.name-no {
  @apply bg-none text-accent-foreground;
}

button.name-yes {
  @apply bg-primary text-primary-foreground;
}
</style>
