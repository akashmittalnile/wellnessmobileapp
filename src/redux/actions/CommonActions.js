import * as actionTypes from '../actionTypes'

export const setIsLoading = payload => ({
  type: actionTypes.SET_IS_LOADING,
  payload,
});
export const setCustomerData = payload => ({
  type: actionTypes.SET_CUSTOMER_DATA,
  payload,
});
