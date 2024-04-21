# nuxt-shadcn-docker

A Nuxt 3-Shadcn setup for Docker deployment.
<br>
Build with [Bun.sh](https://bun.sh).

## Scripts

**Make 'gitpush' script executable for Bun**

```bash
chmod +x ./scripts/gitpush.sh
```

**Push to Github with Bun**

```bash
bun run push
```

## Development

**Install the dependencies**

```bash
bash bun install
```

**Start Development Server**

```bash
bun run dev
```

Development server: [localhost:3000](http://localhost:3000)

<br>

**Build the application for production**

```bash
bun run build
```

**Locally preview production build**

```bash
bun run preview
```

<br>

## [Docker Application](https://docker.com)

**Start Docker Application**

```bash
bun run docker
```

Docker Server: [localhost:3000](http://localhost:3000)

<br>

**Build Docker Application**

```bash
bun run docker-build
```

<br>

## Project Documentation

- <a href="https://bun.sh" target="_blank"><b>Bun</b>: Develop, test, run, and bundle JavaScript & TypeScript projects</a>
- <a href="https://nuxt.com" target="_blank"><b>Nuxt 3</b>: The Intuitive Vue Framework</a>
- <a href="https://nuxt.com/docs/api/configuration/nuxt-config" target="_blank"><b>Nuxt 3 Application</b>: nuxt.config.ts</a>
- <a href="https://nuxt.com/docs/getting-started/deployment" target="_blank"><b>Nuxt 3 Application</b> deployment documentation</a>
- <a href="https://tailwindcss.com/" target="_blank"><b>TailwindCSS</b>: Rapidly build modern websites</a>
- <a href="https://shadcn-vue.com" target="_blank"><b>Shadcn/vue</b>: Shadcn component library for Vue</a>
- <a href="https://www.radix-vue.com/" target="_blank"><b>Radix Vue</b>: Vue Port of Radix UI</a>
- <a href="https://iconify.design/" target="_blank"><b>Iconify</b>: The easiest way to use icons in your projects</a>
