import { combineReducers } from 'redux';
import { CLEAN_STORE } from '../actionTypes';
import common from './common';
import authreducer from './authreducer';


const rootReducer = combineReducers({
   common,
   authreducer
})

const appReducer = (state, action) => {
    if (action.type == CLEAN_STORE) {
        state = undefined;
    }
    return rootReducer(state, action);
};

export default appReducer;