<template>
    <div className="ds-main-content-container">
        <div className="page__wrapper">
            <div className="breadcrumbs">
                <div className="breadcrumbs__item breadcrumbs__item_active">Главная</div>
                <div className="breadcrumbs__item">Корзина</div>
            </div>
            <h1 className="brand__title">Корзина</h1>
            <div class="basket__wrapper">
                <div v-for="item of items">{{ item }}</div>
                <RoundedButton v-if="store.count" title="Оформить заказ" />
                <h1 v-else>Корзина пустая</h1>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import RoundedButton from 'shared/components/rounded-button.vue';
import { useBasketStore } from '~/store/basket';

const store = useBasketStore();
const items = store.items;
</script>

<style lang="scss">
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
.basket__wrapper {
    display: flex;
    flex-direction: column;
    gap: 20px;
}
</style>
