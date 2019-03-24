import airports from "./airports";
import flights from "./flights";
import initial from "./initial";
import mode from "./mode";
import query from "./query";
import { combineReducers } from "redux";

export default combineReducers({
  airports,
  flights,
  initial,
  mode,
  query
});