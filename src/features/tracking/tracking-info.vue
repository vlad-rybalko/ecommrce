<template>
    <div class="tracking-info">
        <div class="tracking-info__header">
            <p class="tracking-info__header-delivery-status">{{ translations.delivery_status }}</p>
            <p class="ds-text-3">
                {{ deliveryStatus }}
            </p>
        </div>
        <div class="tracking-info__content">
            <div class="tracking-info__container">
                <div class="tracking-info__subheader">
                    <div class="ds-text-4 bold">{{ translations.info }}</div>
                    <img v-if="isMobile" :src="info.delivery_logo" />
                    <rounded-button
                        v-if="!isMobile"
                        title="Ввести заново трек-номер"
                        :type="headerButtonType"
                        @click="resetForm"
                    />
                </div>
                <div class="tracking-info__departure-items-container">
                    <div class="tracking-info__departure-items">
                        <div class="tracking-info__departure-item">
                            <p class="ds-text-7 bold">
                                {{ translations.type }}
                            </p>
                            <p class="ds-text-6 bold">
                                {{ info.delivery_type }}
                            </p>
                        </div>
                        <div class="tracking-info__departure-item">
                            <p class="ds-text-7 bold">
                                {{ translations.track_number_value }}
                            </p>
                            <p class="ds-text-6 bold">
                                {{ info.track_number }}
                            </p>
                        </div>
                        <div v-if="hasAddress" class="tracking-info__departure-item">
                            <p class="ds-text-7 bold">
                                {{ translations.address }}
                            </p>
                            <p class="ds-text-7 bold">
                                {{ info.address }}
                            </p>
                        </div>
                    </div>
                    <div v-if="!isMobile" class="tracking-info__desktop-image">
                        <img :src="info.delivery_logo" />
                    </div>
                </div>
            </div>
            <hr class="mobile" v-if="isMobile" />
            <div class="tracking-info__container">
                <div class="tracking-info__stages-header">
                    <p class="ds-text-7">
                        {{ translations.sending }}
                    </p>
                    <p v-if="stagesHaveLocation" class="ds-text-7">
                        {{ translations.location }}
                    </p>
                    <p class="ds-text-7">
                        {{ translations.date }}
                    </p>
                </div>
                <hr v-if="!isMobile" />
                <tracking-stage
                    v-for="(stage, index) in info.tracking_stages"
                    :key="stage.date + stage.title"
                    :stage="stage"
                    :isFirst="index === 0"
                    :isLast="index === info.tracking_stages.length - 1"
                />
            </div>
        </div>
        <rounded-button v-if="isMobile" :title="translations.enter_again" :type="buttonType" @click="resetForm" />
    </div>
</template>

<script lang="ts">
import { Vue, Component, Prop } from 'vue-facing-decorator';
import { RoundedButtonType } from 'shared/components/lib/types';
import { TrackingSuccessResponse } from './api/TrackingRepository';
import DeviceManager from 'shared/modules/DeviceManager';
import RoundedButton from '@/src/shared/components/rounded-button.vue';
import TrackingStage from './tracking-stage.vue';

@Component({
    components: {
        'rounded-button': RoundedButton,
        'tracking-stage': TrackingStage,
    },
})
export default class TrackingInfo extends Vue {
    @Prop({ type: Object, required: true }) readonly info!: TrackingSuccessResponse;

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

    get deliveryStatus() {
        return this.info.tracking_stages[0].title;
    }

    get buttonType() {
        return RoundedButtonType.Gray;
    }

    get headerButtonType() {
        return RoundedButtonType.GrayLink;
    }

    get isMobile(): boolean | undefined {
        return DeviceManager.isMobile;
    }

    get hasAddress() {
        return this.info.address?.length > 0;
    }

    get stagesHaveLocation() {
        return this.info.tracking_stages[0].location?.length > 0;
    }

    resetForm() {
        this.$emit('resetForm');
    }
}
</script>

<style lang="scss" scoped>
.tracking-info {
    .btn {
        margin-top: 40px;
        @media (min-width: 992px) {
            margin-top: 0;
        }
    }

    .ds-text-7 {
        text-transform: uppercase;
        color: $ds-color-neutral;
        margin-bottom: 0;
    }
}

.tracking-info__container {
    @media (min-width: 992px) {
        box-shadow: $ds-shadow-main;
        border-radius: 10px;
        margin-bottom: 10px;
        padding: 20px;
    }
}

.tracking-info__stages-header {
    display: none;
    @media (min-width: 992px) {
        display: flex;
        justify-content: space-between;
    }
}

.tracking-info__header {
    height: 93px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background: $ds-color-gradient-main;
    .ds-text-3 {
        color: #ffffff;
    }
    .tracking-info__header-delivery-status {
        color: #ffffff;
        opacity: 0.8;
        font-size: $_14px;
        line-height: 27px;
    }
    @media (min-width: 992px) {
        border-radius: 10px;
        margin-bottom: 10px;
        padding: 20px;
        align-items: flex-start;
    }
}

.tracking-info__subheader {
    display: flex;
    justify-content: space-between;
    margin-bottom: 15px;
}
img {
    height: 25px;
}

.tracking-info__desktop-image {
    position: relative;
    right: 0;
    display: flex;
    justify-content: flex-end;
    align-items: center;
}

.tracking-info__departure-items-container {
    @media (min-width: 992px) {
        display: flex;
        justify-content: space-between;
        .tracking-info__departure-items {
            display: flex;
            .tracking-info__departure-item {
                margin-right: 50px;
            }
        }
    }
}

.tracking-info__content {
    box-shadow: $ds-shadow-main;
    padding: 15px;
    @media (min-width: 992px) {
        padding: 0;
        box-shadow: none;
    }
}

hr {
    height: 1px;
    width: 100%;
    background: $ds-color-background;
    margin-top: 10px;
    margin-bottom: 20px;
}

hr.mobile {
    margin-top: 15px;
    margin-bottom: 30px;
}
</style>
