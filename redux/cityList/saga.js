import {  put,takeLatest } from 'redux-saga/effects'
import es6promise from 'es6-promise'
import 'isomorphic-unfetch'

//imports
import {loadCitySuccess , failure } from './action';
import {actionTypes} from './type'
import ports from '../../ports';

es6promise.polyfill()

//CITY worker
function* loadCitySaga() {
    try {
        const res = yield fetch(`${ports.domain}${ports.cityList}`)
        const data = yield res.json()
        //console.log("cities" , data)
        data.sort(a => (a.CountryAbbrevation === "IR" ? -1 : 1));
        yield put(loadCitySuccess(data))
      } catch (err) {
        yield put(failure(err))
      }
}

//CITY watcher
function* loadCityWatcher() {
    yield takeLatest(actionTypes.LOAD_CITY, loadCitySaga)
}


export default loadCityWatcher 