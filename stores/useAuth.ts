export const useAuthStore = defineStore({
  id: 'auth',
  state: () => ({
    isLoggedIn: false,
    guest: {
      name: "Plugin",
      icon: 'mdi:plug',
    },
    user: {
      name: "User",
      icon: 'mdi:account',
    },
  }),

  getters: {},

  actions: {
    reset() {
      this.isLoggedIn = false;
    },
  },
});