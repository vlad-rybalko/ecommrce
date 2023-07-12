<template>
    <div :class="[$style.column, $style[variant]]">
        <slot />
    </div>
</template>

<script lang="ts">
import { Vue, Component, Prop } from 'vue-facing-decorator';

enum ColumnVariants {
    small = 'column_small',
    medium = 'column_medium',
    large = 'column_large',
}

@Component
export default class FooterColumn extends Vue {
    @Prop({
        default: ColumnVariants.small,
        validator: (value: ColumnVariants) => Object.values(ColumnVariants).includes(value),
    })
    readonly variant: ColumnVariants | undefined;
}
</script>

<style lang="scss" module>
.column {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    &_small {
        width: 100%;
    }
    &_medium {
        width: 100%;
    }
    &_large {
        width: 100%;
    }
    @media (min-width: 991px) {
        &_small {
            width: 15%;
        }
        &_medium {
            width: 20%;
        }
        &_large {
            width: 24%;
        }
    }
}
</style>
