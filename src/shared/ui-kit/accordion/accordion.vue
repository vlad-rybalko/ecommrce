<template>
    <div class="accordion-section" :class="accordionType" data-need-scroll>
        <div class="accordion__header accordion-button">
            <div class="accordion__header-title bold" :class="titleFontStyle">{{ title }}</div>
            <svg class="accordion__arrow"><use xlink:href="#landing-type-arrow--right"></use></svg>
        </div>
        <div ref="content" class="accordion-content">
            <slot />
        </div>
    </div>
</template>

<script lang="ts">
import { Vue, Component, Prop } from 'vue-facing-decorator';
import { AccordionClass } from './AccordionClass';
import { AccordionType } from './AccordionType';

@Component
export default class AccordionComponent extends Vue {
    @Prop({ type: String, default: '' }) readonly type: AccordionType | undefined;
    @Prop({ type: String }) readonly title: string | undefined;
    @Prop({ type: String }) readonly title_font_style: string | undefined;

    mounted() {
        this.$nextTick(() => {
            new AccordionClass();
        });
    }

    get accordionType() {
        return `${this.type}`;
    }

    get titleFontStyle() {
        return `${this.title_font_style}`;
    }
}
</script>

<style lang="scss" scoped>
@import './style';

.accordion-section {
    width: 100%;
}
.accordion-section_link {
    border: 1px solid $ds-color-neutral;
    border-width: 1px 0 0 0;
    &:last-child {
        border-width: 1px 0;
    }
    .accordion__header {
        height: 40px;
    }
}

.accordion-section_content {
    border-radius: 10px;
    box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
    .accordion__header {
        padding: 16.5px 20px;
    }
    .accordion__header-title {
        width: 90%;
    }
    .accordion__arrow {
        --color: #898793;
    }
}

.accordion__header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    cursor: pointer;
    padding: 0 15px;
}

.active {
    .accordion__arrow {
        transform: rotate(180deg);
    }
}

.accordion__arrow {
    transition: all 0.2s;
    width: 12px;
    height: 12px;
    --color: black;
}
</style>
