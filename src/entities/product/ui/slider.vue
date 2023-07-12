<template>
    <div class="product-slider">
        <div class="product-slider__title">Производитель</div>
        <div class="product-slider__wrapper">
            <div class="product-slider__slide">
                <ProductShortCard />
            </div>
            <div class="product-slider__slide">
                <ProductShortCard />
            </div>
            <div class="product-slider__slide">
                <ProductShortCard />
            </div>
            <div class="product-slider__slide">
                <ProductShortCard />
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import { ProductShortCard } from 'entities/product';
</script>

<style lang="scss">
.product-slider__wrapper {
    display: flex;
}
.product-slider__title {
    font-size: $_30px;
    font-weight: 500;
}
</style>
