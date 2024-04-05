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

  devtools: { enabled: true },

  experimental: {
    componentIslands: true,
  },

  imports: {
    dirs: ["stores"],
  },

  modules: [
    [
      "@nuxtjs/color-mode",
      {
        classSuffix: "",
      },
    ],
    ["@nuxtjs/tailwindcss", {}],
    [
      "shadcn-nuxt",
      {
        prefix: "", // Prefix for all the imported component
        componentDir: "./src/components/ui", // @default "./components/ui"
      },
    ],
    [
      "@pinia/nuxt",
      {
        autoImports: ["defineStore", "acceptHMRUpdate"],
      },
    ],
  ],

  postcss: {
    plugins: {
      autoprefixer: {},
      "postcss-simple-vars": {},
      tailwindcss: {},
    },
  },

  srcDir: 'src/',
});
