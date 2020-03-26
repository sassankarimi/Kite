
import {actionTypes} from './type';

export function loadCity() {
  return { type: actionTypes.LOAD_CITY }
}

export function failure(error) {
  return {
    type: actionTypes.CITY_FAILURE,
    payload:error,
  }
}

export function loadCitySuccess(data) {
  return {
    type: actionTypes.LOAD_CITY_SUCCESS,
    payload:data,
  }
}
