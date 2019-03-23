import React, { Component } from "react";
import Button from "./Button";
import CalendarInput from "./CalendarInput";
import Input from "./Input";
import InputWithAutocomplete from "./InputWithAutocomplete";
import Tag from "./Tag";
import "../styles/SearchBox.css";

class SearchBox extends Component {
  render() {
    const { position } = this.props;
    const results = ['Surat - STV', 'Bengaluru - BLR', 'Nagpur - NAG', 'Mumbai - BOM'];

    return (
      <div className={"card " + position}>
        <div className="flexed">
          <Tag label="Round trip" active={true}/>
          <Tag label="One way" active={false}/>
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
          <Button label="Search"/>
        </div>
      </div>
    );
  }
}

export default SearchBox;