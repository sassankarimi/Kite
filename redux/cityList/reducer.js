import {actionTypes} from './type';

export const exampleInitialState = {
    cityList: [],
    error:[]
}

function reducer(state = exampleInitialState, action) {
  switch (action.type) {
    case actionTypes.CITY_FAILURE:
      return {
        ...state,
        error: action.payload ,
        cityList:[],
      }

    case actionTypes.LOAD_CITY_SUCCESS:
      return {
        ...state,
        cityList: action.payload ,
        error:[]
      }

    default:
      return state
  }
}

export default reducer
