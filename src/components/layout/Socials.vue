<script setup lang="ts">
import { Icon } from "@iconify/vue";

const socials = {
  label: "Socials",
  labelIcon: "mdi:account-multiple",
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
</script>

<template>
  <div class="socials">
    <strong class="label">
      <Icon :icon="socials.labelIcon" />
      {{ socials.label }}
    </strong>
    <ul class="items">
      <li v-for="(item, i) in socials.items" :key="i">
        <Button :href="item.href" target="_blank" :variant="`ghost`">
          <Icon :icon="item.icon" />
          <span v-text="item.title" />
        </Button>
      </li>
    </ul>
  </div>
</template>
