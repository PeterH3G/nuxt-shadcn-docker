export default defineEventHandler(() => {
  return {
    content: {
      title: "Hello from Dashboard!",
      description: "A nuxt-shadcn-bun project",
      descriptionIcon: 'mdi:github',
    },
  };
});