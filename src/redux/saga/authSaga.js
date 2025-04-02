import { call, put, takeLatest } from "redux-saga/effects"
import { navigate, resetToScreen } from "../../navigations/NavigationServices"
import { blobRequest, blobRequestWithoutToken, withoutTokenPostRequest } from "../../utils/apirequests"
import { api_url, change_user_password, get_login, get_logout, get_signup, update_profile_data, verify_email, verify_opt } from "../../config/constants"
import * as actionTypes from '../actionTypes';
import AsyncStorage from "@react-native-async-storage/async-storage";
import { showToastMessage } from "../../utils/service";
import axios from "axios";

function* onLogin(actions) {
    try {
    
        const { payload } = actions
        yield put({ type: actionTypes.SET_IS_LOADING, payload: true })
        const response = yield withoutTokenPostRequest({
            url: api_url + get_login,
            data: payload
        })

        if (response?.status) {
      
            yield AsyncStorage.setItem('token', JSON.stringify(response?.authorization?.token))
            yield put({ type: actionTypes.SET_CUSTOMER_DATA, payload: response?.user })
            showToastMessage({ message: response?.message })
            yield call(resetToScreen('home'))
           
        } else {
            if (response?.isAnotherLoggedIn) {
                yield put({type: actionTypes.ON_LOGOUT_MODAL, payload: true})
                yield put({type: actionTypes.LOGOUT_MODAL_DATA, payload: response?.token})
                console.log('first')
            } else {
                showToastMessage({ message: response?.message }) 
            }
          
        }

        yield put({ type: actionTypes.SET_IS_LOADING, payload: false })
    } catch (e) {
        yield put({ type: actionTypes.SET_IS_LOADING, payload: false })
        console.log('hii', e);
    }
}
function* onRegister(actions) {
    try {
      
        const { payload } = actions
        console.log(payload)
     
        yield put({ type: actionTypes.SET_IS_LOADING, payload: true })
        const response = yield blobRequestWithoutToken({
            url: api_url + get_signup,
            data: payload
        })
       
        if (response?.status) {

            yield AsyncStorage.setItem('token', JSON.stringify(response?.authorization?.token))
            yield put({ type: actionTypes.SET_CUSTOMER_DATA, payload: response?.user })
            showToastMessage({ message: response?.message })

            yield call(navigate, 'signin')
        } else {
            showToastMessage({ message: response?.message })
            
        }

        yield put({ type: actionTypes.SET_IS_LOADING, payload: false })
    } catch (e) {
        yield put({ type: actionTypes.SET_IS_LOADING, payload: false })
        console.log('hii', e);
        console.log('2')
    }
}
function* onLogoutAccount(actions) {  
    console.log('first')
    try {
        const { payload } = actions
        yield put({ type: actionTypes.SET_IS_LOADING, payload: true })
        const response = yield axios({
            method: 'post',
            url: api_url + get_logout,
            headers: {
                'Authorization': `Bearer ${payload?.token}`
            },
        });
        if (response?.status) {
            yield put({type: actionTypes.ON_LOGOUT_MODAL, payload: false})
            yield put({type: actionTypes.LOGOUT_MODAL_DATA, payload: null})
            yield put({ type: actionTypes.SET_CUSTOMER_DATA, payload: null})
            showToastMessage({ message: response?.data?.message }) 
        } else {
                showToastMessage({ message: response?.message }) 
        }

        yield put({ type: actionTypes.SET_IS_LOADING, payload: false })
    } catch (e) {
        yield put({ type: actionTypes.SET_IS_LOADING, payload: false })
        console.log('hii', e);
    }
}
function* verifyEmail(actions) {
    try {
    
        const { payload } = actions
        yield put({ type: actionTypes.SET_IS_LOADING, payload: true })
        const response = yield withoutTokenPostRequest({
            url: api_url + verify_email,
            data: payload
        })
        if (response?.status) {
            yield put({ type: actionTypes.SET_VERIFY_EMAIL, payload: response })
            showToastMessage({ message: response?.message })      
            yield call(navigate, 'forgototp')
        } else {       
                showToastMessage({ message: response?.message }) 
        }

        yield put({ type: actionTypes.SET_IS_LOADING, payload: false })
    } catch (e) {
        yield put({ type: actionTypes.SET_IS_LOADING, payload: false })
        console.log('hii', e);
    }
}
function* verifyOtp(actions) {
    try {
    
        const { payload } = actions
        yield put({ type: actionTypes.SET_IS_LOADING, payload: true })
        const response = yield withoutTokenPostRequest({
            url: api_url + verify_opt,
            data: payload
        })
        if (response?.status) {
            showToastMessage({ message: response?.message })      
            yield call(navigate, 'resetpassword')
        } else {       
                showToastMessage({ message: response?.message }) 
        }

        yield put({ type: actionTypes.SET_IS_LOADING, payload: false })
    } catch (e) {
        yield put({ type: actionTypes.SET_IS_LOADING, payload: false })
        console.log('hii', e);
    }
}
function* changeUserPassword(actions) {
    try {
    
        const { payload } = actions
        console.log(payload,':::payload check')
        yield put({ type: actionTypes.SET_IS_LOADING, payload: true })
        const response = yield withoutTokenPostRequest({
            url: api_url + change_user_password,
            data: payload
        })
        if (response?.status) {
            showToastMessage({ message: response?.message })
            if (typeof payload?.onComplete === 'function') {
                yield call(payload.onComplete);
            }      
           
        } else {       
                showToastMessage({ message: response?.message }) 
        }

        yield put({ type: actionTypes.SET_IS_LOADING, payload: false })
    } catch (e) {
        yield put({ type: actionTypes.SET_IS_LOADING, payload: false })
        console.log('hii', e);
    }
}
function* updateProfileData(actions) {
    try {
      
        const { payload } = actions
        console.log(payload,'0')
     
        yield put({ type: actionTypes.SET_IS_LOADING, payload: true })
        const response = yield blobRequest({
            url: api_url + update_profile_data,
            data: payload
        })
        if (response?.status) {
            yield put({ type: actionTypes.SET_CUSTOMER_DATA, payload: response?.user })
            showToastMessage({ message: response?.message })
            yield call(resetToScreen('home'))
        } else {
            showToastMessage({ message: response?.message })
            
        }

        yield put({ type: actionTypes.SET_IS_LOADING, payload: false })
    } catch (e) {
        yield put({ type: actionTypes.SET_IS_LOADING, payload: false })
        console.log('hii', e);
     
    }
}
export default function* authSaga() {
    yield takeLatest(actionTypes.ON_LOGIN, onLogin);
    yield takeLatest(actionTypes.ON_REGISTER, onRegister);
    yield takeLatest(actionTypes.ON_LOGOUT_ACCOUNT, onLogoutAccount);
    yield takeLatest(actionTypes.VERIFY_EMAIL, verifyEmail);
    yield takeLatest(actionTypes.VERIFY_OTP, verifyOtp);
    yield takeLatest(actionTypes.CHANGE_USER_PASSWORD, changeUserPassword);
    yield takeLatest(actionTypes.UPDATE_PROFILE_DATA, updateProfileData);
}