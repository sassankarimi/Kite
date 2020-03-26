import {actionTypes} from './type';

export const exampleInitialState = {
    weblog: [],
    error:[]
}

function reducer(state = exampleInitialState, action) {
  switch (action.type) {
    case actionTypes.WEBLOG_FAILURE:
      return {
        ...state,
        error: action.payload ,
        weblog:[],
      }

    case actionTypes.LOAD_WEBLOG_SUCCESS:
      return {
        ...state,
        weblog: action.payload ,
        error:[]
      }

    default:
      return state
  }
}

export default reducer
