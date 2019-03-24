import {
  SET_ORIGIN_INPUT,
  SET_DEST_INPUT,
  SET_DEPT_INPUT,
  SET_RETURN_INPUT,
  SET_PASSENGER_INPUT
} from "../constants/action-types";

export default function query(state = {dept: new Date(), return: new Date(), passenger: 1}, action) {
  switch (action.type) {
    case SET_ORIGIN_INPUT:
      return {
        ...state,
        origin: action.payload
      };
    case SET_DEST_INPUT:
      return {
        ...state,
        dest: action.payload
      };
    case SET_DEPT_INPUT:
      return {
        ...state,
        dept: action.payload
      };
    case SET_RETURN_INPUT:
      return {
        ...state,
        return: action.payload
      };
    case SET_PASSENGER_INPUT:
      return {
        ...state,
        passenger: action.payload
      }
    default:
      return state;
  }
}