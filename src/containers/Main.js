import React, { Component } from 'react';
import Header from '../components/Header';
import '../styles/Main.css';
import SearchBox from '../components/SearchBox';

class Main extends Component {
  constructor(props) {
    super(props);
    this.state = {
      initial: true
    }
  }

  render() {
    return (
      <div onClick={() => this.setState({initial: false})}>
        <div className={this.state.initial? "Main": "Main small"}></div>
        <SearchBox position={this.state.initial? '': 'top'}/>
      </div>
    );
  }
}

export default Main;
