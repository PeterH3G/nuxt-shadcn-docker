export default defineNuxtConfig({
  app: {
    head: {
      viewport: 'width=device-width,initial-scale=1',
      link: [{ rel: 'icon', href: '/favicon.ico', sizes: 'any' }],
      meta: [
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      ],
    },
  },

  devtools: { enabled: true },

  experimental: {
    componentIslands: true,
    payloadExtraction: false,
    renderJsonPayloads: true,
    typedPages: true,
  },

  modules: [
    '@nuxt/eslint',
    "@nuxtjs/color-mode",
    "@nuxtjs/tailwindcss",
    "@pinia/nuxt",
    '@vueuse/nuxt',
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
    prefix: "",
    componentDir: "./src/components/ui",
  },

  // Nitro server settings
  nitro: {
    esbuild: {
      options: {
        target: 'esnext',
      },
    },
    prerender: {
      crawlLinks: false,
      routes: ['/'],
    },
  },

  srcDir: "src/",
});
