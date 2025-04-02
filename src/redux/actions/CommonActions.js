import * as actionTypes from '../actionTypes'

export const setIsLoading = payload => ({
  type: actionTypes.SET_IS_LOADING,
  payload,
});
export const setCustomerData = payload => ({
  type: actionTypes.SET_CUSTOMER_DATA,
  payload,
});
export const getSplash = payload => ({
  type: actionTypes.GET_SPLASH,
  payload,
});
export const logOutAccount = payload => ({
  type: actionTypes.LOG_OUT_ACCOUNT,
  payload,
});
