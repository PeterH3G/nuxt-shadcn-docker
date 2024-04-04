FROM oven/bun:latest as base
WORKDIR /usr/src/app

FROM base AS install-dev
RUN mkdir -p /temp/dev
COPY ./package.json /temp/dev/
COPY ./bun.lockb /temp/dev/
RUN cd /temp/dev && bun install --frozen-lockfile

FROM base AS install-prod
RUN mkdir -p /temp/prod
COPY ./package.json /temp/prod/
COPY ./bun.lockb /temp/prod/
RUN cd /temp/prod && bun install --frozen-lockfile --generate

FROM base AS copy-dev
COPY --from=install-dev /temp/dev/node_modules node_modules
COPY --from=install-dev /temp/dev/package.json .
COPY --from=install-dev /temp/dev/bun.lockb .
COPY . .

ENV NODE_ENV=production
RUN bun run build

FROM base AS copy-prod
COPY --from=install-prod /temp/prod/node_modules node_modules
COPY --from=copy-dev /usr/src/app/.nuxt .nuxt
COPY --from=copy-dev /usr/src/app/package.json .
COPY --from=copy-dev /usr/src/app/.output .output
COPY --from=copy-dev /usr/src/app/.nuxt ..nuxt

USER bun
ENTRYPOINT [ "bun", "run", ".output/server/index.mjs" ]