import { call, put, takeLatest, takeLeading } from "redux-saga/effects"
import { resetToScreen } from "../../navigations/NavigationServices"
import * as actionTypes from '../actionTypes';
import AsyncStorage from "@react-native-async-storage/async-storage";
import { showToastMessage } from "../../utils/service";
import { api_url, get_logout, get_profile } from "../../config/constants";
import { getRequest, postRequest } from "../../utils/apirequests";

function* getSplash(actions) {
    try {
    
        const { payload } = actions
        yield put({ type: actionTypes.SET_IS_LOADING, payload: false })
        const response = yield getRequest({
            url: api_url + get_profile,
        })

        if (response?.status) {
            yield put({ type: actionTypes.SET_CUSTOMER_DATA, payload: response?.user })
            showToastMessage({ message: response?.message })
            yield call(resetToScreen('home'))
           
        } else {
            
            yield call(resetToScreen('welcome'))
        }

        yield put({ type: actionTypes.SET_IS_LOADING, payload: false })
    } catch (e) {
        yield put({ type: actionTypes.SET_IS_LOADING, payload: false })
        console.log('hii', e);
    }
}
function* logOutAccount(actions) {
    try {
    
        const { payload } = actions
        yield put({ type: actionTypes.SET_IS_LOADING, payload: true })
        const response = yield postRequest({
            url: api_url + get_logout,
        })

        if (response?.status) {
            yield put({ type: actionTypes.SET_CUSTOMER_DATA, payload: null })
            AsyncStorage.clear();
            showToastMessage({ message: response?.message })
            yield call(resetToScreen('welcome'))
           a
        } else {
            
          console.log('first')
        }

        yield put({ type: actionTypes.SET_IS_LOADING, payload: false })
    } catch (e) {
        yield put({ type: actionTypes.SET_IS_LOADING, payload: false })
        console.log('hii', e);
    }
}

export default function* authSaga() {
    yield takeLeading(actionTypes.GET_SPLASH, getSplash);
    yield takeLatest(actionTypes.LOG_OUT_ACCOUNT,logOutAccount)
   
}