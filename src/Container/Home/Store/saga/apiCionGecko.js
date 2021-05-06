import getData from '../../../Home/services';
import { call, put, takeEvery } from 'redux-saga/effects';
function getApi() {
    return getData().then((res) => res)
        .catch((err) => { throw err; });
    };
function* getApiData() {
    
    try {
        const data = yield call(getApi)
     
         
        yield put({ type: 'SUCCESS_COINGECKO_DATA', data,data })
    } catch (e) {
        yield put({ type: 'GET_MOVIE_FAILED', message: e.message })
    }
}
function* movieSaga() {
    yield takeEvery('GET_COINGECKO_DATA', getApiData)

}
export default movieSaga;