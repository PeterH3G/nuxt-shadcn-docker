<script setup lang="ts"></script>

<template>
  <slot />
</template>

<style>
/** BODY BACKGROUND STYLE */
body.bg-avatar {
  background-image: url("https://avatars.githubusercontent.com/u/500234?v=4");
  background-size: 25%;
  background-position: center center;
  background-repeat: no-repeat;
}

/** NUXT BLOCK STYLE */
#__nuxt {
  animation: color-transition 10s ease-in-out infinite alternate;
}
/* Animation definition */
@keyframes color-transition {
  0% {
    background-color: rgba(255, 0, 0, 0.75); /* Red with opacity */
  }
  50% {
    background-color: rgba(0, 255, 0, 0.75); /* Green with opacity */
  }
  100% {
    background-color: rgba(0, 0, 255, 0.75); /* Blue with opacity */
  }
}

/** LAYOUT THEME STYLES */
html.light .layout {
  background: radial-gradient(
    rgba(255, 255, 255, .5) 50%,
    rgba(255, 255, 255, 1)
  );
}
html.dark .layout {
  background: radial-gradient(rgba(255, 255, 255, 0.5) 25%, rgba(0, 0, 0, 1));
}
</style>
