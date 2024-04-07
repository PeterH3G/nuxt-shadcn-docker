export default defineEventHandler(() => {
  return {
    messages: {
      hello: "What's up?",
    },
    content: {
      title: "Home api title",
    },
  };
});