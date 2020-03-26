const SET_PACKAGE_COLLAPSE = "SET_PACKAGE_COLLAPSE";
const TOGGLE_FLIGHT = "TOGGLE_FLIGHT";
const LOADING_BOOLEAN = "LOADING_BOOLEAN";
const TOGGLE_DEFAULT_FLIGHT = "TOGGLE_DEFAULT_FLIGHT";

const initialstate = {
  cityOrgId: [],
  cityDesId: [],
  //unter des Kommentars ist ein Beispiel
  basicDatas: [],
  name: "",
  loading: false,
  collapseToggle: [],
  toggleFlight: [],
  toggleDefaultFlight: []
};

const reducer = (state = initialstate, action) => {
  switch (action.type) {
    case "ADD":
      return { ...state, basicDatas: action.value };
    case "ADD_ORG_ID":
      return { ...state, cityOrgId: action.value };
    case "ADD_DES_ID":
      return { ...state, cityDesId: action.value };
    case "REMOVE":
      return { ...state, basicDatas: [] };
    case "NAME":
      return { ...state, name: action.value };
    case LOADING_BOOLEAN:
      return { ...state, loading: action.value };
      
    case SET_PACKAGE_COLLAPSE:
      return { ...state, collapseToggle: action.value };
    case TOGGLE_FLIGHT:
      return { ...state, toggleFlight: action.value };
    case TOGGLE_DEFAULT_FLIGHT:
      return { ...state, toggleDefaultFlight: action.value };
    default:
      return state;
  }
};
export default reducer;
