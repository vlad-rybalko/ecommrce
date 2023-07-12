<template>
    <a class="sch-link" :class="schLinkClass" :href="link" @click="linkClick">
        <svg class="svg-icon" v-if="icon_selector"><use :xlink:href="icon_selector"></use></svg>
        <slot />
        <svg class="trigger-icon" v-if="isTrigger"><use xlink:href="#arrow-header-ico"></use></svg>
    </a>
</template>

<script lang="ts">
import { Vue, Component, Prop } from 'vue-facing-decorator';
import { SchLinkSize, SchLinkType } from './lib/types';

@Component
export default class SchLink extends Vue {
    @Prop({ type: String, default: SchLinkSize.Medium }) readonly size: SchLinkSize;
    @Prop({ type: String, default: SchLinkType.Default }) readonly type: SchLinkType;
    @Prop(String) readonly icon_selector: string;
    @Prop(String) readonly link: string;
    @Prop(Boolean) readonly isTrigger: boolean;

    get schLinkClass() {
        return `${this.size} ${this.type} icon-${this.icon_selector?.slice(1)}`;
    }

    linkClick(e: Event) {
        if (this.link?.length === 0) {
            e.preventDefault();
        }
        this.$emit('click', e);
    }
}
</script>

<style lang="scss" scoped>
.sch-link {
    cursor: pointer;
    display: flex;
    align-items: center;
    position: relative;
    .trigger-icon {
        width: 7px;
        height: 5px;
    }
}

.sch-link.white {
    color: $ds-color-white;
    &:hover,
    &:active {
        color: $ds-color-white;
    }
}

.sch-link.gray {
    color: $ds-color-neutral;
    &:hover,
    &:active {
        color: $ds-color-primary;
    }
}

.sch-link.medium {
    gap: 10px;
}

.sch-link.topline-size {
    gap: 10px;
}

.sch-link.small {
    gap: 2px;
}
</style>
