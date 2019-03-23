import React, { Component } from 'react';
import '../styles/Main.css';
import SearchBox from '../components/SearchBox';
import store from "../store";
import FlightCard from '../components/FlightCard';

class Main extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const state = store.getState();
    const { initial } = state;
    return (
      <div>
        <div className={initial? "Main": "Main small"}></div>
        <div>
          <SearchBox position={initial? '': 'top'}/>
          <hr className="seperator"/>
          <FlightCard/>
          <FlightCard/>
        </div>
      </div>
    );
  }
}

export default Main;
