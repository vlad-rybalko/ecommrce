<template>
    <div :class="$style.popup">
        <loader v-if="isLoading" />
        <slot v-else />
    </div>
</template>

<script lang="ts">
import { Vue, Component, Prop } from 'vue-facing-decorator';
import Loader from 'shared/components/loader.vue';
@Component({
    components: {
        loader: Loader,
    },
})
export default class Popup extends Vue {
    @Prop({ type: Boolean, default: false }) readonly isLoading!: boolean;
}
</script>

<style module lang="scss">
.popup {
}
</style>
