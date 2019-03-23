import React, { Component } from "react";
import "../styles/Header.css";
import logo from "../static/logo.png";

class Header extends Component {
  render() {
    return (
      <div className="header">
        <img className="logo" src={logo} alt="FlightSearch"/>
        <h1 className="title">Flight Search</h1>
      </div>
    );
  }
}

export default Header;