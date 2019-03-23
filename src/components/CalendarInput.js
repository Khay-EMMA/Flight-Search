import React, { Component } from "react";
import Calendar from 'react-calendar';
import moment from 'moment';
import "../styles/CalendarInput.css";

class CalendarInput extends Component {
  constructor(props) {
    super(props);
    this.state = {
      focus: false,
      date: this.props.default
    };
  }

  handleFocus() {
    this.setState({ focus: true });
  }

  handleBlur() {
    this.setState({ focus: false });
  }

  onChange(value) {
    console.log(value);
    this.setState({ date: value });
    this.handleBlur();
  }
 
  render() {
    const { label, start } = this.props;

    return (
      <div className="container">
        <div className="label">{label}</div>
        <input className="input" value={moment(this.state.date).format("DD-MM-YYYY")} onFocus={this.handleFocus.bind(this)} readOnly/>
        <div className={this.state.focus? "calendar-container": "hide"}>
          <Calendar
            minDate={start}
            onChange={this.onChange.bind(this)}
            value={this.state.date}
          />
        </div>
      </div>
    );
  }
}

export default CalendarInput;