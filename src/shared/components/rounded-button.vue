<template>
    <button @click="click" class="btn btn-default" :class="buttonClass">
        <loader v-if="isLoading" :size="loaderSize"></loader>
        <img v-if="iconUrl" :class="iconClass" :src="iconUrl" class="button__icon" />
        <span class="ds-text" :class="{ 'have-icon': iconUrl }">{{ title }}</span>
    </button>
</template>

<script lang="ts">
import { Vue, Component, Prop } from 'vue-facing-decorator';
import { RoundedButtonType, RoundedButtonSize, LoaderSize, RoundedButtonIconSize } from './lib/types';
import Loader from './loader.vue';

@Component({
    components: {
        loader: Loader,
    },
})
export default class RoundedButton extends Vue {
    @Prop({ type: String }) readonly title!: string;
    @Prop({ type: String, default: '' }) readonly size!: RoundedButtonSize;
    @Prop({ type: String, default: '' }) readonly iconSize!: RoundedButtonIconSize;
    @Prop({ type: String, default: '' }) readonly type!: RoundedButtonType;
    @Prop({ type: String, default: null }) readonly iconUrl!: string;
    @Prop({ type: Boolean, default: false }) readonly isLoading!: boolean;

    click() {
        this.$emit('click');
    }

    get buttonClass() {
        return `${this.type} ${this.size}`;
    }

    get iconClass() {
        return `${this.iconSize}`;
    }

    get loaderSize() {
        return LoaderSize.Small;
    }
}
</script>

<style lang="scss" scoped>
.btn {
    border-radius: 10px;
    font-size: 14px;
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;
    line-height: initial;
    height: 35px;
    span {
        display: flex;
        font-size: $_14px;
        line-height: initial;
        font-weight: 500;
        color: unset;
    }
}

.storybook {
    width: 150px;
}

.partnership-big {
    height: 70px;
    @media (min-width: 992px) {
        height: 100%;
        min-height: 110px;
    }
    span {
        font-size: $_18px;
        @media (min-width: 992px) {
            font-size: $_30px;
        }
    }
}
.small {
    font-size: 12px;
}

.have-icon {
    text-align: left;
}
.btn:disabled {
    background: $ds-color-neutral;
    border-color: transparent;
    &:hover,
    &:focus,
    &:active,
    &:active:hover,
    &:active:focus {
        cursor: default;
        background: $ds-color-neutral;
        border-color: transparent;
    }
}

.button__icon {
    width: 16px;
    height: 14px;
    margin-right: 8px;
    flex-shrink: 0;
    fill: #ffffff;
    &_medium {
        width: 20px;
        height: 20px;
        margin-right: 11px;
    }
}

.primary {
    background: $ds-color-gradient-mirror-main;
    border: 0;
}

.red {
    background: $secondary-color;
}

.pressed {
    background: #ffffff;
    color: $ds-color-primary;
    border: 1px solid $ds-color-primary;
    .button__icon {
        fill: $ds-color-primary;
    }
    &:hover,
    &:active,
    &:active:hover,
    &:active:focus {
        background: $ds-color-primary;
        color: #ffffff;
        .button__icon {
            fill: #ffffff;
        }
    }
}

.link {
    background: none;
    color: #ffffff;
    text-decoration: underline;
    border: none;
    &:hover,
    &:focus,
    &:active,
    &:active:hover,
    &:active:focus {
        cursor: pointer;
        border: none;
        background: none;
    }
}

.outlined {
    background: none;
    color: #ffffff;
    border: 1px solid #ffffff;
    &:hover,
    &:focus,
    &:active,
    &:active:hover,
    &:active:focus {
        cursor: pointer;
        background: none;
    }
}

.pale {
    color: #d7eab3;
    background: none;
    border: 1px solid transparent;
    &:hover,
    &:focus,
    &:active,
    &:active:hover,
    &:active:focus {
        background: $ds-color-primary;
        border: 1px solid transparent;
    }
}

.gray {
    color: $ds-color-neutral;
    background: #ffffff;
    border-color: $ds-color-neutral;
    &:hover,
    &:focus,
    &:active,
    &:active:hover,
    &:active:focus {
        border-color: $ds-color-primary;
        color: $ds-color-primary;
        background: #ffffff;
    }
}

.dark-gray {
    color: $ds-color-black;
    background: $ds-color-inactive;
    border-color: transparent;
}

.gray-link {
    color: $ds-color-neutral;
    background: #ffffff;
    border-color: transparent;
    &:hover,
    &:focus,
    &:active,
    &:active:hover,
    &:active:focus {
        border-color: transparent;
        color: $ds-color-primary;
        background: #ffffff;
    }
    text-decoration: underline;
    width: unset;
    padding: 0;
}

.btn-grey-filled {
    svg {
        transition: all 0.3s;
        fill: #000000;
    }
    &:hover,
    &:focus,
    &:active,
    &:active:hover,
    &:active:focus {
        svg {
            fill: $ds-color-white;
        }
    }
}

.white {
    color: #000000;
    background: none;
    border-color: transparent;
    &:hover,
    &:focus,
    &:active,
    &:active:hover,
    &:active:focus {
        border-color: transparent;
        color: $ds-color-primary;
        background: none;
    }
}
</style>
