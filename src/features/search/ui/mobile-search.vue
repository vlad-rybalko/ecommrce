<template>
    <div class="mobile-search__container">
        <sch-link
            id="search-button"
            class="vue-sch-link"
            size="topline-size"
            type="black"
            icon_selector="#search-ico"
            @click="togglePopup"
        ></sch-link>
        <sch-dialog v-if="pm_isPopupShown" @closed="togglePopup" full>
            <template v-slot:header>
                <search-input v-model="searchString" :value="searchString" :placeholder="placeholder"></search-input>
            </template>
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
        </sch-dialog>
    </div>
</template>

<script lang="ts">
import PopupMixin from '../../../../../common/vue/mixins/PopupMixin';
import schLink from '../../../../../common/vue/components/sch-link.vue';
import { Component, Watch, Prop } from 'vue-facing-decorator';
import { SearchRepository } from 'src/features/search/lib/SearchRepository';
import { Product } from 'src/features/search/lib/types';

@Component({
    components: {
        'sch-link': schLink,
        'sch-dialog': () => import('../../../../../common/vue/components/sch-dialog.vue'),
        'search-input': () => import('features/search/components/search-input.vue'),
        'search-results': () => import('features/search/components/search-results.vue'),
        'search-results-item': () => import('features/search/components/search-results-item.vue'),
    },
})
export default class mobileSearch extends PopupMixin {
    @Prop({ default: '' }) readonly value!: string;
    @Prop({ default: 'Я ищу...' }) readonly placeholder: string;

    searchString: string = this.value.length ? this.value : '';
    foundProducts: Array<Product> | [] = [];
    searchRepository = new SearchRepository();

    mounted() {
        this.pm_addToOverlaysManager('mobile-search');
    }

    togglePopup() {
        this.pm_popupShown = !this.pm_popupShown;
    }

    @Watch('searchString')
    onSearchChanged(searchString: string) {
        if (searchString.length > 2) {
            this.searchRepository.queryAutocomplete(searchString).then((response) => {
                this.foundProducts = response;
            });
            return;
        }
        this.foundProducts = [];
    }
}
</script>

<style lang="scss">
.mobile-search__container {
    display: flex;
}
</style>
