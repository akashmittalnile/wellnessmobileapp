import * as actionTypes from '../actionTypes'

const initialState = {
    isLoading: false,
    customerData:null,
    isRefreshing: false,
}

const common = (state = initialState, actions) => {
    const { payload, type } = actions

    switch (type) {
        case actionTypes.SET_IS_LOADING: {
            return {
                ...state,
                isLoading: payload
            }
        }
        case actionTypes.SET_CUSTOMER_DATA: {
            return {
                ...state,
                customerData: payload
            }
        }
        case actionTypes.SET_IS_REFRESHING: {
            return {
                ...state,
                isRefreshing: payload
            }
        }

        default: {
            return state
        }
    }
}

export default common