<template>
    <div class="ds-main-content-container">
        <div class="page__wrapper">
            <Banner class="welcome-page__item" />
            <Slider />
            <Slider />
            <Slider />
        </div>
    </div>
</template>

<script lang="ts">
import Banner from 'widgets/banner.vue';
import Slider from 'entities/product/ui/slider.vue';
export default {
    name: 'welcome',
    components: {
        Banner,
        Slider,
    },
    setup() {
        useHead({
            title: 'Семена | купить семена в интернет-магазине наложенным платежом',
            bodyAttrs: {
                class: 'welcome-page',
            },
        });
    },
};
</script>

<style lang="scss"></style>
