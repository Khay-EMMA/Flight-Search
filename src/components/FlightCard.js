import React, { Component } from "react";
import Button from "./Button";
import "../styles/FlightCard.css";

class FlightCard extends Component {
  render() {
    return (
      <div className="flight-card">
        <div className="outer-wrap">
          <div className="price">8950.00</div>
          <div className="detail-container">
            <div className="id">
              A-101
            </div>
            <div className="inner">
              <div className="time">5:40 PM - 7:35 PM</div>
              <div className="city">Mumbai(BOM) - Pune(PNQ)</div>
            </div>
          </div>
        </div>
        <div className="outer-wrap">
          <div className="book-button">
            <Button label="Book Flight"/>
          </div>
          <div className="detail-container">
            <div className="id">
              A-102
            </div>
            <div className="inner">
              <div className="time">5:40 AM - 7:35 AM</div>
              <div className="city">Pune(PNQ) - Mumbai(BOM)</div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default FlightCard;