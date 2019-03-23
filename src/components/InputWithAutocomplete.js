import React, { Component } from "react";
import "../styles/InputWithAutocomplete.css";

class InputWithAutocomplete extends Component {
  constructor(props) {
    super(props);
    this.state = {
      focus: false
    };
  }

  handleFocus() {
    this.setState({ focus: true });
  }

  handleBlur() {
    this.setState({ focus: false });
  }
 
  render() {
    const { label, placeholder, results } = this.props;

    return (
      <div className="container">
        <div className="label">{label}</div>
        <input className="input" placeholder={placeholder} onFocus={this.handleFocus.bind(this)} onBlur={this.handleBlur.bind(this)}/>
        <div className={this.state.focus? "list-container": "hide"}>
          <ul className="list">
            {
              results.map((item) => (
                <li className="list-item">{item}</li>
              ))
            }
          </ul>
        </div>
      </div>
    );
  }
}

export default InputWithAutocomplete;