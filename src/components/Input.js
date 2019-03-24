import React, { Component } from "react";
import "../styles/InputWithAutocomplete.css";

class Input extends Component {
  constructor(props) {
    super(props);
  }

  handleChange(e) {
    this.props.onChange(e.value);
  }
 
  render() {
    const { label, placeholder, type, value, onChange, ...rest } = this.props;

    return (
      <div className="container">
        <div className="label">{label}</div>
        <input
          className="input"
          type={type}
          value={value}
          placeholder={placeholder}
          onChange={this.handleChange.bind(this)}
          {...rest}
          />
      </div>
    );
  }
}

export default Input;