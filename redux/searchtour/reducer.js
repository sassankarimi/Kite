import {actionTypes} from './type';

export const exampleInitialState = {
    tourResult: [],
    error:'',
    dataExist:true,
    filteredResults:[],
    serachParams :{}
}

function reducer(state = exampleInitialState, action) {
  switch (action.type) {
    case actionTypes.SEARCH_TOUR_FAILURE:
      return {
        ...state,
        error: action.payload ,
        tourResult:[],
        filteredResults:[],
        dataExist:false
      }

    case actionTypes.LOAD_SEARCH_TOUR_SUCCESS:
      return {
        ...state,
        tourResult: action.payload ,
        filteredResults:action.payload,
        error:"",
        dataExist:true
      }
      case actionTypes.SET_FILTERED_RESULTS:
        return {
          ...state,
          filteredResults:action.payload,
          
        }
        case actionTypes.SET_SEARCH_PARAMS:
          console.log("rrrrrrr", action.payload)
          return {
            ...state,
            serachParams:action.payload,
            
          }
    default:
      return state
  }
}

export default reducer
