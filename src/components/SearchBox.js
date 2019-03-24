import React, { Component } from "react";
import Button from "./Button";
import CalendarInput from "./CalendarInput";
import Input from "./Input";
import InputWithAutocomplete from "./InputWithAutocomplete";
import Tag from "./Tag";
import "../styles/SearchBox.css";
import store from "../store";
import {
  setTravelMode,
  setInitial,
  setOriginInput,
  setDestInput,
  setDeptInput,
  setReturnInput,
  setPassengerInput
} from "../actions";

class SearchBox extends Component {
  clickTag(mode) {
    store.dispatch(setTravelMode(mode));
  }

  search() {
    if (store.getState().initial) {
      store.dispatch(setInitial(false));
    }
  }

  handleOriginInput(value) {
    store.dispatch(setOriginInput(value));
  }

  handleDestInput(value) {
    store.dispatch(setDestInput(value));
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
    const results = ['Surat - STV', 'Bengaluru - BLR', 'Nagpur - NAG', 'Mumbai - BOM'];

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
        <div className="flexed">
          <InputWithAutocomplete label="From" placeholder="Origin" results={results} onChange={this.handleOriginInput}/>
          <InputWithAutocomplete label="To" placeholder="Destination" results={results} onChange={this.handleDestInput}/>
          <CalendarInput label="Departure" date={state.query.dept} start={new Date()} onChange={this.handleDeptInput}/>
          <CalendarInput label="Return" date={state.query.return} start={state.query.dept} onChange={this.handleReturnInput}/>
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