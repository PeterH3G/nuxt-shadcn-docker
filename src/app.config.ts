export default defineAppConfig({
  app: {
    name: "PeterH3G",
    description: "nuxt-shadcn-bun",
    repository: "nuxt-shadcn-bun",
  },

  layout: {
    // Layout Positioning
    isCentered: true, // false = maxWidth 100%
    maxWidth: "800px", // layout.isCentered = true

    // Layout buttons
    global: {
      button: {
        iconOnly: true,
      },
    },
    buttonDeveloper: {
      show: true,
      iconOnly: false,
    },
    buttonDrawer: {
      show: true,
      iconOnly: false,
    },
    buttonTheme: {
      show: true,
      iconOnly: false,
    },
  },
});
