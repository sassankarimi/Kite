
import {actionTypes} from './type';

export function loadWeblog() {
  return { type: actionTypes.LOAD_WEBLOG }
}

export function failure(error) {
  return {
    type: actionTypes.WEBLOG_FAILURE,
    payload:error,
  }
}

export function loadWeblogSuccess(data) {
  return {
    type: actionTypes.LOAD_WEBLOG_SUCCESS,
    payload:data,
  }
}
