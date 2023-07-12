<template>
	<div class="basket-popup__header">
		<span class="basket-popup__text-stressed basket-popup__header-text">{{ translations.basket }}</span>
		<div
			v-if="!isBasketEmpty"
			@click="clearBasket"
			class="basket-popup__clear-btn"
		>
			{{ translations.clear_basket }}
		</div>
	</div>
</template>

<script lang="ts">

import { Vue, Component } from "vue-property-decorator";
import { useStore } from "../lib/store";
import { BasketActionType } from "../lib/store/actions";

@Component
export default class BasketPopupHeader extends Vue {
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

	clearBasket() {
		this.store.dispatch(BasketActionType.clearBasket);
	}
}

</script>