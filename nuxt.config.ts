export default defineNuxtConfig({
  app: {
    head: {
      meta: [
        {
          name: "viewport",
          content: "width=device-width, initial-scale=1",
        },
        {
          charset: "utf-8",
        },
      ],
      noscript: [{ children: "JavaScript is required" }],
    },
    layoutTransition: { name: "layout", mode: "out-in" },
    pageTransition: { name: "page", mode: "out-in" },
  },
  
  devtools: { enabled: true },

  experimental: {
    componentIslands: true,
  },

  modules: [
    "@nuxtjs/color-mode",
    "@nuxtjs/tailwindcss",
    "@pinia/nuxt",
    "shadcn-nuxt",
  ],
  colorMode: {
    classSuffix: "",
  },
  tailwindcss: {},
  pinia: {
    storesDirs: ["./src/stores/**"],
  },
  shadcn: {
    prefix: "", // Prefix for all the imported component
    componentDir: "./src/components/ui", // @default "./components/ui"
  },
  postcss: {
    plugins: {
      autoprefixer: {},
      tailwindcss: {},
    },
  },

  srcDir: "src/",
});
