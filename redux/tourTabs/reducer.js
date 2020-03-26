import {actionTypes} from './types';

export const exampleInitialState = {
  error: [],
  header: [],
  tours:[]
}

function reducer(state = exampleInitialState, action) {
  switch (action.type) {
    case actionTypes.HEAFER_FAILURE:
      return {
        ...state,
        error: action.payload ,
        header:[],
        tours:[]
      }

    case actionTypes.LOAD_HEADER_SUCCESS:
      return {
        ...state,
        header: action.payload ,
        error:[]
      }
      case actionTypes.Tour_FAILURE:
      return {
        ...state,
        error: action.payload ,
        header:[],
        tours:[]
      }

    case actionTypes.LOAD_Tour_SUCCESS:
      return {
        ...state,
        tours: action.payload ,
        error:[]
      }

    default:
      return state
  }
}

export default reducer
