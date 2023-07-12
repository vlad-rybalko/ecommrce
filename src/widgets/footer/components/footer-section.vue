<template>
    <div class="footer-section">
        <div class="footer-section__title bold">{{ title }}</div>
        <hr class="footer-section__line" />
        <slot />
    </div>
</template>

<script lang="ts">
import { Vue, Component, Prop } from 'vue-facing-decorator';

@Component
export default class Section extends Vue {
    @Prop(String) readonly title: string | undefined;
    @Prop(Boolean) readonly isMobile: boolean | undefined;
}
</script>

<style lang="scss" scoped>
.footer-section__links {
    padding: 10px 15px 20px 15px;
    display: flex;
    flex-direction: column;
    gap: 10px;
}

.footer-section__line {
    height: 1px;
    width: 100%;
    background: $ds-color-neutral;
    margin-top: 8px;
    margin-bottom: 16px;
    border: 0;
}

.footer-section {
    display: flex;
    flex-direction: column;
    a {
        margin-bottom: 5px;
    }
}

.footer-section__title {
    font-size: $_16px;
    line-height: 24px;
}
</style>
