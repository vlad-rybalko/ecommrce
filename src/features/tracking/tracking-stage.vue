<template>
    <div class="tracking-stage" :class="trackingClass">
        <div class="tracking-stage__image-container">
            <component :is="imageSelector"></component>
            <div class="tracking-stage__vertical-line"></div>
        </div>
        <div v-if="isLocationUnavailable" class="tracking-stage__content">
            <div class="tracking-stage__text-container">
                <p class="ds-text-4">{{ stage.title }}</p>
                <p class="ds-text-6">{{ stage.date }}</p>
            </div>
        </div>
        <div v-else class="tracking-stage__content">
            <p class="tracking-stage__content-width ds-text-4">{{ stage.title }}</p>
            <div class="tracking-stage__text-container">
                <p class="ds-text-6">{{ stage.location }}</p>
                <p class="ds-text-6">{{ stage.date }}</p>
            </div>
        </div>
    </div>
</template>

<script lang="ts">
import { Vue, Component, Prop } from 'vue-facing-decorator';
import { TrackingStage, TrackingStageType } from 'entities/tracking/types';
import DeviceManager from 'shared/modules/DeviceManager';
import Box from 'shared/images/tracking/ico-tracking-box.svg?component';
import Plus from 'shared/images/tracking/ico-tracking-plus.svg?component';
import Triangle from 'shared/images/tracking/ico-tracking-triangle.svg?component';
import Done from 'shared/images/tracking/ico-tracking-done.svg?component';

@Component({
    components: {
        Box,
        Plus,
        Triangle,
        Done,
    },
})
export default class TrackingStageComponent extends Vue {
    @Prop({ type: Object }) readonly stage!: TrackingStage;
    @Prop({ type: Boolean }) readonly isFirst!: boolean;
    @Prop({ type: Boolean }) readonly isLast!: boolean;

    get imageSelector() {
        switch (this.stage.type) {
            case TrackingStageType.Initial:
                return Plus;
            case TrackingStageType.Default:
                return Triangle;
            case TrackingStageType.Waiting:
                return Box;
            case TrackingStageType.Done:
                return Done;
        }
    }

    get trackingClass() {
        let res = '';
        res += this.isFirst ? 'tracking-stage_first ' : ' ';
        res += this.isLast ? 'tracking-stage_last ' : ' ';
        return res;
    }

    get isLocationUnavailable() {
        return DeviceManager.isMobile && this.stage.location.length === 0;
    }

    mounted() {
        console.log('aboba');
    }
}
</script>

<style lang="scss" scoped>
.tracking-stage {
    display: flex;
    svg {
        width: 19px;
        height: 19px;
        margin-left: 2px;
        fill: $ds-color-neutral;
    }
    color: $ds-color-neutral;
}

.tracking-stage_first {
    color: #000000;
    svg {
        width: 23px;
        height: 23px;
        margin-left: 0;
        fill: $ds-color-primary;
        @media (min-width: 992px) {
            position: relative;
            top: -1px;
        }
    }
}

.tracking-stage_last {
    .tracking-stage__vertical-line {
        display: none;
    }
}

.tracking-stage__image-container {
    margin-right: 9px;
    display: flex;
    flex-direction: column;
    @media (min-width: 992px) {
        position: relative;
        top: 3px;
    }
}

.tracking-stage__vertical-line {
    width: 1px;
    min-height: 22px;
    height: calc(100% - 19px);
    background: $ds-color-neutral;
    position: relative;
    top: 0px;
    left: 11px;
    @media (min-width: 992px) {
        min-height: 22px;
    }
}

.tracking-stage__content {
    width: 100%;
    margin-bottom: 15px;
    .tracking-stage__content-width {
        width: 70%;
        margin: 0 10px 0 0;
    }
    @media (min-width: 992px) {
        display: flex;
        .tracking-stage__content-width {
            width: 41.5%;
        }
    }
    @media (min-width: 1150px) {
        display: flex;
        .tracking-stage__content-width {
            width: 43.5%;
        }
    }
}

.tracking-stage__text-container {
    display: flex;
    justify-content: space-between;
    width: 100%;
    @media (min-width: 992px) {
        flex: 1;
    }
    *:first-child {
        width: 60%;
    }
    *:last-child {
        width: 40%;
        text-align: end;
    }
}
</style>
