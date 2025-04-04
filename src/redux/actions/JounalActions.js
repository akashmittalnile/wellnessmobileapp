import * as actionTypes from '../actionTypes'

export const startListening = payload => ({
  type: actionTypes.START_LISTENING,
  payload,
});
export const stopListening = payload => ({
    type: actionTypes.STOP_LISTENING,
    payload,
  });
  export const setSpeechText = payload => ({
    type: actionTypes.SET_SPEECH_TEXT,
    payload,
  });
  export const addJournal = payload => ({
    type: actionTypes.ADD_JOURNAL,
    payload,
  });
  export const getJournalList = payload => ({
    type: actionTypes.GET_JOURNAL_LIST,
    payload,
  });
  export const setJournalList = payload => ({
    type: actionTypes.SET_JOURNAL_LIST,
    payload,
  });