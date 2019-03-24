import React, { Component } from "react";
import Button from "../components/Button";
import CalendarInput from "../components/CalendarInput";
import Input from "../components/Input";
import InputWithAutocomplete from "../components/InputWithAutocomplete";
import Tag from "../components/Tag";
import "../styles/SearchBox.css";
import store from "../store";
import {
  setTravelMode,
  setInitial,
  setOriginInput,
  setDestInput,
  setDeptInput,
  setReturnInput,
  setPassengerInput,
  searchFlight
} from "../actions";

class SearchBox extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isValid: true,
      error: ""
    }
  }
  clickTag(mode) {
    store.dispatch(setTravelMode(mode));
  }

  search() {
    let state = store.getState();
    let { initial, mode, query } = state;
    if (query.origin && query.dest && query.passenger) {
      if (initial) {
        store.dispatch(setInitial(false));
      }
      store.dispatch(searchFlight(mode, query));
    }
  }

  handleOriginInput(isValid, value) {
    if (isValid) {
      store.dispatch(setOriginInput(value));
    } else {
      // this.setState({ isValid, error: "Select origin and destination from the menu!" });
    }
  }

  handleDestInput(isValid, value) {
    if (isValid) {
      store.dispatch(setDestInput(value));
    } else {
      // this.setState({ isValid, error: "Select origin and destination from the menu!" });
    }
  }

  handleDeptInput(date) {
    store.dispatch(setDeptInput(date));
  }

  handleReturnInput(date) {
    store.dispatch(setReturnInput(date));
  }

  handlePassengerInput(value) {
    store.dispatch(setPassengerInput(value));
  }

  render() {
    const state = store.getState();
    const { mode } = state;
    const { position } = this.props;
    let originData = [...state.airports];
    let destData = [...state.airports];
    if (state.query.origin) {
      let index = destData.findIndex(a => a===state.query.origin);
      if (index > -1) destData.splice(index, 1);
    }
    if (state.query.dest) {
      let index = originData.findIndex(a => a===state.query.dest);
      if (index > -1) originData.splice(index, 1);
    }

    return (
      <div className={"card " + position}>
        <div className="flexed">
          <Tag
            label="Round trip"
            onClick={this.clickTag.bind(this, 'round')}
            active={mode=='round'}/>
          <Tag
            label="One way"
            onClick={this.clickTag.bind(this, 'one')}
            active={mode=='one'}/>
        </div>
        <hr/>
        <div className="form">
          <InputWithAutocomplete label="From" placeholder="Origin" results={originData} onChange={this.handleOriginInput}/>
          <InputWithAutocomplete label="To" placeholder="Destination" results={destData} onChange={this.handleDestInput}/>
          <CalendarInput label="Departure" date={state.query.dept} start={new Date()} onChange={this.handleDeptInput}/>
          {
            mode=="round" &&
            <CalendarInput label="Return" date={state.query.return} start={state.query.dept} onChange={this.handleReturnInput}/>
          }
          <Input label="Passengers" placeholder="Passengers" value={state.query.passenger} type="number" min={1} max={50} onChange={this.handlePassengerInput}/>
        </div>
        <hr/>
        <div className="right">
          <Button label="Search" onClick={this.search.bind(this)}/>
        </div>
      </div>
    );
  }
}

export default SearchBox;