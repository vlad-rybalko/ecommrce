<template>
    <div class="topline">
        <div class="ds-main-content-container">
            <div class="topline__container">
                <div class="topline__button-group">
                    <NuxtLink to="/sort">
                        <div class="topline__button topline__button_main ds-text-5">
                            <Seeds class="topline__seeds-icon" />
                            <span>Все семена</span>
                        </div>
                    </NuxtLink>
                    <div class="topline__button ds-text-5">
                        <span>Коллекции</span>
                        <Arrow class="topline_arrow" />
                    </div>
                    <div class="topline__button ds-text-5">
                        <span>Производители</span>
                        <Arrow class="topline_arrow" />
                    </div>
                </div>
                <div class="topline__button-group">
                    <div class="topline__button ds-text-5">Акции и бонусы</div>
                    <div class="topline__button ds-text-5">
                        <span>Статьи</span>
                        <Arrow class="topline_arrow" />
                    </div>
                    <div class="topline__button ds-text-5">
                        <span>Новости</span>
                        <Arrow class="topline_arrow" />
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script lang="ts">
import { Seeds, Arrow } from 'shared/images/icons';

export default {
    name: 'topline',
    components: {
        Seeds,
        Arrow: Arrow.ArrowHeader,
    },
    data() {
        return {};
    },
};
</script>

<style lang="scss">
.topline {
    background-color: $ds-color-primary;
}
.topline__container {
    height: 50px;
    display: flex;
    justify-content: space-between;
}
.topline__button-group {
    display: flex;
}
.topline__button {
    display: flex;
    align-items: center;
    gap: 10px;
    height: 100%;
    padding: 0 15px;
    color: $ds-color-white;
    cursor: pointer;
    &_main {
        border-right: 1px solid $ds-color-primary-hover;
    }
    &:hover {
        background-color: $ds-color-primary-hover;
        .topline_arrow {
            transform: rotate(180deg);
        }
    }
}
.topline__seeds-icon {
    height: 22px;
    width: 22px;
    fill: $ds-color-white;
}
.topline_arrow {
    height: 5px;
    width: 7px;
    stroke: $ds-color-white;
    transition: all 0.3s;
}
</style>
