
import {actionTypes} from './type';

export function searchTour(data) {
  return { type: actionTypes.LOAD_SEARCH_TOUR , data:data }
}

export function failure(error) {
  return {
    type: actionTypes.SEARCH_TOUR_FAILURE,
    payload:error,
  }
}

export function setFilteredResults(value) {
  return {
    type: actionTypes.SET_FILTERED_RESULTS,
    payload:value,
  }
}

export function searchTourSuccess(value) {
  return {
    type: actionTypes.LOAD_SEARCH_TOUR_SUCCESS,
    payload:value,
  }
}

export function setSearchParams(value) {
  return {
    type: actionTypes.SET_SEARCH_PARAMS,
    payload:value,
  }
}


