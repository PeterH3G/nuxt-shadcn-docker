export default defineEventHandler(async (event) => {
  /** Temporary
    const githubApi = 'https://api.github.com/users/peterh3g'
    const githubData = await $fetch(githubApi)
  */

  return {
    home: {
      hello: "from api/pages",
    },
    about: {
      hello: "from api/pages",
      githubApi: "githubApi",
      githubData: "githubData",
    },
  };
});
