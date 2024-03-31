// https://nuxt.com/docs/api/configuration/nuxt-config
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
      link: [],
      style: [],
      script: [],
      noscript: [{ children: "JavaScript is required" }],
    },
    layoutTransition: { name: "layout", mode: "out-in" },
    pageTransition: { name: "page", mode: "out-in" },
  },

  devtools: { enabled: false },

  modules: ["@nuxtjs/color-mode", "@nuxtjs/tailwindcss", "shadcn-nuxt"],

  colorMode: {
    classSuffix: ''
  },

  postcss: {
    plugins: {
      "postcss-simple-vars": {},
    },
  },

  shadcn: {
    prefix: "", // Prefix for all the imported component
    componentDir: "./components/ui", // @default "./components/ui"
  },
});
