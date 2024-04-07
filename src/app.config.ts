export default defineAppConfig({
  app: {
    name: "PeterH3G",
    description: "nuxt-shadcn-bun",
    repository: "nuxt-shadcn-bun",
  },

  layout: {
    isCentered: true, // false = maxWidth 100%
    maxWidth: "800px", // layout.isCentered = true
  },

  buttons: {
    developer: {
      show: true,
      iconOnly: false,
    },
    drawer: {
      show: true,
      iconOnly: false,
    },
    theme: {
      show: true,
      iconOnly: false,
    },
  },
});
