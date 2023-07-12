<template>
    <div class="product-gallery">
        <img :src="imgUrl" alt="" />
    </div>
</template>

<script setup lang="ts">
defineProps({
    imgUrl: String,
});
</script>

<style>
.product-gallery {
    width: 400px;
    height: 457px;
}
</style>
