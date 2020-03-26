import { all, fork} from 'redux-saga/effects'
import es6promise from 'es6-promise'
import 'isomorphic-unfetch'

import * as tourTabsSaga from './tourTabs/saga';
import * as cityListSaga from './cityList/saga';
import * as weblogGridSaga from './weblogGrid/saga';
import * as searchTourSaga from './searchtour/saga';

es6promise.polyfill()


function* rootSaga() {
  yield all([
    ...Object.values(tourTabsSaga),
    ...Object.values(cityListSaga),
    ...Object.values(weblogGridSaga),
    ...Object.values(searchTourSaga),
  ].map(fork))
}

export default rootSaga