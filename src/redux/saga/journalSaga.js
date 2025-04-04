import { call, put, takeLatest } from 'redux-saga/effects';
import Voice from '@react-native-voice/voice';
import * as actionTypes from '../actionTypes';
import store from '../store';
import { blobRequest, getRequest } from '../../utils/apirequests';
import { add_journal, api_url, journal_list_show } from '../../config/constants';
import { showToastMessage } from '../../utils/service';
import { navigate } from '../../navigations/NavigationServices';

function* startListening() {
    console.log('🎙️ Start Listening');

    try {
        yield call(() => Voice.destroy());
        Voice.removeAllListeners();

        Voice.onSpeechStart = () => console.log('Speech started...');
        Voice.onSpeechEnd = () => console.log('Speech ended.');

        Voice.onSpeechResults = (event) => {
            console.log('📝 Speech Result:', event.value);
            if (event.value) {
                store.dispatch({ type: actionTypes.SET_SPEECH_TEXT, payload: event.value[0] });
            }
        };

        Voice.onSpeechError = (error) => console.log(' Speech Error:', error);


        console.log('✅ Calling Voice.start()...');
        yield call(() => Voice.start('en-US', { RECOGNIZER_ENGINE: 'system' }));
        console.log('✅ Voice.start() executed!');

    } catch (error) {
        console.log(' Voice recognition error:', error);
    }
}

function* stopListening() {
    console.log('2first')
    try {
        yield call(() => Voice.stop());
        yield call(() => Voice.destroy());
        Voice.removeAllListeners();
    } catch (error) {
        console.log('Error stopping voice recognition:', error);
    }
}

function* addJournal(actions) {
    try {

        const { payload } = actions
        console.log(payload, '0')

        yield put({ type: actionTypes.SET_IS_LOADING, payload: true })
        const response = yield blobRequest({
            url: api_url + add_journal,
            data: payload
        })
        if (response?.status) {
            console.log(response, 'check Data ')
            showToastMessage({ message: response?.message })
            yield put({ type: actionTypes.GET_JOURNAL_LIST, payload: null })
            navigate('home', { screen: 'drawer', params: { screen: 'jornalsTab' } });
        } else {
            showToastMessage({ message: response?.message })

        }

        yield put({ type: actionTypes.SET_IS_LOADING, payload: false })
    } catch (e) {
        yield put({ type: actionTypes.SET_IS_LOADING, payload: false })
        console.log('hii', e);

    }
}

function* getJournalList(actions) {
    try {
            const { payload } = actions
        yield put({ type: actionTypes.SET_IS_LOADING, payload: true })
        yield put({ type: actionTypes.SET_IS_REFRESHING, payload: true });
        const response = yield getRequest({
            url: api_url + journal_list_show,
            
        })
        if (response?.status) {
            yield put({ type: actionTypes.SET_JOURNAL_LIST, payload: response })   
          
        } else {       
                showToastMessage({ message: response?.message }) 
        }

        yield put({ type: actionTypes.SET_IS_LOADING, payload: false })
        yield put({ type: actionTypes.SET_IS_REFRESHING, payload: false });
    } catch (e) {
        yield put({ type: actionTypes.SET_IS_LOADING, payload: false })
        yield put({ type: actionTypes.SET_IS_REFRESHING, payload: false });
        console.log('hii', e);
    }
}
export function* journalSaga() {
    yield takeLatest(actionTypes.START_LISTENING, startListening);
    yield takeLatest(actionTypes.STOP_LISTENING, stopListening);
    yield takeLatest(actionTypes.ADD_JOURNAL, addJournal);
    yield takeLatest(actionTypes.GET_JOURNAL_LIST, getJournalList);
}
