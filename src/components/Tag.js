import React, { Component } from "react";
import "../styles/Tag.css";

class Tag extends Component {
  render() {
    const { active, label, onClick } = this.props;

    return (
      <div className={active? "tag active": "tag"} onClick={onClick}>
        {label}
      </div>
    );
  }
}

export default Tag;