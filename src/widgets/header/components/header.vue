<template>
    <div :class="$style.wrapper">
        <div class="ds-main-content-container">
            <div :class="$style.header">
                <logo />
                <desktop-search></desktop-search>
                <Buttons></Buttons>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import Logo from './logo.vue';
import DesktopSearch from 'features/search/ui/desktop-search.vue';
import Buttons from './buttons.vue';
</script>

<style module lang="scss">
.wrapper {
    background-color: $ds-color-white;
}

.header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 55px;
    height: $header-height;
}
</style>
