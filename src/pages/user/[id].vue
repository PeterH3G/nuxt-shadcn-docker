<script setup lang="ts">
import { Icon } from '@iconify/vue'

definePageMeta({
  name: 'User',
  icon: 'mdi:account',
  layout: 'user',
})

const user = useUserStore()
const name = useRoute().params.id

watchEffect(() => {
  user.setNewName(name as string)
})
</script>

<template>
  <Card>
    <CardHeader>
      <CardTitle class="title inline-flex items-center">
        <Icon icon="mdi:account" />Hi, {{ name }}!
      </CardTitle>
    </CardHeader>
    <CardContent>
      <div v-if="user.otherNames.length" class="aliases col-start-3 flex flex-col justify-center items-center">
        <Label class="inline-flex items-center"><Icon icon="mdi:account-multiple" /> Aliases:</Label>

        <router-link v-for="otherName in user.otherNames" :key="otherName" :to="`/user/${otherName}`" :replace="true">
          <Button variant="ghost">
            <Icon icon="mdi:account" />
            {{ otherName }}
          </Button>
        </router-link>
      </div>
      <PageCounter class="col-start-2 col-end-2" />
    </CardContent>
    <CardFooter>
      <NuxtLink id="back" class="inline-flex items-center p-2" to="/">
        <Icon icon="mdi:arrow-left" />
        Go back
      </NuxtLink>
    </CardFooter>
  </Card>
</template>

<style scoped>
.aliases {
  @apply bg-none;
}

a#back {
  @apply bg-muted hover:bg-accent rounded-md text-xs;
}
</style>
