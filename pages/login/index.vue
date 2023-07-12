<template>
    <div class="login-page">
        <Login />
    </div>
</template>

<script setup lang="ts">
import Login from 'features/login.vue';
</script>

<style lang="scss">
.login-page {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 50vh;
}
</style>
