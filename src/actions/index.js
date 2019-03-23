import { SET_TRAVEL_MODE, SEARCH_FLIGHT, SET_INITIAL } from "../constants/action-types";

export const setTravelMode = mode => ({
  type: SET_TRAVEL_MODE,
  payload: mode
});

export const setInitial = val => ({
  type: SET_INITIAL,
  payload: val
});

export const searchFlight = val => ({
  type: SEARCH_FLIGHT,
  payload: val
});