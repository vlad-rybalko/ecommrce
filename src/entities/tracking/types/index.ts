enum TrackingFormStatus {
    Default = 'default',
    Loading = 'loading',
    Success = 'success',
    Error = 'error',
}

type TrackingStage = {
    title: string;
    location: string;
    date: string;
    type: TrackingStageType;
};

enum TrackingStageType {
    Initial = 'initial',
    Default = 'default',
    Waiting = 'waiting',
    Done = 'picked',
}

type TrackingPayload = {
    order_number: number | null;
    track_number: string | null;
    email: string | null;
};

export { TrackingPayload, TrackingFormStatus, TrackingStage, TrackingStageType };
