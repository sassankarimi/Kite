import {STARS , RATES , PRICE , CO} from './type'


const initialstate = {
  stars: 0,
  rates: [],
  preis: [],
  airlines: []
};

const reducer = (state = initialstate, action) => {
  switch (action.type) {
    case STARS:
      return { ...state, stars: action.payload };
    case RATES:
      return { ...state, rates: action.value };
    case PRICE:
      return { ...state, preis: action.value };
    case CO:
      return { ...state, airlines: action.value };

    default:
      return state;
  }
};
export default reducer;
