import { all } from "redux-saga/effects";
import authSaga from "./authSaga";
import commonSaga from "./commonSaga";


export default function* rootSaga() {
    yield all([
     authSaga(),
     commonSaga()
    ]);
}