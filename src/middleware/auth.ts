export default defineNuxtRouteMiddleware(() => {
  const { authenticated } = storeToRefs(useAuthStore())

  if (!authenticated.value)
    return navigateTo('/login')
})
