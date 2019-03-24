import React, { Component } from 'react';
import moment from 'moment';
import '../styles/Main.css';
import SearchBox from '../components/SearchBox';
import store from "../store";
import FlightCard from '../components/FlightCard';

class Main extends Component {
  constructor(props) {
    super(props);
    this.state = {
      price: 0
    }
  }

  render() {
    const state = store.getState();
    const { initial, flights } = state;
    return (
      <div>
        <div className={initial? "Main": "Main small"}></div>
        <SearchBox position={initial? '': 'top'}/>
        <div className={initial? "hide": "result-container"}>
          <hr className="seperator"/>
          <div className="price-slider">
            
          </div>
          {
            flights.map(flight => {
              let { departure, arrival, returnData } = flight;
              let deptDate = moment(departure).format("DD-MM-YYYY");
              departure = moment(departure).format("hh:mm A");
              arrival = moment(arrival).format("hh:mm A");
              let data = {
                id: flight.id,
                from: flight.from,
                to: flight.to,
                departure,
                arrival,
                deptDate,
                price: flight.price
              }
              returnData = returnData? {
                id: returnData.id,
                from: returnData.from,
                to: returnData.to,
                departure: moment(returnData.departure).format("hh:mm A"),
                arrival: moment(returnData.arrival).format("hh:mm A"),
                deptDate: moment(returnData.departure).format("DD-MM-YYYY"),
                price: returnData.price
              }: null;
              return (<FlightCard data={data} returnData={returnData}/>)
            })
          }
        </div>
      </div>
    );
  }
}

export default Main;
