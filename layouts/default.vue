<template>
    <div>
        <Header />
        <main :class="$style.main">
            <slot />
        </main>
        <Footer />
    </div>
</template>

<script setup lang="ts">
import { Header } from 'widgets/header';
import { Footer } from 'widgets/footer';
</script>

<style module lang="scss">
.main {
    margin-top: $topline-height;
    @media (min-width: 991px) {
        margin-top: calc($header-height + $topline-height + $navigation-height);
    }
}
</style>
