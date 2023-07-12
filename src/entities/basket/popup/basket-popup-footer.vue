<template>
	<div class="basket-popup__footer">
		<div v-if="!isBasketEmpty">
			<div
				v-if="!hasOldPrice"
				class="basket-popup__price basket-popup__text-stressed"
			>
				<div class="basket-popup__footer-text">
					{{ translations.total }}
				</div>
				<price
					:value="totalPrice"
					:size="priceSizeType"
				/>
			</div>
			<div
				v-else
				class="basket-popup__price basket-popup__price_has-old basket-popup__text-stressed">
				<div class="basket-popup__footer-text">
					{{ translations.total }}
				</div>
				<price
					class="basket-popup__crossed-price"
					:value="itemsPrice"
					:type="crossedPriceType"
				/>
				<price
					:value="totalPrice"
					:size="priceSizeType"
					:type="discountedPriceType"
				/>
			</div>
		</div>
		<rounded-button
			v-if="!isBasketEmpty"
			class="basket-popup__button"
			:title="translations.to_basket"
			@click="openBasket"
		/>
		<rounded-button
			v-else
			class="basket-popup__button_empty"
			:title="translations.to_catalog"
			@click="openCatalog"
		/>
	</div>
</template>

<script lang="ts">

import { Vue, Component } from "vue-property-decorator";
import { useStore } from "../lib/store";
import { PriceSize, PriceType } from "../../../../../../common/vue/components/lib/types";
import LocationManager, { Location } from "../../../../components/global/LocationManager";
import RoundedButton from "../../../../../../common/vue/components/rounded-button.vue";
import Price from "../../../../../../common/vue/components/price.vue";

@Component({
	components: {
		'rounded-button': RoundedButton,
		'price': Price,
	},
})
export default class BasketPopupFooter extends Vue {
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

	get totalPrice() {
		return this.store.getters.getPopupDiscountedPrice;
	}

	get itemsPrice() {
		return this.store.getters.getPopupItemsPrice;
	}

	get hasOldPrice() {
		return this.totalPrice !== this.itemsPrice;
	}

	get discountedPriceType() {
		return PriceType.Discounted;
	}

	get priceSizeType() {
		return PriceSize.Small;
	}

	get crossedPriceType() {
		return PriceType.Crossed;
	}

	openBasket() {
		LocationManager.openLocation(Location.Basket);
	}

	openCatalog() {
		LocationManager.openLocation(Location.Catalog);
	}
}

</script>