
import {actionTypes} from './types';

export function loadHeader() {
  return { type: actionTypes.LOAD_HEADER }
}

export function failure(error) {
  return {
    type: actionTypes.HEAFER_FAILURE,
    payload:error,
  }
}

export function loadHeaderSuccess(data) {
  return {
    type: actionTypes.LOAD_HEADER_SUCCESS,
    payload:data,
  }
}

export function loadTour(id) {
  return { type: actionTypes.LOAD_Tour , id:id}
}

export function failureTour(error) {
  return {
    type: actionTypes.Tour_FAILURE,
    payload:error,
  }
}

export function loadTourSuccess(data) {
  return {
    type: actionTypes.LOAD_Tour_SUCCESS,
    payload:data,
  }
}