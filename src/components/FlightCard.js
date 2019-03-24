import React, { Component } from "react";
import Button from "./Button";
import "../styles/FlightCard.css";

class FlightCard extends Component {
  render() {
    const { id, from, to, departure, arrival, deptDate, price } = this.props.data;
    const { returnData } = this.props;
    return (
      <div className="flight-card">
        <div className="outer-wrap">
          <div className="price">₹{returnData? price + returnData.price: price}</div>
          <div className="detail-container">
            <div className="id">
              {id}
            </div>
            <div className="inner">
              <div className="time">{departure} - {arrival}</div>
              <div className="city">
                {from.split(' - ').join('(') + ')'} - {to.split(' - ').join('(') + ')'}
              </div>
            </div>
          </div>
        </div>
        <div className="outer-wrap">
          
          { returnData &&
            <div className="detail-container">
              <div className="id">
                {returnData.id}
              </div>
              <div className="inner">
                <div className="time">{returnData.departure} - {returnData.arrival}</div>
                <div className="city">
                  {returnData.from.split(' - ').join('(') + ')'} - {returnData.to.split(' - ').join('(') + ')'}
                </div>
              </div>
            </div>
          }
        </div>
          <div className="book-button">
            <Button label="Book Flight"/>
          </div>
      </div>
    );
  }
}

export default FlightCard;