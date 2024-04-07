export default defineEventHandler(async (event) => {
  return {
    messages: {
      hello: "What's up?",
    },
    content: {
      title: "Dashboard api title",
    },
  };
});
