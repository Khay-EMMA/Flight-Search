import Flights from "../data/flights";

export default function airports(state = Object.keys(Flights), action) {
  return state;
}