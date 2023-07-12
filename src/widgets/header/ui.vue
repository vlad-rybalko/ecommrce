<template>
    <header :class="$style.container">
        <Navigation :class="$style.navigation" />
        <Header />
        <Topline :class="$style.topline" />
    </header>
</template>

<script setup lang="ts">
import { Header, Navigation, Topline } from './components';
</script>

<style module lang="scss">
.container {
    z-index: $z-index-topline;
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
}
.navigation,
.topline {
    display: none;
    @media (min-width: 992px) {
        display: block;
    }
}
</style>
