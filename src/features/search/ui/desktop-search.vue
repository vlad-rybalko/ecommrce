<template>
    <div
        class="header-search__container"
        @keyup.esc="hideAutocompleteList"
        @focusin="abortHideAutocompleteList"
        @focusout="hideAutocompleteList"
    >
        <div
            class="header-search__group"
            @keydown.up.prevent="arrowsToggleFocus"
            @keydown.down.prevent="arrowsToggleFocus"
            @keydown.tab="tabToggleFocus"
        >
            <search-input @change="changeSearchString" :value="searchString" :placeholder="placeholder"></search-input>
            <search-results
                v-if="foundProducts.length > 0"
                title="Семена"
                showAll="Смотреть все результаты"
                :searchString="searchString"
            >
                <search-results-item
                    v-for="itemData in foundProducts"
                    :key="itemData.link"
                    :item="itemData"
                    :searchString="searchString"
                ></search-results-item>
            </search-results>
        </div>
    </div>
</template>

<script lang="ts">
import { defineAsyncComponent } from 'vue';
import { Vue, Component, Prop } from 'vue-facing-decorator';
import { Product } from '../lib/types';
import { SearchRepository } from '../lib/SearchRepository';
import keyboardFocusControl from 'shared/mixins/keyboardFocusControl.js';
import DeviceManager from 'shared/modules/DeviceManager';
const SearchInput = defineAsyncComponent(() => import('features/search/components/search-input.vue'));
const SearchResults = defineAsyncComponent(() => import('features/search/components/search-results.vue'));
const SearchResultsItem = defineAsyncComponent(() => import('features/search/components/search-results-item.vue'));

@Component({
    components: {
        'search-input': SearchInput,
        'search-results': SearchResults,
        'search-results-item': SearchResultsItem,
    },
    mixins: [keyboardFocusControl],
})
export default class Search extends Vue {
    @Prop({ default: '' }) readonly value: string;
    @Prop({ default: 'Я ищу ...' }) readonly placeholder: string;

    searchString = '';
    foundProducts: Array<Product> | [] = [];
    deferHidingAutocomplete: undefined | number = undefined;
    isMobile: boolean | undefined = DeviceManager.isMobile;
    currentFocus: number;
    searchRepository = new SearchRepository();

    mounted() {
        this.changeSearchString(this.value);
    }

    hideAutocompleteList() {
        this.deferHidingAutocomplete = window.setTimeout(() => {
            this.foundProducts = [];
        }, 250);
    }

    abortHideAutocompleteList() {
        clearTimeout(this.deferHidingAutocomplete);
    }

    changeSearchString(value: string) {
        const checkResult = this.checkSearchString(value);
        if (checkResult) {
            this.searchString = value;
            return;
        }
        this.hideAutocompleteList();
    }

    checkSearchString(value) {
        if (value.length > 2) {
            this.searchRepository.queryAutocomplete(value).then((response) => {
                this.foundProducts = response;
            });
            return true;
        }
        return false;
    }
}
</script>

<style lang="scss" scoped>
.header-search__container {
    width: 100%;
}

.header-search__group {
    position: relative;
}
</style>
