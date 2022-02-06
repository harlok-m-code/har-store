import { combineReducers } from 'redux';
import { readyReducer } from './ready'
import { deviceReducer } from './devices'


export const rootReducer = combineReducers({
    ready: readyReducer,
    devices: deviceReducer,
});
