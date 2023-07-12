<template>
    <NuxtLink no-prefetch to="/sort/gorilla-fem">
        <div class="card">
            <div class="card__img">
                <img src="~/assets/img/flower.jpg" alt="" />
            </div>
            <div class="card__content">
                <div class="card__title">
                    <span class="product__name">Gorilla fem (Семена)</span>,
                    <span class="product__description">Страны Европы, Феминизированные, Фотопериодны</span>
                </div>
                <div class="card__reviews">
                    <div class="card__rating">
                        <div class="rating__container">
                            <Star class="rating__star" />
                            <Star class="rating__star" />
                            <Star class="rating__star" />
                            <Star class="rating__star" />
                            <Star class="rating__star" />
                        </div>
                        <span>5</span>
                    </div>
                    <div class="card__comments">
                        <Dialog class="dialog-icon" />
                        <span>3</span>
                    </div>
                </div>
            </div>
            <div class="card__footer card__footer_vertical">
                <div class="card__price">от <span class="card__price_value">1 421</span> р</div>
                <a @click="clickHandler">
                    <div class="card__button">
                        <BasketIcon class="basket-icon" />
                        <span>В корзину</span>
                    </div>
                </a>
            </div>
        </div>
    </NuxtLink>
</template>

<script setup lang="ts">
import BasketIcon from 'shared/images/icons/basket.svg';
import Star from 'shared/images/icons/star.svg';
import Dialog from 'shared/images/icons/dialog.svg';
import { useBasketStore } from '~/store/basket';

const store = useBasketStore();

const clickHandler = (event: Event) => {
    event.preventDefault();
    store.addItem('Gorilla fem (Семена)');
};
</script>

<style lang="scss">
.card {
    display: flex;
    flex-direction: column;
    gap: 10px;
    align-items: center;
    border-radius: 10px;
    padding: 15px 25px;
    &:hover {
        box-shadow: 0 0 2px #74b908;
    }
}
.card__img {
    height: 180px;
    img {
        height: 100%;
        max-width: 100%;
    }
}
.card__footer {
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 10px;
    width: 100%;
    &_vertical {
        flex-direction: column;
    }
}
.card__price {
    color: $secondary-color;
    white-space: nowrap;
    font-size: $_16px;
    &_value {
        font-weight: 700;
        font-size: $_20px;
    }
}
.card__content {
    display: flex;
    flex-direction: column;
    gap: 12px;
}
.card__title {
    font-size: $_14px;
    line-height: 18px;
    text-align: center;
}
.product__description {
    color: $ds-color-neutral;
}
.card__reviews {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 25px;
    font-size: $_14px;
}
.rating__container {
    display: flex;
}
.card__rating,
.card__comments {
    display: flex;
    align-items: center;
    gap: 3px;
}

.card__button {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 5px;
    background-color: $ds-color-primary;
    color: $ds-color-white;
    width: 100%;
    height: 35px;
    padding: 0 10px;
    border-radius: 10px;
    font-size: $_14px;
    cursor: pointer;
}

.basket-icon {
    width: 15px;
    height: 15px;
}

.dialog-icon {
    width: 15px;
    height: 15px;
    --border: #585858;
    --point: #585858;
}

.rating__star {
    width: 15px;
    height: 15px;
    --color: #ffd335;
    --background: #ffd335;
}

.properties {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 2px;
}
.properties__item {
    background: #f8f8f8;
    border-radius: 20px;
    font-size: $_12px;
    padding: 3px 10px;
}
</style>
