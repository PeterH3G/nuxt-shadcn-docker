<script setup lang="ts">
import { Icon } from "@iconify/vue";

const footLeft = {
  label: "Powered By",
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
const footRight = {
  label: "My socials",
  items: [
    {
      title: "Github",
      href: "https://github.com/peterh3g",
      icon: "mdi:github",
    },
    {
      title: "LinkedIn",
      href: "https://linkedin.com/peterh3g",
      icon: "mdi:linkedin",
    },
  ],
};

const disclaimer = "&reg; All rights reserved";
</script>

<template>
  <footer>
    <div class="content">
      <div class="foot left">
        <strong class="label" v-text="footLeft.label" />
        <ul class="items">
          <li v-for="(item, i) in footLeft.items" :key="i">
            <Button :to="item.href" target="_blank" :variant="`ghost`">
              <Icon :icon="item.icon" />
              <span v-text="item.title" />
            </Button>
          </li>
        </ul>
      </div>

      <AppBrand class="foot center" />

      <div class="foot right">
        <strong class="label" v-text="footRight.label" />
        <ul class="items">
          <li v-for="(item, i) in footRight.items" :key="i">
            <Button :href="item.href" target="_blank" :variant="`ghost`">
              <Icon :icon="item.icon" />
              <span v-text="item.title" />
            </Button>
          </li>
        </ul>
      </div>

      <div class="foot disclaimer" v-html="disclaimer" />
    </div>
  </footer>
</template>

<style scoped>
footer {
  @apply flex justify-center items-center py-2;
}

.content {
  display: grid;
  grid-template-columns: 1fr auto 1fr;
  grid-template-rows: 2;
  grid-template-areas: "left center right" "disclaimer disclaimer disclaimer";
  width: 100%;
}

strong.label {
  text-transform: uppercase;
}

ul.items {
  @apply flex flex-wrap justify-center items-center;
}

.foot {
  display: flex;
  flex-direction: column;
  @apply text-center items-center justify-start;
}
.foot.left {
  grid-area: left;
}
.foot.center {
  grid-area: center;
}
.foot.right {
  grid-area: right;
}
.foot.disclaimer {
  grid-area: disclaimer;
  font-size: small;

  @apply pt-2 text-center;
}
</style>
