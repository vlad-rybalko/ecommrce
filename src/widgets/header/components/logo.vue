<template>
    <NuxtLink :class="$style.link" to="/">
        <Logo v-bind="$attrs" />
    </NuxtLink>
</template>

<script setup lang="ts">
import Logo from 'shared/images/icons/logo.svg?component';
</script>

<style module lang="scss">
.link {
    display: flex;
}
</style>
