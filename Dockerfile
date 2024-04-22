FROM oven/bun:latest

# Copy the lock and package file
COPY bun.lockb . 
COPY package.json . 

# Install dependencies
RUN bun install --frozen-lockfile

# Copy your source code
COPY . . 

RUN bun run generate

EXPOSE 3000

CMD ["bun", ".output/server/index.mjs"]