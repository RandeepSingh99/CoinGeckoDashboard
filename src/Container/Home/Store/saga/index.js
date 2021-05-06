import {all} from 'redux-saga/effects';
import apiCoinGecko from './apiCionGecko'

export default function* rootSaga() {
    yield all([
        apiCoinGecko(),
    ])
}