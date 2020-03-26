import { STARS, RATES, PRICE, CO } from "./type";

export function setStars(value) {
  return { type: STARS , payload:value}
}

const setRates = value => ({
  type: RATES,
  value
});

const setPreis = value => ({
  type: PRICE,
  value
});
export function setAirlines(value) {
  return { type: CO,value}
}


