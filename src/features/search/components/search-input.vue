<template>
    <form class="search-input__form" autocomplete="off" action="/search">
        <div class="search-input__container">
            <input
                name="q"
                class="header-search__input"
                type="text"
                :value="value"
                @input="change"
                :placeholder="placeholder"
            />
            <button type="submit" class="search-input__submit">
                <SearchIcon />
            </button>
        </div>
    </form>
</template>

<script lang="ts">
import { Vue, Component, Prop } from 'vue-facing-decorator';
import SearchIcon from 'shared/images/icons/search.svg?component';

@Component({
    components: {
        SearchIcon,
    },
    emits: ['change'],
})
export default class SearchInput extends Vue {
    @Prop({ type: String }) readonly value?: string;
    @Prop({ type: String }) readonly placeholder?: string;

    change(event: Event) {
        this.$emit('change', (event.target as HTMLInputElement).value);
    }
}
</script>

<style lang="scss">
.search-input__form {
    display: flex;
    width: 100%;
}

.search-input__container {
    flex-grow: 1;
    position: relative;
}

.header-search__input {
    height: 40px;
    padding: 6px 40px 6px 20px;
    width: 100%;
    font-size: 14px;
    font-weight: 400;
    border-radius: 10px;
    background: #f0f0f0;
    border: 1px solid transparent;
    &:focus {
        outline: 0 none;
    }
}

.search-input__submit {
    display: inline-flex;
    justify-content: center;
    align-items: center;
    position: absolute;
    top: 0;
    right: 0;
    height: 100%;
    width: auto;
    padding: 0 12px;
    margin: 0;
    border: none;
    letter-spacing: 1px;
    background: transparent;
    border-radius: 10px;
    &:hover,
    &:focus {
        background: transparent;
    }
    svg {
        height: 16px;
        width: 16px;
        fill: #000000;
    }
    @media screen and (min-width: 992px) {
        padding: 0 20px;
    }
}
</style>
