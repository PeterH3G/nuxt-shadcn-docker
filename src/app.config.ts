export default defineAppConfig({
  app: {
    name: 'PeterH3G',
    description: 'Web Developer',
    repository: 'nuxt-shadcn-bun',
  },

  layout: {
    // Default layout configuration
    default: {
      isCentered: true,
      maxWidth: '800px', // if isCentered false
    },

    // Global component configurations
    global: {
      button: {
        iconOnly: true,
      },
    },

    // Individual component configurations
    buttonDeveloper: {
      show: true,
      iconOnly: true,
    },
    buttonDrawer: {
      show: true,
      iconOnly: false,
    },
    buttonTheme: {
      show: true,
      iconOnly: true,
    },
  },
})
