<template>
    <div :class="$style.wrapper">
        <NuxtLink to="/user" :class="$style.link">
            <div :class="$style['icon-container']">
                <User :class="$style.icon" />
                <!--                <div :class="$style.notification">1</div>-->
            </div>
        </NuxtLink>
        <NuxtLink to="/" :class="$style.link">
            <div :class="$style['icon-container']">
                <Bookmarks :class="$style.icon" />
                <!--                <div :class="$style.notification">1</div>-->
            </div>
        </NuxtLink>
        <NuxtLink to="/" :class="$style.link">
            <div :class="$style['icon-container']">
                <Compare :class="$style.icon" />
                <!--                <div :class="$style.notification">1</div>-->
            </div>
        </NuxtLink>
        <BasketButtonTopline>
            <NuxtLink to="/basket" :class="$style.link">
                <div :class="$style['icon-container']">
                    <Cart :class="$style.icon" />
                    <div :class="$style.notification">{{ store.count }}</div>
                </div>
                <div :class="$style.total">
                    <span>0</span>
                    <Rub :class="$style.currency" />
                </div>
            </NuxtLink>
        </BasketButtonTopline>
    </div>
</template>

<script setup>
import { BasketButtonTopline } from 'entities/basket/popup';
import User from 'shared/images/icons/user.svg';
import Bookmarks from 'shared/images/icons/bookmarks.svg';
import Compare from 'shared/images/icons/compare.svg';
import Cart from 'shared/images/icons/cart.svg';
import Rub from 'shared/images/icons/rub.svg';
import { useBasketStore } from '~/store/basket';

const store = useBasketStore();
</script>

<style module lang="scss">
.wrapper {
    display: flex;
    align-items: center;
    gap: 30px;
}
.link {
    display: flex;
    align-items: center;
    gap: 8px;
    --color: #000;
    &:hover {
        color: #74b908;
        --color: #74b908;
    }
}
.icon-container {
    position: relative;
    display: flex;
}
.icon {
    height: 22px;
    width: 22px;
    cursor: pointer;
    fill: transparent;
}
.notification {
    background-color: #74b908;
    border-radius: 50%;
    color: #fff;
    font-size: 12px;
    height: 16px;
    line-height: 16px;
    position: absolute;
    right: -7px;
    text-align: center;
    top: -7px;
    width: 16px;
}
.total {
    display: flex;
    align-items: center;
    gap: 3px;
    line-height: 1;
}
.currency {
    height: 11px;
    width: 9px;
}
</style>
