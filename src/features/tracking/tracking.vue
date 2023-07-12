<template>
    <div class="tracking">
        <tracking-form
            v-if="showForm"
            :payloadProp="formPayload"
            @resultReceived="resultReceived"
            @errorReceived="errorReceived"
        ></tracking-form>
        <tracking-info
            :info="trackingInfo"
            @resetForm="resetForm"
        ></tracking-info>
    </div>
</template>

<script lang="ts">
import { Vue, Component, Prop } from 'vue-facing-decorator'
import ScrollToTop from 'shared/modules/ScrollToTop';
import TrackingRepository, { TrackingSuccessResponse } from './api/TrackingRepository';
import { TrackingPayload } from 'entities/tracking/types'

import TrackingForm from './tracking-form.vue';
import TrackingInfo from './tracking-info.vue';

@Component({
    components: {
        'tracking-form': TrackingForm,
        'tracking-info': TrackingInfo
    },
})
export default class Tracking extends Vue {
    // @Prop({type: Object}) readonly translations!: {[key: string]: string};
    @Prop({type: String}) readonly track!: string;
    @Prop({type: String}) readonly order_number!: string;
    @Prop({type: String}) readonly email!: string;

    showForm: boolean = true;

    trackingInfo: TrackingSuccessResponse | null = TrackingRepository.mock;

    formPayload: TrackingPayload | null = null;

    mounted() {
        if (this.track || this.order_number || this.email) {
            this.formPayload = {
                order_number: parseInt(this.order_number),
                track_number: this.track,
                email: this.email
            }
        }
    }

    resultReceived(result: TrackingSuccessResponse) {
        this.trackingInfo = result;
        this.showForm = false;
        ScrollToTop.scrollUp();
    }

    resetForm() {
        ScrollToTop.scrollUp();
        this.showForm = true;
    }

    errorReceived() {
        ScrollToTop.scrollUp();
    }

}
</script>
