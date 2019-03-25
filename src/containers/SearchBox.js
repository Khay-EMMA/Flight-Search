import React, { Component } from "react";
import Button from "../components/Button";
import CalendarInput from "../components/CalendarInput";
import Input from "../components/Input";
import InputWithAutocomplete from "../components/InputWithAutocomplete";
import Tag from "../components/Tag";
import "../styles/SearchBox.css";
import originicon from "../static/blackplace.png";
import desticon from "../static/yellowplace.png";
import departicon from "../static/take-off.png";
import returnicon from "../static/return.png";
import passengericon from "../static/passenger.png";
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
      valid: {
        origin: false,
        dest: false
      },
      show: false
    }
  }
  clickTag(mode) {
    store.dispatch(setTravelMode(mode));
  }

  search() {
    let state = store.getState();
    let { initial, mode, query } = state;
    let { dest, origin } = this.state.valid;
    if (dest && origin && query.origin && query.dest && query.passenger>0) {
      if (initial) {
        store.dispatch(setInitial(false));
      }
      store.dispatch(searchFlight(mode, query));
      this.setState({show: false});
    } else {
      this.setState({show: true});
    }
  }

  handleOriginInput(isValid, value) {
    if (isValid) {
      store.dispatch(setOriginInput(value));
      this.setState({ valid: {...this.state.valid, origin: true}});
    } else {
      this.setState({ valid: {...this.state.valid, origin: isValid}});
    }
  }

  handleDestInput(isValid, value) {
    if (isValid) {
      store.dispatch(setDestInput(value));
      this.setState({ valid: {...this.state.valid, dest: true}});
    } else {
      this.setState({ valid: {...this.state.valid, dest: isValid}});
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
    const { mode, query } = state;
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
          <InputWithAutocomplete label="From" placeholder="Origin" icon={originicon} results={originData} onChange={this.handleOriginInput.bind(this)}/>
          <InputWithAutocomplete label="To" placeholder="Destination" icon={desticon} results={destData} onChange={this.handleDestInput.bind(this)}/>
          <CalendarInput label="Departure" date={state.query.dept} icon={departicon} start={new Date()} onChange={this.handleDeptInput}/>
          {
            mode=="round" &&
            <CalendarInput label="Return" date={state.query.return} icon={returnicon} start={state.query.dept} onChange={this.handleReturnInput}/>
          }
          <Input label="Passengers" placeholder="Passengers" icon={passengericon} value={state.query.passenger} type="number" min={1} max={50} onChange={this.handlePassengerInput}/>
        </div>
        <hr/>
        {
          this.state.show &&
          <div className="message">{query.passenger > 0? "Select origin and destination from the menu!":"Enter valid no of passengers"}</div>
        }
        <div className="right">
          <Button label="Search" onClick={this.search.bind(this)}/>
        </div>
      </div>
    );
  }
}

export default SearchBox;