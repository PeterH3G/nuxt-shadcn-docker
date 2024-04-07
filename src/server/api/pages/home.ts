export default defineEventHandler(() => {
  return {
    content: {
      title: "Hello Universe!",
      description: "A nuxt-shadcn-bun project",
      descriptionIcon: 'mdi:github',
    },
  };
});