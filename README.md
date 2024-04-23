<p align="center">
    <a href="https://github.com/PeterH3G/nuxt-shadcn-docker" target="_blank">PeterH3G/nuxt-shadcn-docker</a>
</p>
<p align="center">
    <img src="https://avatars.githubusercontent.com/u/500234?v=4" width="200"/>
</p>
<h1 align="center">
    <a href="https://nuxt.com" target="_blank">Nuxt 3</a>/<a href="https://www.shadcn-vue.com/" target="_blank">Shadcn</a> with <a href="https://www.docker.com/" target="_blank">Docker</a>
</h1>

## Development

**Install the dependencies**

```bash
bash bun install
```

**Install error?**
Try to disable 'nuxt telemetry':

```bash
bunx @nuxt/telemetry disable -g
```

**Start Development Server**

```bash
bun run dev
```

Development server: [localhost:3000](http://localhost:3000)

## Production

**Build the application for production**

```bash
bun run build
```

**Locally preview production build**

```bash
bun run preview
```

## Docker

**Run docker environment**

```bash
bun run docker
```

**Build docker containers**

```bash
bun run docker-build
```

Docker nginx server: [localhost](http://localhost)
