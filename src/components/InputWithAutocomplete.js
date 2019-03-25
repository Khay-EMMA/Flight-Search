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
    this.props.onChange(true, value);
  }

  escapeRegExp(string){
    return string.replace(/[.*+?^${}()|[\]\\]/g, '\\$&'); // $& means the whole matched string
  }
 
  render() {
    const {
      label = "",
      placeholder = "",
      results = [],
      onChange = () => {},
      icon
    } = this.props;

    return (
      <div className="container" onBlur={this.handleBlur.bind(this)}>
        <div className="label">{label}</div>
        {
          icon &&
          <div className="icon">
            <img height={30} src={icon}/>
          </div>
        }
        <input
          className="input"
          placeholder={placeholder}
          value={this.state.value}
          onChange={(e) => {this.setState({value: e.target.value, isSelected: false});onChange(false)}}
          onFocus={this.handleFocus.bind(this)}/>
        <div className={this.state.focus? "list-container": "hide"}>
          <ul className="list">
            {
              results
                .filter((item) => {
                  let query = this.escapeRegExp(this.state.value)
                  let q = new RegExp(query, 'i');
                  return q.test(item);
                })
                .map((item) => (
                  <li key={item} className="list-item" onClick={() => this.selectItem(item)}>{item}</li>
                ))
            }
          </ul>
        </div>
      </div>
    );
  }
}

export default InputWithAutocomplete;