import * as actionTypes from '../actionTypes'

const initialState = {
    isListening: false,
    speechText: ''
}

const journalReducer = (state = initialState, actions) => {
    const { payload, type } = actions

    switch (type) {

        case actionTypes.START_LISTENING:
            return {
                ...state,
                isListening: true,
                speechText: '',
                journalListData: null
            };
        case actionTypes.STOP_LISTENING:
            return {
                 ...state,
                 isListening: false 
                };
        case actionTypes.SET_SPEECH_TEXT:
            return { 
                ...state, 
                speechText: payload 
            };
            case actionTypes.SET_JOURNAL_LIST:
                return { ...state, 
                    journalListData: payload 
                };
        default: {
            return state
        }
    }
}

export default journalReducer