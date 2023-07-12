<template>
    <div class="tracking-form">
        <div class="tracking-form__form">
            <loader v-if="isLoading" />
            <div v-if="isError" class="ds-container_error tracking-form__error_wrapper">
                <p class="ds-text-1 bold">!</p>
                <p class="ds-text-6 bold">
                    {{ errorMessage }}
                </p>
            </div>
            <div class="tracking-form__container ds-container_inactive">
                <h1>
                    {{ translations.enter_data }}
                </h1>
                <div class="ds-text-6 bold">
                    {{ translations.track_number }}
                </div>
                <form @submit.prevent="sendForm">
                    <sch-input
                        class="tracking-form__input"
                        v-model="trackNumber"
                        inputType="text"
                        :hasError="isError"
                        inputName="track_number"
                        placeholder="1224874565641"
                        centered
                    />
                </form>
                <div class="ds-text-6 tracking-form__or">
                    {{ translations.or }}
                </div>
                <form class="tracking-form__secondary-form" @submit.prevent="sendForm">
                    <div class="ds-text-6 bold">
                        {{ translations.order_number }}
                    </div>
                    <sch-input
                        class="tracking-form__input"
                        v-model="orderNumber"
                        inputType="number"
                        :hasError="isError"
                        inputName="order_number"
                        placeholder="1224874565641"
                        centered
                    />
                    <div class="ds-text-6 bold">
                        {{ translations.email }}
                    </div>
                    <sch-input
                        class="tracking-form__input"
                        v-model="email"
                        inputType="text"
                        :hasError="isError"
                        inputName="email"
                        placeholder="user@example.com"
                        centered
                    />
                    <rounded-button class="tracking-form__button b-tracking__submit" :title="translations.confirm" />
                </form>
            </div>
        </div>
        <div class="tracking-form__decoration ds-container_primary">
            <h1 class="title-xl">
                {{ translations.check_order }}
            </h1>
            <p class="ds-text-6">
                {{ translations.fast_way }}
            </p>
            <img src="~/assets/img/tracking/boxes.svg?url" />
        </div>
    </div>
</template>

<script lang="ts">
import { Vue, Component, Prop } from 'vue-facing-decorator';
import { TrackingFormStatus, TrackingPayload } from 'entities/tracking/types';
import TrackingRepository, { TrackingError } from './api/TrackingRepository';
// import TrackingFormValidator from '../../../../../common/js/input-validators/form-validators/TrackingFormValidator'
import Loader from 'shared/components/loader.vue';
import SchInput from 'shared/components/sch-input.vue';
import RoundedButton from 'shared/components/rounded-button.vue';

@Component({
    components: {
        loader: Loader,
        'sch-input': SchInput,
        'rounded-button': RoundedButton,
    },
})
export default class TrackingForm extends Vue {
    // @Prop({type: Object}) readonly translations!: {[key: string]: string}
    @Prop({ type: Object }) readonly payloadProp!: TrackingPayload;

    // validator: TrackingFormValidator;

    translations = {
        header: 'Трекинг',
        submit: 'Запросить',
        disclaimer: 'Чтобы узнать статус посылки потребуется ввести email, привязанный к заказу и номер заказа',
        result_title: 'Информация об отправлении',
        track_number_label: 'Номер трека',
        track_weight: 'Вес',
        delivery_type: 'Тип отправления',
        track_price: 'Ценность',
        from: 'От',
        to: 'Кому',
        combination_not_found: 'Не найдено ни одного заказа с введенными Вами данными.',
        track_history_not_found: 'Ваш заказ еще не был отправлен.',
        order_has_not_track_yet: 'Заказу еще не назначен почтовый трек. Попробуйте ещё раз через некоторое время.',
        something_went_wrong: 'Сервис временно недоступен, попробуйте позже',
        empty_track: 'Order ID=order_id не получен трек',
        now_order_in_status: 'Ваш заказ сейчас в статусе: <b>:status</b>',

        title: 'Где мой заказ?',
        enter_data: 'Введите данные',
        track_number: 'Введите трек-номер',
        order_number: 'Введите номер заказа',
        email: 'Введите email',
        confirm: 'Подтвердить',
        or: 'Или',
        check_order: 'Проверьте местоположение своего заказа',
        fast_way: 'Быстрый и удобный способ отслеживания заказа от магазина Семена',
        delivery_status: 'Статус доставки:',
        info: 'Информация об отправлении',
        type: 'Тип отправления:',
        track_number_value: 'Номер трека:',
        address: 'Адрес пункта выдачи:',
        sending: 'Отправление',
        location: 'Местоположение',
        date: 'Дата',
        enter_again: 'Ввести заново трек-номер',

        unknown_error: 'Произошла неизвестная ошибка.',
        request_error: 'Произошла ошибка при выполнении запроса. Повторите попытку позже.',
    };

    mounted() {
        if (this.payloadProp) {
            this.payload = this.payloadProp;
        }
        // this.validator = new TrackingFormValidator();
    }

    repository = new TrackingRepository((this.translations as { unknown_error: string }).unknown_error);

    payload: TrackingPayload = {
        order_number: null,
        track_number: null,
        email: null,
    };

    get trackNumber() {
        return this.payload.track_number ?? '';
    }
    set trackNumber(val: string) {
        this.status = TrackingFormStatus.Default;
        this.payload.track_number = val;
    }

    get orderNumber() {
        return (this.payload.order_number ?? '').toString();
    }
    set orderNumber(val: string) {
        this.status = TrackingFormStatus.Default;
        this.payload.order_number = parseInt(val);
    }

    get email() {
        return this.payload.email ?? '';
    }
    set email(val: string) {
        this.status = TrackingFormStatus.Default;
        this.payload.email = val;
    }

    errorMessage = '';

    status: TrackingFormStatus = TrackingFormStatus.Default;

    get isLoading() {
        return this.status === TrackingFormStatus.Loading;
    }

    get isError() {
        return this.status === TrackingFormStatus.Error;
    }

    async sendForm() {
        // if (!this.validator.isValid) {
        //     this.status = TrackingFormStatus.Error;
        //     this.errorMessage = this.validator.errorsString;
        //     return;
        // }
        this.status = TrackingFormStatus.Loading;
        const response = await this.repository.checkTracking(this.payload);
        if ((response as TrackingError).success === false) {
            this.status = TrackingFormStatus.Error;
            this.errorMessage = (response as TrackingError).message;
            this.$emit('errorReceived', response);
            return;
        }
        this.status = TrackingFormStatus.Success;
        this.$emit('resultReceived', response);
    }
}
</script>

<style lang="scss">
@import '~/assets/scss/variables.scss';
.tracking-form {
    .help-block {
        text-align: center;
    }
}
</style>

<style lang="scss" scoped>
.tracking-form__error_wrapper {
    display: flex;
    align-items: center;
    padding: 15px;
    margin-bottom: 12px;
    .ds-text-1 {
        font-size: $_50px;
        margin-bottom: 0;
        margin-right: 23px;
        margin-left: 15px;
    }
}

.tracking-form__decoration {
    position: relative;
    border-radius: 10px;
    padding: 30px 155px 0 25px;
    @media (max-width: 1100px) {
        display: none;
    }
    img {
        position: absolute;
        right: 0;
        bottom: 0;
    }
    h1 {
        text-transform: uppercase;
    }
}

form {
    width: 223px;
}

.ds-loader {
    @media (min-width: 992px) {
        top: 125px;
    }
}

.tracking-form {
    @media (min-width: 992px) {
        display: flex;
        gap: 15px;
        .tracking-form__form {
            width: 900px;
        }
    }
}

.tracking-form__container {
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 15px;
    h1 {
        text-align: center;
        margin-top: 0;
        margin-bottom: 25px;
    }
    .ds-text-6 {
        margin-bottom: 8px;
    }
    .tracking-form__or {
        color: $ds-color-neutral;
        margin-bottom: 11px;
    }
    @media (min-width: 992px) {
        padding: 25px 55px 40px 55px;
    }
}

.tracking-form__input {
    width: 100%;
    margin-bottom: 17px;
}

.tracking-form__button {
    width: 100%;
    height: 35px;
    margin-top: 13px;
}

.tracking-form__secondary-form {
    display: flex;
    flex-direction: column;
    align-items: center;
}
</style>
