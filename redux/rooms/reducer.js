import { actionTypes } from './type';

export const exampleInitialState = {
  rooms: 1,
  adultArray: [2],
  childArray: [0],
  total: 2,
  child1Count: 0,
  child2Count: 0,
  infantCount: 0,
  selValues: [{ id: 0, adult: 2, age: [] }],
  roomRules:""
}

function reducer(state = exampleInitialState, action) {
  switch (action.type) {
    case actionTypes.SET_ROOMS:
      return {
        ...state,
        rooms: action.payload
      }
    case actionTypes.SET_TOTAL:
      return {
        ...state,
        total: action.payload
      }
    case actionTypes.SET_SELVALUES:
      return {
        ...state,
        selValues: action.payload
      }
    case actionTypes.SET_ADULT_ARRAY:
      return {
        ...state,
        adultArray: action.payload
      }
    case actionTypes.SET_CHILD_ARRAY:
      return {
        ...state,
        childArray: action.payload
      }
    case actionTypes.SET_INFANTCOUNT:
      return {
        ...state,
        infantCount: action.payload
      }
    case actionTypes.SET_CHILD1COUNT:
      return {
        ...state,
        child1Count: action.payload
      }
    case actionTypes.SET_CHILD2COUNT:
      return {
        ...state,
        child2Count: action.payload
      }
      case actionTypes.SET_ROOMRULES:
        return {
          ...state,
          roomRules: action.payload
        }
    default:
      return state
  }
}

export default reducer
