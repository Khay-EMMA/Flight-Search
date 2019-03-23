import { SEARCH_FLIGHT } from "../constants/action-types";
import Flights from "../data/flights";

export default function flights(state = Flights, action) {
  switch (action.type) {
    case SEARCH_FLIGHT:
      return action.payload;
    default:
      return state;
  }
}