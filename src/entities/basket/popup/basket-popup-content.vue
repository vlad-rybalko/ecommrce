<template>
	<div v-if="!isBasketEmpty" class="basket-popup__content-wrapper">
		<basket-item
			v-for="product in products"
			:key="product.id"
			:product="product"
		/>
	</div>
	<div v-else class="basket-popup__content-wrapper basket-popup__content-wrapper_empty">
		<div class="basket-popup__empty basket-popup__text-stressed">
			{{ translations.basket_is_empty }}
		</div>
	</div>
</template>

<script lang="ts">

import { Vue, Component } from "vue-property-decorator";
import { useStore } from "../lib/store";
import BasketItem from '../basket-item.vue';

@Component({
	components: {
		'basket-item': BasketItem,
	},
})

export default class BasketPopupContent extends Vue {
	store = useStore();

	get products() {
		return this.store.getters.getPopupProducts;
	}

	get translations() {
		return this.store.getters.getTranslations;
	}

	get isBasketEmpty() {
		return this.products.length === 0;
	}
}
</script>