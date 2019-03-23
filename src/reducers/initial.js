import { SET_INITIAL } from "../constants/action-types";

export default function initial(state = true, action) {
  switch (action.type) {
    case SET_INITIAL:
      return false;
    default:
      return state;
  }
}