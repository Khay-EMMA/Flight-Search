import { SEARCH_FLIGHT } from "../constants/action-types";
import Flights from "../data/flights";

export default function flights(state = [], action) {
  switch (action.type) {
    case SEARCH_FLIGHT:
      let { query, mode } = action.payload;
      let { origin, dest, dept } = query;
      let ret = query.return;

      // One way filter
      let filtered = Flights[origin]
        .filter(flight => flight.to === dest)
        .filter(flight => {
          let departure = new Date(flight.departure);
          let today = new Date();
          if (dept.getDate() === today.getDate()) {
            // If User searches for today's flights, then check for current time
            return dept.getDate() === departure.getDate() && today.getTime() < departure.getTime();
          }
          return dept.getDate() === departure.getDate();
        });

      // Round trip filter
      let result = filtered;
      if (mode == 'round') {
        result = [];

        // Available return flights
        let availReturn = Flights[dest]
          .filter(flight => flight.to == origin)
          .filter(flight => {
            let departure = new Date(flight.departure);
            return ret.getDate() === departure.getDate();
          });

        // Combine two way flights
        filtered.forEach(flight => {
          availReturn.forEach(avail => {
            let arrivalDate = new Date(flight.arrival);
            let returnDate = new Date(avail.departure);
            if (
              (arrivalDate.getDate() === returnDate.getDate() && arrivalDate.getTime() < returnDate.getTime())
              || arrivalDate.getDate() < returnDate.getDate()
            ) {
              result.push({
                ...flight,
                returnData: avail
              });
            }
          })
        });
      }
      return result;
    default:
      return state;
  }
}