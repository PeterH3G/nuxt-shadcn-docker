export default defineEventHandler(() => {
  return {
    hero: {
      attrs: {
        class: "h-full grid",
      },
      content: {
        title: "Login here",
        description: "nuxt-shadcn-bun",
        descriptionIcon: "mdi:github",
      },
    },
  };
});
