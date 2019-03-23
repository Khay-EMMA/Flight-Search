import React, { Component } from 'react';
import Header from '../components/Header';
import '../styles/App.css';
import Main from './Main';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header/>
        <Main/>
      </div>
    );
  }
}

export default App;
