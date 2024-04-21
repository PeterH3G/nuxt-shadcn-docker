// Nitro is build on H3 (https://jdocs.io/h3)
import { joinURL } from 'ufo'

export default defineEventHandler(async (event) => {
// runtimeconfig proxy url
  const jsonplaceholderUrl = useRuntimeConfig().jsonplaceholderUrl
  const path = event.path.replace(/^\/api\//, '') // /api/user -> users
  const target = joinURL(jsonplaceholderUrl, path)

  // proxyRequest helper from H3
  return proxyRequest(event, target)
})
