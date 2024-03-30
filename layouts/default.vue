<script setup lang="ts"></script>

<template>
    <div id="layout-default">
        <header>
            <div class="centered d-flex">
                <NuxtLink id="brandLogo" to="/">Logo</NuxtLink>
                <AppRoutes id="appRoutes" />
            </div>
        </header>

        <main>
            <slot />
        </main>

        <footer>
            <div class="centered">
                footer
            </div>
        </footer>
    </div>
</template>

<style scoped>
#layout-default {
    height: 100%;
    display: grid;
    grid-template-rows: auto 1fr auto;
    grid-template-columns: auto;
}

#layout-default .centered {
    max-width: 800px !important;
    margin: 0 auto;
}

header,
footer {
    min-height: 60px;
    background-color: gray;
}
</style>
