const ADD = "ADD";
const REMOVE = "REMOVE";

const initialstate = {
  paymentObj: []
};
const reducer = (state = initialstate, action) => {
  switch (action.type) {
    case ADD:
      return { ...state, paymentObj: action.value };
    case REMOVE:
      return { ...state, paymentObj: action.value };
    default:
      return state;
  }
};
export default reducer;
