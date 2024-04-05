export const useLayoutStore = defineStore({
  id: 'layout',
  state: () => ({
    globals: {
      maxWidth: useAppConfig().layout.isCentered
        ? useAppConfig().layout.maxWidth
        : "100%"
    },
    header: {
      class: 'bg-gray-200 dark:bg-gray-900'
    }
  }),
  getters: {},
  actions: {},
});