import { SET_TRAVEL_MODE } from "../constants/action-types";

export default function mode(state = "round", action) {
  switch (action.type) {
    case SET_TRAVEL_MODE:
      return action.payload;
    default:
      return state;
  }
}