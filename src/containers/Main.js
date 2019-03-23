import React, { Component } from 'react';
import Header from '../components/Header';
import '../styles/Main.css';
import SearchBox from '../components/SearchBox';
import store from "../store";

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
        <SearchBox position={initial? '': 'top'}/>
      </div>
    );
  }
}

export default Main;
