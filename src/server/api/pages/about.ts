export default defineEventHandler(() => {
  return {
    content: {
      title: "Hello from About!",
      description: "A nuxt-shadcn-bun project",
      descriptionIcon: 'mdi:github',
    },
  };
});