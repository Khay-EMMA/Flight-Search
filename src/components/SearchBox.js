import React, { Component } from "react";
import Button from "./Button";
import CalendarInput from "./CalendarInput";
import Input from "./Input";
import InputWithAutocomplete from "./InputWithAutocomplete";
import Tag from "./Tag";
import "../styles/SearchBox.css";
import store from "../store";
import { setTravelMode, setInitial } from "../actions";

class SearchBox extends Component {
  clickTag(mode) {
    store.dispatch(setTravelMode(mode));
  }

  search() {
    if (store.getState().initial) {
      store.dispatch(setInitial(false));
    }
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
          <InputWithAutocomplete label="From" placeholder="From" results={results}/>
          <InputWithAutocomplete label="To" placeholder="Destination" results={results}/>
          <CalendarInput label="Departure" default={new Date()} start={new Date()}/>
          <CalendarInput label="Return" default={new Date()} start={new Date()}/>
          <Input label="Passengers" placeholder="Passengers" type="number"/>
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