
import {actionTypes} from './type';

export function setRooms(value) {
  return { type: actionTypes.SET_ROOMS , payload:value}
}
export function setTotal(value) {
  return { type: actionTypes.SET_TOTAL, payload:value }
}
export function setAdultArray(value) {
  return { type: actionTypes.SET_ADULT_ARRAY , payload:value}
}
export function setChildArray(value) {
  return { type: actionTypes.SET_CHILD_ARRAY , payload:value}
}
export function setInfant(value) {
  return { type: actionTypes.SET_INFANTCOUNT, payload:value }
}
export function setChild1(value) {
  return { type: actionTypes.SET_CHILD1COUNT , payload:value}
}
export function setChild2(value) {
  return { type: actionTypes.SET_CHILD2COUNT , payload:value}
}
export function setSelValues(value) {
  return { type: actionTypes.SET_SELVALUES , payload:value}
}
export function setRoomRules(value) {
  return { type: actionTypes.SET_ROOMRULES , payload:value}
}


