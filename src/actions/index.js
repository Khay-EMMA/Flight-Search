import { 
  SET_TRAVEL_MODE,
  SEARCH_FLIGHT,
  SET_INITIAL,
  SET_ORIGIN_INPUT,
  SET_DEST_INPUT,
  SET_DEPT_INPUT,
  SET_RETURN_INPUT,
  SET_PASSENGER_INPUT,
} from "../constants/action-types";

export const setTravelMode = mode => ({
  type: SET_TRAVEL_MODE,
  payload: mode
});

export const setInitial = val => ({
  type: SET_INITIAL,
  payload: val
});

export const searchFlight = (mode, query) => ({
  type: SEARCH_FLIGHT,
  payload: {
    mode,
    query
  }
});

export const setOriginInput = val => ({
  type: SET_ORIGIN_INPUT,
  payload: val
});

export const setDestInput = val => ({
  type: SET_DEST_INPUT,
  payload: val
});

export const setDeptInput = val => ({
  type: SET_DEPT_INPUT,
  payload: val
});

export const setReturnInput = val => ({
  type: SET_RETURN_INPUT,
  payload: val
});

export const setPassengerInput = val => ({
  type: SET_PASSENGER_INPUT,
  payload: val
});