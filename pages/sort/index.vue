<template>
    <div class="ds-main-content-container">
        <div class="page__wrapper">
            <div class="breadcrumbs">
                <div class="breadcrumbs__item breadcrumbs__item_active">Главная</div>
                <div class="breadcrumbs__item">Все семена</div>
            </div>
            <h1 class="brand__title">Все сорта семян</h1>
            <span class="brand__description">
                Созданием новых сортов занимаются производители, в которых работают увлеченные селекционеры. Они
                тщательно изучают свойства и особенности, собирают генетический материал по всему миру и в ходе
                кропотливой работы выводят элитные сорта с улучшенными качествами.
            </span>
            <div class="catalog-page__grid">
                <ProductCard v-for="product of products" :product="product" />
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
const ProductCard = defineAsyncComponent(() => import('entities/product').then((module) => module.ProductCard));

const { data: products } = await useFetch('/api/product');
</script>

<style lang="scss">
.brand__title {
    font-size: $_30px;
    font-weight: 500;
}
.brand__description {
    font-size: $_14px;
}
.catalog-page__grid {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
}

.breadcrumbs {
    display: flex;
    font-size: $_14px;
}
.breadcrumbs__item {
    &_active {
        color: $ds-color-primary;
    }
    &:not(:first-child)::before {
        color: #74b908;
        content: '—';
        padding: 0 10px;
    }
}
</style>
