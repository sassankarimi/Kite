import {  put,takeLatest } from 'redux-saga/effects'
import es6promise from 'es6-promise'
import 'isomorphic-unfetch'

//imports
import {loadWeblogSuccess , failure } from './action';
import {actionTypes} from './type'
import ports from '../../ports';

es6promise.polyfill()

//WEBLOG worker
function* loadWeblogSaga() {
    try {
        const res = yield fetch(`${ports.domain}${ports.weblogGroups}`)
        const data = yield res.json()
        yield put(loadWeblogSuccess(data))
      } catch (err) {
        yield put(failure(err))
      }
}

//WEBLOG watcher
function* loadWeblogWatcher() {
    yield takeLatest(actionTypes.LOAD_WEBLOG, loadWeblogSaga)
}


export default loadWeblogWatcher 