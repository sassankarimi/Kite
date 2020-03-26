import { put, takeLatest } from "redux-saga/effects";
import es6promise from "es6-promise";
import "isomorphic-unfetch";

//imports
import { searchTourSuccess, failure } from "./action";
import { actionTypes } from "./type";
import ports from "../../ports";

es6promise.polyfill();

function* searchTourSaga(action) {
  const body = JSON.stringify(action.data);
  let counter = 0;
  let CorrectTour = [];
  try {
    const res = yield fetch(
      `${ports.domain}${ports.getPackages}?filter=${body}`
    );
    const data = yield res.json();
    console.log(" search Results", data);
    for (var i = 0; i < data.length; i++) {
      if (
        data[i].hasOwnProperty("PackageRow") &&
        data[i].PackageRow.length > 0 &&
        data[i].hasOwnProperty("Flight") &&
        data[i].Flight.length > 0
      ) {
        counter++;
        CorrectTour.push(data[i]);
      }
    }
    console.log("correct packages", counter);
    if (counter> 0) {
      yield put(searchTourSuccess(CorrectTour));
    } else {
      yield put(failure("No Correct Package Found"));
    }
  } catch (err) {
    yield put(failure(err));
  }
}

function* loadCityWatcher() {
  yield takeLatest(actionTypes.LOAD_SEARCH_TOUR, searchTourSaga);
}

export default loadCityWatcher;
