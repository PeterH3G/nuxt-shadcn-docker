export default defineEventHandler(async (event) => {
  const ClientOnlys = ["FormLogin"];

  return {
    messages: {
      hello: "Hello from api/developer",
    },
    notes: [
      {
        title: `<ClientOnly>`,
        description: "Applied to components",
        components: ClientOnlys,
      },
    ],
  };
});
