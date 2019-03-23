import React, { Component } from "react";
import "../styles/InputWithAutocomplete.css";

class Input extends Component {
  constructor(props) {
    super(props);
  }
 
  render() {
    const { label, placeholder, type } = this.props;

    return (
      <div className="container">
        <div className="label">{label}</div>
        <input className="input" type={type} placeholder={placeholder}/>
      </div>
    );
  }
}

export default Input;