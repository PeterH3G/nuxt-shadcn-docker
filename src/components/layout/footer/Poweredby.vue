<script setup lang="ts">
import { Icon } from "@iconify/vue";

const poweredby = {
  label: "Powered By",
  labelIcon: 'mdi:flash',
  items: [
    {
      title: "Github Pages",
      href: "https://pages.github.com/",
      icon: "mdi:github",
    },
    { title: "Vue 3", href: "https://vuejs.org/", icon: "mdi:vuejs" },
    { title: "Nuxt 3", href: "https://nuxt.com/", icon: "mdi:nuxt" },
    {
      title: "Shadcn/vue",
      href: "https://www.shadcn-vue.com/",
      icon: "mdi:vuejs",
    },
    {
      title: "Tailwind CSS",
      href: "https://tailwindcss.com/",
      icon: "mdi:tailwind",
    },
  ],
};
</script>

<template>
  <div class="poweredby">
    <strong class="label">
      <Icon :icon="poweredby.labelIcon" />
      {{ poweredby.label }}
    </strong>
    <ul class="items">
      <li v-for="(item, i) in poweredby.items" :key="i">
        <Button :to="item.href" target="_blank" :variant="`ghost`">
          <Icon :icon="item.icon" />
          <span v-text="item.title" />
        </Button>
      </li>
    </ul>
  </div>
</template>
