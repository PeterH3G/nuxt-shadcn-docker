FROM oven/bun:latest

# Working directory (optional, but good practice)
WORKDIR /app

# Copy package files (assuming they are in the project root)
COPY package*.json ./

# Install dependencies
RUN bun install --frozen-lockfile

# Mount your local project directory as a volume
VOLUME ["/src"]

# Copy initial source code (optional, for first-time build)
# Since you're mounting a volume, this might not be necessary on subsequent builds
COPY . .

EXPOSE 3000

CMD ["bun", "run", "build"]