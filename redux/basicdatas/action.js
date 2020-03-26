const ADD_ORG_ID="ADD_ORG_ID";
const ADD_DES_ID="ADD_DES_ID";
const SET_PACKAGE_COLLAPSE="SET_PACKAGE_COLLAPSE";
const TOGGLE_FLIGHT="TOGGLE_FLIGHT";
const LOADING_BOOLEAN ="LOADING_BOOLEAN"
const TOGGLE_DEFAULT_FLIGHT="TOGGLE_DEFAULT_FLIGHT";

//example
const ADD = 'ADD';
const REMOVE = 'REMOVE';
const CHECK = 'e.CHECK';
const NAME = 'NAME';
//end of example

const add_org_id = (value)=>({
  type:ADD_ORG_ID,
  value 
});
const add_des_id = (value)=>({
  type:ADD_DES_ID,
  value 
});
const homePageLoading = (value)=>({
  type:LOADING_BOOLEAN,
  value 
});
const set_package_collapse = (value)=>({
  type:SET_PACKAGE_COLLAPSE,
  value 
});
const toggle_flight = (value)=>({
  type:TOGGLE_FLIGHT,
  value 
});
const default_toggle_flight = (value)=>({
  type:TOGGLE_DEFAULT_FLIGHT,
  value 
});

//example
const add_item = (value)=>({
    type:ADD,
    value
});
const remove_item = (value)=>({
    type:REMOVE,
    value 
});
const check_item = (payload,myname)=>({
  type:CHECK,
  payload,
  myname 
});
const add_name = (value)=>({
  type:NAME,
  value 
});
//end of example


export {
  add_org_id,
  add_des_id,
  set_package_collapse,
  toggle_flight,
  add_name,
  check_item,
  add_item,
  remove_item,
  homePageLoading,
  default_toggle_flight
}
