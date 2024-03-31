<script setup lang="ts">
import { Icon } from "@iconify/vue";

const iconOnly = ref(true);

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
    <div class="container">
      <div class="foot left">
        <div class="content">
          <strong class="label" v-text="footLeft.label" />
          <ul class="items">
            <li v-for="(item, i) in footLeft.items" :key="i">
              <Button :to="item.href" target="_blank" :variant="`ghost`">
                <Icon :icon="item.icon" />
                <span v-if="!iconOnly" v-text="item.title" />
              </Button>
            </li>
          </ul>
        </div>
      </div>
      <div class="foot center">
        <div class="content">
          <AppBrand />
        </div>
      </div>
      <div class="foot right">
        <div class="content">
          <strong class="label" v-text="footRight.label" />
          <ul class="items">
            <li v-for="(item, i) in footRight.items" :key="i">
              <Button :href="item.href" target="_blank" :variant="`ghost`">
                <Icon :icon="item.icon" />
                <span v-if="!iconOnly" v-text="item.title" />
              </Button>
            </li>
          </ul>
        </div>
      </div>

      <div class="foot disclaimer" v-html="disclaimer" />
    </div>
  </footer>
</template>

<style scoped>
footer {
  @apply flex justify-center items-center py-2;
}

div.container {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-template-rows: 2;
  grid-template-areas: "left center right" "disclaimer disclaimer disclaimer";
  grid-gap: 10px;
}

div.foot.left {
  grid-area: left;
}

div.foot.center {
  grid-area: center;
}

div.foot.right {
  grid-area: right;
}

div.foot {
  @apply items-center justify-center;
}

div.foot .content {
  @apply flex flex-col items-center;
  @apply bg-card rounded-md py-4 h-full;
}

div.foot strong.label {
  @apply text-center uppercase;
}

div.foot ul.items {
  @apply flex flex-wrap justify-center items-center;
}

div.foot.center .content {
  @apply justify-center;
}

div.foot.disclaimer {
  grid-area: disclaimer;
  @apply text-center text-xs;
}
</style>
