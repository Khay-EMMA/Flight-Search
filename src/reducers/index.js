import flights from "./flights";
import initial from "./initial";
import mode from "./mode";
import query from "./query";
import { combineReducers } from "redux";

export default combineReducers({
  flights,
  initial,
  mode,
  query
});