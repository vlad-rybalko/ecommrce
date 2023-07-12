<template>
    <div class="search-results__container">
        <div class="search-results__variants-wrapper">
            <slot></slot>
        </div>
        <a :href="`/search?q=${searchString}`" tabindex="0" class="search-results__show-all">
            {{ showAll }}
        </a>
    </div>
</template>

<script lang="ts">
import { Vue, Component, Prop } from 'vue-facing-decorator';

@Component({})
export default class SearchResults extends Vue {
    @Prop(String) readonly title: string;
    @Prop(String) readonly showAll: string;
    @Prop(String) readonly searchString: string;
}
</script>

<style lang="scss">
.search-results__container {
    padding-right: 7px;
    margin: 15px;
    height: calc(100vh - 91px);
    overflow-y: auto;
    background-color: #ffffff;
    z-index: 999;
    &::-webkit-scrollbar {
        width: 3px;
        background-color: #e5e5e5;
    }
    &::-webkit-scrollbar-thumb {
        border-radius: 3px;
        background-color: #74b908;
    }
    &::-webkit-scrollbar-track {
        border-radius: 3px;
        background-color: #e5e5e5;
    }
    @media screen and (min-width: 992px) {
        position: absolute;
        border-radius: 10px;
        width: 100%;
        height: auto;
        box-shadow: 0px 4px 20px rgba(0, 0, 0, 0.2);
        padding: 10px 20px 20px;
        margin: 2px 0 0 0;
        right: 50%;
        left: 50%;
        transform: translate(-50%, 0%);
    }
}

.search-results__title-wrapper {
    border-bottom: 1px solid #e2e2e2;
    padding: 5px 0;
}

.search-results__title-img {
    display: inline-block;
    width: 8px;
    height: 11px;
    margin-right: 5px;
    background: url('../../../../images/icons/seed.svg') no-repeat;
}

.search-results__title {
    font-weight: 500;
    font-size: 16px;
    color: #000000;
}

.search-results__variants-wrapper {
    display: flex;
    flex-direction: column;
    gap: 30px;
    padding-top: 15px;
    @media screen and (min-width: 992px) {
        gap: 10px;
        padding-top: 10px;
    }
}

.search-results__show-all {
    display: block;
    margin: 30px 0;
    font-size: 14px;
    color: #a9a9a9;
    text-align: center;
    &:hover,
    &:active,
    &:focus {
        color: #74b908;
    }
    @media screen and (min-width: 992px) {
        text-align: left;
        margin: 15px 0 0 0;
    }
}
</style>
