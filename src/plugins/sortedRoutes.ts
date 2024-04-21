export default defineNuxtPlugin(() => {
  const getOrder = (route: any) => route.meta?.order ?? 0
  const sortedRoutes = [...useRouter().options.routes]
    .sort((a: any, b: any) => getOrder(a) - getOrder(b))
    .filter(route => getOrder(route) > -1)

  return {
    provide: {
      sortedRoutes,
    },
  }
})
