import React, { Component, PropTypes } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { Helmet } from "react-helmet";

import appLogo from "../assets/img/logo.png";
import fav16 from "../assets/img/favicon-16x16.png";
import fav32 from "../assets/img/favicon-32x32.png";

export default class App extends Component {
  constructor(props, context) {
    super(props, context);
  }

  render() {
    return (
      <div>
        <Helmet>
          <meta charSet="utf-8" />
          <title>Maillord</title>
          <link rel="icon" type="image/png" href={fav16} sizes="32x32" />
          <link rel="icon" type="image/png" href={fav32} sizes="16x16" />
        </Helmet>
        <div className="app__children">
          <div className="app__logo-wrapper">
            <img src={appLogo} alt="maillord.logo" />
          </div>
          {this.props.children}
        </div>
      </div>
    );
  }
}
