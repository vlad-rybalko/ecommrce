<template>
    <input
        @input="input"
        @blur="blur"
        @focus="focus"
        ref="input"
        :value="value"
        :dusk="dusk"
        :placeholder="placeholder"
        :type="inputType"
        class="sch-input"
        :class="inputClass"
        :id="inputId"
        :name="inputName"
        :style="inputStyle"
        :readonly="readonly"
        autocomplete="off"
    />
</template>

<script lang="ts">
import { Vue, Component, Prop } from 'vue-facing-decorator';
import { SchInputBackground, LoaderSize } from './lib/types';

@Component({
    emits: ['input', 'blur', 'focus'],
})
export default class SemyanichInput extends Vue {
    @Prop({ type: String, default: 'text' }) readonly inputType!: string;
    @Prop({ type: String, default: SchInputBackground.White }) readonly background!: SchInputBackground;
    @Prop({ type: String }) readonly value!: string;
    @Prop({ type: String }) readonly dusk!: string;
    @Prop({ type: String }) readonly placeholder!: string;
    @Prop({ type: String }) readonly inputId!: string;
    @Prop({ type: String }) readonly inputName!: string;
    @Prop({ type: Boolean }) readonly hasError!: boolean;
    @Prop({ type: Boolean }) readonly centered!: boolean;
    @Prop({ type: Boolean }) readonly readonly!: boolean;

    get loaderSize() {
        return LoaderSize.MediumSmall;
    }

    mounted() {
        this.$emit('mounted', this.$refs.input);
    }

    input(event: Event) {
        this.$emit('input', (event.target as HTMLInputElement).value);
    }

    blur(event: Event) {
        this.$emit('blur', (event.target as HTMLInputElement).value);
    }

    focus(event: Event) {
        this.$emit('focus', (event.target as HTMLInputElement).value);
    }

    clear() {
        this.$emit('input', '');
    }

    get inputClass() {
        return [{ 'sch-input_centred': this.centered }];
    }

    get inputStyle() {
        return {
            background: this.backgroundColor,
        };
    }

    get backgroundColor() {
        return this.hasError ? SchInputBackground.Red : this.background;
    }
}
</script>

<style lang="scss">
.sch-input__container {
    position: relative;
}

.sch-input {
    width: 100%;
    font-size: $_14px;
    background-color: $ds-color-white;
    border: 1px solid #e5e5e5;
    border-radius: 10px;
    padding: 0 18px;
    height: 35px;
    position: relative;
    &_gray {
        background: $ds-color-background;
    }
    &_error {
        background: $ds-color-error-background;
    }
    &_centred {
        text-align: center;
    }
}

.sch-input__description {
    &_error {
        color: $secondary-color;
    }
}
</style>
