var fs = require('fs');

var data = fs.readFileSync('./airports.json');
var airports = JSON.parse(data);
airports = airports.filter(airport => airport.country == "India")
  .slice(0, 30)
  .map(airport => `${airport.city} - ${airport.code}`);

var flights = {};

function randomDate(start, end) {
  return new Date(start.getTime() + Math.random() * (end.getTime() - start.getTime()));
}

let k = 100;
let char = 65;

airports.forEach((airport, index) => {
  flights[airport] = [];
  airports.forEach((dest, j) => {
    if (j != index) {
      let limit = Math.floor(Math.random()*15) + 1;
      for (let i = 0; i < limit; i++) {
        // set id
        if (k > 450) {
          k = 100;
          char++;
        }
        let id = String.fromCharCode(char) + "-" + k;
        k++;
        // set departure within 5 days
        let now = new Date();
        let depEnd = new Date();
        depEnd.setDate(now.getDate() + 5);
        let departure = randomDate(now, depEnd);
        // set duration from 30 minutes to 10 hours
        let arrStart = new Date(departure);
        arrStart.setMinutes(departure.getMinutes() + 30);
        let arrEnd = new Date(departure);
        arrEnd.setHours(departure.getHours() + 10);
        let arrival = randomDate(arrStart, arrEnd);
        // set price
        let price = Math.floor(Math.random()*8000) + 2000;
        // set available seats
        let availability = Math.floor(Math.random()*50) + 1;

        flights[airport].push({
          id,
          from: airport,
          to: dest,
          departure,
          arrival,
          price,
          availability
        });
      }
    }
  });
});

fs.writeFile('../src/data/flights.json', JSON.stringify(flights), (err) => {
  if (err) throw err;
  console.log('Flight data has been generated and saved!');
});