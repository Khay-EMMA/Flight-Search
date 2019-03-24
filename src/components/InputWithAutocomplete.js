import React, { Component } from "react";
import "../styles/InputWithAutocomplete.css";

class InputWithAutocomplete extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: "",
      focus: false,
      isSelected: false
    };
  }

  handleFocus() {
    this.setState({ focus: true });
  }

  handleBlur() {
    setTimeout(() => {
      this.setState({focus: false});
    }, 200);
  }

  selectItem(value) {
    this.setState({value, isSelected: true, focus: false});
    this.props.onChange(value);
  }
 
  render() {
    const { label, placeholder, results } = this.props;

    return (
      <div className="container" onBlur={this.handleBlur.bind(this)}>
        <div className="label">{label}</div>
        <input
          className="input"
          placeholder={placeholder}
          value={this.state.value}
          onChange={(e) => this.setState({value: e.target.value, isSelected: false})}
          onFocus={this.handleFocus.bind(this)}/>
        <div className={this.state.focus? "list-container": "hide"}>
          <ul className="list">
            {
              results
                .filter((item) => {
                  let q = new RegExp(this.state.value, 'i');
                  return q.test(item);
                })
                .map((item) => (
                  <li className="list-item" onClick={() => this.selectItem(item)}>{item}</li>
                ))
            }
          </ul>
        </div>
      </div>
    );
  }
}

export default InputWithAutocomplete;