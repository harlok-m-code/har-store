const initialState = {
    ready: false
}

export const readyReducer = (state = initialState, action) => {
    switch (action.type) {
        case "IS_READY":
            return {...state, ready: action.payload}
        default:
            return state;
    }
}