import {  put,takeLatest } from 'redux-saga/effects'
import es6promise from 'es6-promise'
import 'isomorphic-unfetch'

//imports
import {loadHeaderSuccess , failure , loadTourSuccess , failureTour , loadTour} from './actions';
import {actionTypes} from './types'
import ports from '../../ports';

es6promise.polyfill()

//header worker
function* loadHeaderSaga() {
    try {
        const res = yield fetch(`${ports.domain}${ports.getPackageGroup}`)
        const data = yield res.json()
        yield put(loadHeaderSuccess(data))
        yield put(loadTour(data[0].Id))
      } catch (err) {
        yield put(failure(err))
      }
}

//header watcher
function* loadHeaderWatcher() {
    yield takeLatest(actionTypes.LOAD_HEADER, loadHeaderSaga)
}

//tour worker
function* loadTourSaga(action) {
    try { 
        const res = yield fetch(`${ports.domain}${ports.packageList}?PackageGroupId=${action.id}`)
        const data = yield res.json()
        yield put(loadTourSuccess(data))
      } catch (err) {
        yield put(failureTour(err))
      }
}

//tour watcher
function* loadTourWatcher() {
    yield takeLatest(actionTypes.LOAD_Tour, loadTourSaga)
}

export {loadHeaderWatcher , loadTourWatcher} 