import * as actionTypes from '../actionTypes'

export const countryCodeNew = payload => ({
  type: actionTypes.COUNTRY_CODE,
  payload,
});
export const onRegister = payload => ({
  type: actionTypes.ON_REGISTER,
  payload
})
export const onLogin = payload => ({
  type: actionTypes.ON_LOGIN,
  payload
})
export const onLogutModal = payload => ({
  type: actionTypes.ON_LOGOUT_MODAL,
  payload
})
export const logoutModalData = payload => ({
  type: actionTypes.LOGOUT_MODAL_DATA,
  payload
})
export const onLogoutAccount = payload => ({
  type: actionTypes.ON_LOGOUT_ACCOUNT,
  payload
})
export const verifyEmail = payload => ({
  type: actionTypes.VERIFY_EMAIL,
  payload
})
export const setVerifyEmail = payload => ({
  type: actionTypes.SET_VERIFY_EMAIL,
  payload
})
export const verifyOtp = payload => ({
  type: actionTypes.VERIFY_OTP,
  payload
})
export const changeUserPassword = payload => ({
  type: actionTypes.CHANGE_USER_PASSWORD,
  payload
})
export const updateProfileData = payload => ({
  type: actionTypes.UPDATE_PROFILE_DATA,
  payload
})
