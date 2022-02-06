import { LOAD_DEVICES } from '../acions/devices'

const initialState = {
    devices: []
}

export const deviceReducer = (state=initialState,action) => {
    switch (action.type) {
        case LOAD_DEVICES:
            return {...state, devices: action.payload}
        default:
            return state;
    }
}