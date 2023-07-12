<template>
    <div :class="[$style.container]">
        <div class="ds-main-content-container">
            <transition name="fade">
                <div v-show="isVisible" :class="$style.navigation">
                    <div :class="$style.list" class="ds-text-6">
                        <template v-for="item of visibleLinks" :key="item.link">
                            <NuxtLink :to="item.link" :class="$style.link">
                                <span :class="$style.item">{{ item.title }}</span>
                            </NuxtLink>
                        </template>
                        <Dropdown :content-class="$style.dropdown" overlay-name="navigation-dropdown">
                            <template v-slot:trigger>
                                <Burger :class="$style.burger" />
                            </template>
                            <template v-slot:content>
                                <div
                                    :class="$style['dropdown-list__item']"
                                    v-for="item of hiddenLinks"
                                    :key="item.link"
                                >
                                    <NuxtLink :to="item.link" :class="$style.link">
                                        <span :class="$style.item">{{ item.title }}</span>
                                    </NuxtLink>
                                </div>
                            </template>
                        </Dropdown>
                    </div>
                    <SocialList />
                </div>
            </transition>
        </div>
    </div>
</template>

<script setup lang="ts">
import { ref, onMounted, onBeforeUnmount } from 'vue';
import { ScrollTracker } from 'shared/modules/ScrollTracker';
import SocialList from './social-list.vue';
import Dropdown from 'shared/ui-kit/dropdown.vue';
import Burger from 'shared/images/icons/burger.svg?component';

const NUMBER_OF_LINKS = 4;
let scrollTracker: ScrollTracker;
const isVisible = ref(true);
const { t } = useI18n();

const navigation = [
    {
        link: '/',
        title: t('menu.warranty'),
    },
    {
        link: '/',
        title: t('menu.delivery_payment'),
    },
    {
        link: '/',
        title: t('menu.tracking'),
    },
    {
        link: '/',
        title: t('menu.forum'),
    },
    {
        link: '/',
        title: t('menu.help'),
    },
    {
        link: '/',
        title: t('menu.price-list'),
    },
    {
        link: '/',
        title: t('menu.terms_of_growing'),
    },
    {
        link: '/',
        title: t('menu.about_company'),
    },
    {
        link: '/',
        title: t('menu.reviews'),
    },
    {
        link: '/',
        title: t('menu.confident'),
    },
    {
        link: '/',
        title: t('menu.partnership'),
    },
];

onMounted(() => {
    scrollTracker = new ScrollTracker(
        () => (isVisible.value = true),
        () => (isVisible.value = false),
    );
});

onBeforeUnmount((): void => {
    scrollTracker.destroy();
});

const visibleLinks = computed(() => {
    return navigation.slice(0, NUMBER_OF_LINKS);
});
const hiddenLinks = computed(() => {
    return navigation.slice(NUMBER_OF_LINKS);
});
</script>

<style module lang="scss">
.container {
    background-color: $ds-color-inactive;
}
.navigation {
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: $navigation-height;
}
.list {
    display: flex;
    align-items: center;
    gap: 30px;
}
.link {
    display: flex;
    align-items: center;
}
.item {
    cursor: pointer;
    &:hover {
        fill: $ds-color-primary;
        color: $ds-color-primary;
    }
}
.burger {
    height: 9px;
    width: 12px;
    fill: $ds-color-neutral;
}
.dropdown {
    width: 243px;
    top: 30px;
    left: -20px;
}
.dropdown-list__item {
    padding: 7px 20px;
    border-bottom: 1px solid $ds-color-inactive;
}
.dropdown-list__item:last-child {
    border-bottom: none;
}
</style>
