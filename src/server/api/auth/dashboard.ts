export default defineEventHandler(() => {
  return {
    content: {
      title: "Hello from Dashboard!",
      description: "nuxt-shadcn-bun",
      descriptionIcon: 'mdi:github',
    },
  };
});