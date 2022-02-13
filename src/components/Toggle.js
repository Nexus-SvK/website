import React, { Component } from "react";
import ReactDOM from "react-dom";
import { faBars,faXmark } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./Toggle.css";

class Toggle extends React.Component {
  constructor(props) {
    super(props);
    this.state = { isToggleOn: true };
    // This binding is necessary to make `this` work in the callback
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.setState((prevState) => ({
      isToggleOn: !prevState.isToggleOn,
    }));
  }
  render() {
    return (
      <a id="btn" onClick={this.handleClick}>
        <FontAwesomeIcon id="icon" icon={this.state.isToggleOn ? faBars : faXmark} />
      </a>

    );
  }
}
export default Toggle;