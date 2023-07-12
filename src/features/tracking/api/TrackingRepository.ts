import { TrackingPayload, TrackingStage, TrackingStageType } from 'entities/tracking/types';
import { APIVersion } from 'shared/api/APIVersion';
import BaseRepository from 'shared/api/BaseRepository';
import { DeliveryType } from 'entities/delivery/types/DeliveryType';

export default class TrackingRepository extends BaseRepository {
    private readonly defaultErrorMessage: string;

    constructor(defaultErrorMessage: string) {
        super();
        this.defaultErrorMessage = defaultErrorMessage;
    }

    async checkTracking(payload: TrackingPayload): Promise<TrackingResponse> {
        try {
            const response = await fetch(`/api/${APIVersion.AlbertHofmann}/tracking`, {
                method: 'POST',
                headers: super.headers,
                body: JSON.stringify(payload),
            });
            const json = (await response.json()) as TrackingResponse;
            if (this.responseIsError(json)) {
                const errorMessage = this.getErrorMessage(json);
                return {
                    success: false,
                    message: errorMessage,
                };
            }
            return json;
        } catch (exception) {
            console.error(exception);
            const errorMessage = exception ? (exception as { message: string }).message : this.defaultErrorMessage;
            const res: TrackingError = {
                success: false,
                message: errorMessage,
            };
            return res;
        }
    }

    getErrorMessage(errorResponse: TrackingResponse) {
        if ((errorResponse as TrackingError).success === false) {
            return (errorResponse as TrackingError).message;
        }
        const errors = (errorResponse as TrackingInputError).errors;
        const key = Object.keys(errors)[0];
        return errors[key][0];
    }

    responseIsError(response: TrackingResponse) {
        return (response as TrackingError).message !== undefined;
    }

    static mock = {
        delivery_type: DeliveryType.Boxberry,
        delivery_logo: '/static/img/deliveries/cdek.svg',
        track_number: 123456,
        address: '',
        tracking_stages: [
            {
                title: 'Зарfdsaегистрирован',
                location: 'Черноголовка',
                date: '01.01.0201',
                type: TrackingStageType.Default,
            },
            {
                title: 'Ожидает получения',
                location: 'Черноголовка',
                date: '01.01.0201',
                type: TrackingStageType.Waiting,
            },
            {
                title: 'Заказ получен',
                location: 'Черноголовка',
                date: '01.01.0201',
                type: TrackingStageType.Done,
            },
            {
                title: 'Зарегистрирован',
                location: '',
                date: '01.01.0201 15:15:15',
                type: TrackingStageType.Initial,
            },
            {
                title: 'Зарегистриgdfрован',
                location: '',
                date: '01.01.0201 15:15:14',
                type: TrackingStageType.Default,
            },
            {
                title: 'Зарfdsaегистрирован',
                location: '',
                date: '01.01.0201 15:15:13',
                type: TrackingStageType.Default,
            },
        ],
    };
}

export type TrackingSuccessResponse = {
    delivery_type: DeliveryType;
    delivery_logo: string;
    track_number: number;
    address: string;
    tracking_stages: TrackingStage[];
};

export type TrackingError = {
    success: boolean;
    message: string;
};

export type TrackingInputError = {
    errors: {
        [key: string]: string[];
    };
    message: string;
};

export type TrackingResponse = TrackingSuccessResponse | TrackingError | TrackingInputError;
