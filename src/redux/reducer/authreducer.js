import * as actionTypes from '../actionTypes'

const initialState = {
    phoneNumberCountryCode: '91',
    logOutModal:false,
    logOutData:null,
    resetEmail:null,

}

const authreducer = (state = initialState, actions) => {
    const { payload, type } = actions

    switch (type) {
        case actionTypes.COUNTRY_CODE: {
        
            return {
                ...state,
                phoneNumberCountryCode: payload
            }
        }
        case actionTypes.ON_LOGOUT_MODAL: {
        
            return {
                ...state,
                logOutModal: payload
            }
        }
        case actionTypes.LOGOUT_MODAL_DATA: {
        
            return {
                ...state,
                logOutData: payload
            }
        }
        case actionTypes.SET_VERIFY_EMAIL: {
        
            return {
                ...state,
                resetEmail: payload
            }
        }
      
      

        default: {
            return state
        }
    }
}

export default authreducer