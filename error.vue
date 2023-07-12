<template>
    <div :class="$style.container">
        <img :class="$style.img" src="/img/404.svg" alt="" />
        <a :class="$style.link" href="/">Вернуться на главную</a>
    </div>
</template>

<script setup lang="ts"></script>

<style module lang="scss">
.container {
    height: 100vh;
    display: flex;
    gap: 20px;
    flex-direction: column;
    align-items: center;
    justify-content: center;
}
.img {
    max-width: 300px;
    height: auto;
}
.link {
    text-decoration: underline;
}
</style>
