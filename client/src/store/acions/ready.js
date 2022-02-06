const IS_READY = "IS_READY";

export const isReadyAction = (value) => ({
    type: IS_READY,
    payload: value
})