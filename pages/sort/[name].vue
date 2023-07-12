<template>
    <div class="ds-main-content-container">
        <div class="product-page">
            <div class="breadcrumbs">
                <div class="breadcrumbs__item breadcrumbs__item_active">Главная</div>
                <div class="breadcrumbs__item breadcrumbs__item_active">Все семена</div>
                <div class="breadcrumbs__item breadcrumbs__item_active">Бренды</div>
                <div class="breadcrumbs__item breadcrumbs__item_active">Производитель Семена</div>
                <div class="breadcrumbs__item">Gorilla fem (Семена)</div>
            </div>
            <h1 class="brand__title">{{ product.name }}</h1>
            <div class="product-page__content">
                <ProductGallery :img-url="product.img" />
                <div class="product-description">
                    <span>
                        Семена этого производителя – выбор клиентов, нацеленных на максимально убойный эффект. Этот
                        стабильный и крепкий гибрид! Воздействие мощное, продолжительное и может буквально приклеить к
                        дивану на несколько часов.
                    </span>
                    <div class="product-properties">
                        <div class="product-properties__item">
                            <BrandIcon class="property-icon" />
                            <span>Производитель Семена (Страны Европы)</span>
                        </div>
                        <div class="product-properties__item">
                            <FeminizedIcon class="property-icon" />
                            <span>Феминизированные</span>
                        </div>
                        <div class="product-properties__item">
                            <FotoperiodIcon class="property-icon" />
                            <span>Фотопериодные</span>
                        </div>
                        <div class="product-properties__item">
                            <OpenGroundIcon class="property-icon" />
                            <span>Открытый грунт</span>
                        </div>
                        <div class="product-properties__item">
                            <RoomIcon class="property-icon" />
                            <span>Закрытый грунт</span>
                        </div>
                    </div>
                    <RoundedButton title="В корзину" @click="clickHandler(product.name)" />
                </div>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import BrandIcon from 'shared/images/icons/properties/brand.svg';
import FeminizedIcon from 'shared/images/icons/properties/feminized.svg';
import FotoperiodIcon from 'shared/images/icons/properties/fotoperiod.svg';
import OpenGroundIcon from 'shared/images/icons/properties/open-ground.svg';
import RoomIcon from 'shared/images/icons/properties/room.svg';
import EffectIcon from 'shared/images/icons/properties/effect.svg';
import RoundedButton from 'shared/components/rounded-button.vue';
import { useBasketStore } from '~/store/basket';

const store = useBasketStore();
const route = useRoute();
const slug = route.params.name;

const ProductGallery = defineAsyncComponent(() => import('entities/product').then((module) => module.ProductGallery));

const { data: product } = await useFetch(`/api/product/${slug}`);

const clickHandler = (name: string) => {
    store.addItem(name);
};
</script>

<style lang="scss">
.product-page {
    display: flex;
    flex-direction: column;
    gap: 30px;
    padding: 30px 0;
}
.product-page__content {
    display: flex;
    gap: 30px;
}
.product-description {
    display: flex;
    flex-direction: column;
    gap: 20px;
    font-size: $_14px;
    width: 30%;
}

.brand__title {
    font-size: $_30px;
    font-weight: 500;
}
.breadcrumbs {
    display: flex;
    flex-wrap: wrap;
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

.product-properties {
    display: flex;
    flex-direction: column;
    gap: 5px;
}
.product-properties__item {
    display: flex;
    align-items: center;
    gap: 10px;
}

.property-icon {
    width: 25px;
    height: 25px;
}
</style>
