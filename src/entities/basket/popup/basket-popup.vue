<template>
    <div>
        <!--        <template v-if="isMobile">-->
        <!--            <sch-dialog v-if="isOpen" @closed="hidePopup" full> </sch-dialog>-->
        <!--        </template>-->
        <!--        <template v-else>-->
        <transition name="fade">
            <popup v-if="isOpen" :class="{ 'basket-popup_empty': isBasketEmpty }" tabindex="0" :isLoading="isLoading">
                <div class="basket-popup"></div>
            </popup>
        </transition>
        <!--        </template>-->
    </div>
</template>

<script lang="ts">
import { Vue, Component, Prop } from 'vue-facing-decorator';
import Popup from 'shared/ui-kit/popup.vue';
// import schDialog from '../../../../../../common/vue/components/sch-dialog.vue';
// import BasketPopupHeader from './basket-popup-header.vue';
// import BasketPopupContent from './basket-popup-content.vue';
// import BasketPopupFooter from './basket-popup-footer.vue';
import DeviceManager from 'shared/modules/DeviceManager';

@Component({
    components: {
        Popup,
        // 'sch-dialog': schDialog,
        // 'basket-popup-header': BasketPopupHeader,
        // 'basket-popup-content': BasketPopupContent,
        // 'basket-popup-footer': BasketPopupFooter,
    },
})
export default class BasketPopup extends Vue {
    @Prop({ type: Boolean, default: false }) readonly isOpen!: boolean;

    // store = useStore();

    get isLoading() {
        return this.store.getters.getPopupLoading;
    }

    // get products() {
    //     return this.store.getters.getPopupProducts;
    // }

    get isBasketEmpty() {
        return this.products.length === 0;
    }

    // get totalPrice() {
    //     return this.store.getters.getPopupDiscountedPrice;
    // }
    //
    // get translations() {
    //     return this.store.getters.getTranslations;
    // }
    //
    // get isMobile() {
    //     return DeviceManager.isMobile;
    // }
    //
    // hidePopup() {
    //     this.$emit('close');
    // }
}
</script>

<style lang="scss">
.basket-popup__text-stressed {
    font-weight: bold;
    font-size: 14px;
    line-height: 16px;
}

.basket-popup {
    display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: 70px 1fr 1px 77px;
    gap: 0 0;
    grid-template-areas:
        '.'
        '.'
        '.'
        '.';
    justify-items: center;
    overflow: hidden;
    @media (min-width: 992px) {
        grid-template-rows: 70px 1fr 1px 77px;
        max-height: 500px;
    }
}

.basket-popup__header-text {
    font-weight: 500;
}

.basket-popup_empty {
    @media (min-width: 992px) {
        left: -400px;
    }
}

.basket-popup__header {
    width: 100%;
    display: flex;
    align-items: baseline;
    padding: 5px 0;
    gap: 10px;
    span {
        font-size: 21px;
    }
    div {
        font-style: normal;
        font-weight: normal;
        font-size: 13px;
        color: #adadad;
    }
    @media (min-width: 992px) {
        padding: 0 25px;
        align-items: center;
        justify-content: space-between;
        span {
            font-size: 18px;
        }
    }
}

.basket-popup__clear-btn {
    cursor: pointer;
}

.basket-popup__content-wrapper {
    width: 100%;
    height: calc(100vh - 130px);
    -webkit-mask-image: linear-gradient(to bottom, black 85%, transparent 100%);
    mask-image: linear-gradient(to bottom, black 85%, transparent 100%);
    overflow-y: scroll;
    overflow-x: hidden;

    &::-webkit-scrollbar {
        width: 0;
    }

    @media (min-width: 992px) {
        height: auto;
        width: calc(100% - 10px);
        margin-right: 10px;

        .basket-item {
            margin-bottom: 12px;
        }

        &::-webkit-scrollbar {
            background: #ededed;
            border-radius: 1px;
            width: 2px;
            left: -9px;
        }

        &::-webkit-scrollbar-thumb {
            margin-right: 9px;
            width: 2px;
            border-radius: 1px;
            background-color: $ds-color-primary;
        }
    }
}

.basket-popup__content-wrapper_empty {
    margin-right: 0;

    @media (min-width: 992px) {
        &::-webkit-scrollbar {
            width: 0;
        }
    }
}

.basket-popup__empty {
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 0;
    height: 100%;

    @media (min-width: 992px) {
        height: 130px;
    }
}

hr {
    width: calc(100% - 50px);
    margin: 0;
    background: #eeeeee;
}

.basket-popup__button {
    width: 100%;
    height: 35px;

    @media (min-width: 992px) {
        width: 191px;
    }
}

.basket-popup__button_empty {
    width: 100%;
    height: 35px;
}

.basket-popup__footer {
    box-shadow: 0px 4px 20px rgba(0, 0, 0, 0.3);
    padding: 15px;
    margin-top: auto;
    display: flex;
    align-items: center;
    gap: 20px;
    width: 100%;
    height: 78px;
}

.basket-popup__footer-text {
    margin-right: 8px;
    text-align: left;
    @media (max-width: 360px) {
        font-size: 12px;
    }
}

.basket-popup__price {
    display: flex;
    flex-direction: column;
}
</style>
