<template>
    <a
        :href="`/sort/${item.link}`"
        tabindex="0"
        class="search-results__item"
        :class="{ 'search-results__item_not-active': !isAvailable }"
    >
        <div class="search-results__item-img">
            <img :src="item.image" alt="" />
        </div>
        <div class="search-results__item-info">
            <div class="search-results__item-description">
                <span v-html="highlightSearchString(item.name)"></span>,
                <span>{{ item.information }}</span>
            </div>
            <div class="search-results__item-tags">
                <template v-if="isAvailable">
                    <span
                        v-for="tag in item.tags"
                        :key="tag.title"
                        class="search-results__tag"
                        :style="`background-color: ${tag.color}`"
                    >
                        {{ tag.title }}
                    </span>
                </template>
                <span v-else class="search-results__tag search-results__tag_not-available">
                    {{ item.is_available_label }}
                </span>
            </div>
            <div v-if="isAvailable" class="search-results__item-price">
                <template v-if="withoutDiscounts">
                    <span class="product-price product-price_middle">
                        <span>
                            от {{ round(item.current_price_per_seed) }}
                            <span class="product-price__currency product-price__currency_small">₽</span>
                        </span>
                    </span>
                </template>
                <template v-else>
                    <span class="old-price old-price_middle">
                        <span>
                            от {{ round(item.original_price_per_seed) }}
                            <span class="product-price__currency product-price__currency_small">₽</span>
                        </span>
                    </span>
                    <span class="product-price product-price_red product-price_middle">
                        <span>
                            от {{ round(item.current_price_per_seed) }}
                            <span class="product-price__currency product-price__currency_small">₽</span>
                        </span>
                    </span>
                </template>
            </div>
        </div>
    </a>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-facing-decorator';

@Component({})
export default class SearchResultsItem extends Vue {
    @Prop(Object) readonly item: { [key: string]: string };
    @Prop(String) readonly searchString: string;

    highlightSearchString(productName: string) {
        let searchString = this.searchString.replace(/([&|?^$\[\]\(\)\+\.\\])/gi, '\\$&');
        let regExp = new RegExp(searchString, 'gi');
        let modifyMatch = `<strong>${this.searchString}</strong>`;
        return productName.replace(regExp, modifyMatch);
    }

    round(number: number) {
        return Math.round(number);
    }

    get withoutDiscounts() {
        return this.item.current_price_per_seed === this.item.original_price_per_seed;
    }

    get isAvailable() {
        return this.item.is_available === 'available';
    }
}
</script>

<style lang="scss">
.search-results__item {
    display: flex;
    align-items: center;
    flex-wrap: nowrap;

    &_not-active {
        .search-results__item-description,
        .search-results__item-img {
            opacity: 0.5;
        }
    }
}

.search-results__item-img {
    width: 40px;
    min-width: 40px;
    height: 50px;
    display: block;
    margin: 0 20px 0 5px;
    img {
        width: 100%;
        height: 100%;
        object-fit: cover;
        position: relative;
        &:after {
            content: '';
            display: block;
            position: absolute;
            z-index: 2;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background-color: #e9e9e9;
        }
    }
}

.search-results__item-info {
    display: grid;
    width: 100%;
    gap: 5px;
    grid-template-columns: repeat(12, 1fr);
    grid-template-areas:
        'A A A A   A A A A   A A A A'
        'B B B B   B B B B   C C C C'
        'B B B B   B B B B   C C C C';
    @media screen and (min-width: 992px) {
        grid-template-areas:
            'B B B B   B B B B   A A A A'
            'B B B B   B B B B   C C C C';
    }
}

.search-results__item-tags {
    grid-area: A;
    display: flex;
    flex-wrap: wrap;
    @media screen and (min-width: 992px) {
        justify-self: end;
    }
}

.search-results__item-description {
    grid-area: B;
    align-self: center;
    font-size: 14px;
    line-height: 21px;
}

.search-results__item-price {
    grid-area: C;
    justify-self: end;
    align-self: center;
}

.search-results__tag {
    margin: 0 3px 3px 0;
    padding: 2px 8px;
    background-color: $ds-color-background;
    border-radius: 2px;
    font-weight: 500;
    font-size: 10px;
    line-height: 1.2;
    letter-spacing: 0.05em;
    color: #ffffff;
    &_not-available {
        margin: 0;
        background-color: #dc662d;
    }
}

.old-price,
.product-price {
    display: flex;
    align-items: baseline;
    flex-wrap: nowrap;
    line-height: 1;
    @media screen and (min-width: 992px) {
        display: inline-block;
    }
}
</style>
