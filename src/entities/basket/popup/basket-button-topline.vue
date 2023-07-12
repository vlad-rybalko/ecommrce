<template>
    <div class="basket-topline" @mouseleave="pm_mouseLeave" @mouseenter="pm_mouseEnter">
        <slot />
        <basket-popup :isOpen="pm_popupShown" @close="hidePopup" />
    </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-facing-decorator';
// import { BasketPopupData } from './lib/types';
import PopupMixin from 'shared/mixins/PopupMixin';
import BasketPopup from './basket-popup.vue';

@Component({
    components: {
        BasketPopup,
    },
})
export default class BasketToplineButton extends Vue {
    // @Prop({ type: Object }) readonly popup_info: BasketPopupData;
    // @Prop({ type: String }) readonly marketing_event: string;

    mounted() {
        // this.store.commit(BasketMutationType.setPopupInfo, this.popup_info);
        // this.store.commit(BasketMutationType.setTranslations, this.translations);
        // this.pm_addToOverlaysManager('basket-popup');
        // BasketEventEmitter.subscribe(BasketEvent.Update, this.basketUpdateCallback);
    }
}
</script>

<style lang="scss">
.basket-topline {
    position: relative;
    height: 100%;
    @media (min-width: 992px) {
        padding: 15px 0;
    }
}

.basket-topline__icons {
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: flex-end;
    --color: #000;
    a {
        transition: none;
    }
}

.basket-dropown_open {
    --color: #74b908;
    a {
        color: #74b908;
    }
}

.basket-topline__icon {
    position: relative;
    top: 3px;
    margin-right: 8px;
}

.topline__btn-basket-price {
    display: none;
    @media (min-width: 992px) {
        display: block;
    }
}
</style>
