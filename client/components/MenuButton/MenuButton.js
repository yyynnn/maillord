import React from "react";
import { Link } from "react-router";

let icon = "http://imgh.us/002-menu-button.svg";

import "./MenuButton.css";

export default class MenuButton extends React.Component {
  render() {
    return (
      <div className="menu-button">
        <div className="menu-button-wraper">
          <div className="menu-button-block1 flex-valign">
            <div className="menu-button__icon">
              <img className="menu-button-img" src={this.props.icon || icon} alt="" />
            </div>
          </div>
          <div className="menu-button-block2">
            <div className="menu-button-block2a">
              {this.props.id}
            </div>
            <div className="menu-button-block3">
              <div className="menu-button-block3a">{this.props.title}</div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
