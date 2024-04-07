export default defineEventHandler(async (event) => {
  return {
    messages: {
      hello: "What's up?",
    },
    content: {
      title: "About api title",
    },
  };
});
