<template>
    <div class="main-banner">
        <div class="main-banner__slide">
            <img src="~/assets/img/banner.webp" alt="" class="main-banner__img" />
        </div>
    </div>
</template>

<style>
.main-banner {
    display: flex;
}
.main-banner__slide {
    width: 100%;
    border-radius: 10px;
    overflow: hidden;
}
.main-banner__img {
    display: block;
    width: 100%;
    object-fit: cover;
}
</style>
<script setup lang="ts"></script>
