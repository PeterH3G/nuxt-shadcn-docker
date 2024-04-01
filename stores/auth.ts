export const useAuthStore = defineStore("authStore", {
  state: () => ({
    isAuth: true,
    guest: {
      name: "Guest",
      icon: 'mdi:login',
    },
    user: {
      name: "User",
      icon: 'mdi:account',
    },
  }),

  getters: {},

  actions: {},
});

if (import.meta.hot) {
  import.meta.hot.accept(acceptHMRUpdate(useAuthStore, import.meta.hot));
}
