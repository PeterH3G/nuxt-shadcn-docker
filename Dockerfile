FROM imbios/bun-node:latest-current-slim as base
WORKDIR /usr/src/app
CMD [ "chmod 755 /usr/src/app" ]
RUN chown -Rh $user:$user /usr/src/app

# install dependencies into temp directory
# this will cache them and speed up future builds
FROM base AS install
RUN mkdir -p /temp/dev
COPY package.json bun.lockb /temp/dev/
RUN cd /temp/dev && bun install --frozen-lockfile

# install with --production (exclude devDependencies)
RUN mkdir -p /temp/prod
COPY package.json bun.lockb /temp/prod/
RUN cd /temp/prod && bun install --frozen-lockfile --production

# copy production dependencies and source code into final image
FROM base AS release
COPY --from=install /temp/dev/node_modules node_modules
COPY --from=install /temp/dev/package.json .
COPY . .

RUN bun run build

# run the app
USER $user
EXPOSE 3000/tcp
ENTRYPOINT [ "node", ".output/server/index.mjs" ]