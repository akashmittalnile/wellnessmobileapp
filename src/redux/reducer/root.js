import { combineReducers } from 'redux';
import { CLEAN_STORE } from '../actionTypes';
import common from './common';
import authreducer from './authreducer';
import journalReducer from './journalReducer'


const rootReducer = combineReducers({
   common,
   authreducer,
   journalReducer,
})

const appReducer = (state, action) => {
    if (action.type == CLEAN_STORE) {
        state = undefined;
    }
    return rootReducer(state, action);
};

export default appReducer;