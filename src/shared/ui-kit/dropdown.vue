<template>
    <div :class="$style.dropdown" @mouseleave="pm_mouseLeave" @mouseenter="pm_mouseEnter">
        <div :class="$style.trigger" @click="pm_triggerButtonClick">
            <slot name="trigger" />
        </div>
        <transition name="fade">
            <div v-show="pm_popupShown" :class="[$style.content, contentClass]">
                <slot name="content" />
            </div>
        </transition>
    </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-facing-decorator';
import PopupMixin from 'shared/mixins/PopupMixin';

@Component({
    mixins: [PopupMixin],
})
export default class Dropdown extends Vue {
    @Prop({ type: String, default: '' }) readonly contentClass!: string;
    @Prop({ type: String }) readonly overlayName!: string;
    mounted() {
        this.pm_addToOverlaysManager(this.overlayName);
    }
}
</script>

<style lang="scss" module>
.dropdown {
    position: relative;
    display: flex;
}

.trigger {
    display: flex;
}

.content {
    position: absolute;
    display: flex;
    flex-direction: column;
    background: $ds-color-white;
    border-radius: 10px;
    z-index: 1001;
    box-shadow: $ds-shadow-small;
}
</style>
