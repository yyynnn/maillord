import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import appLogo from '../assets/img/logo.png';

export default class App extends Component {
  constructor(props, context) {
    super(props, context);
  }

  render() {
    return (
      <div className="app__children">
        <div className="app__logo-wrapper">
          <img src={appLogo} alt="maillord.logo" />
        </div>
        {this.props.children}
      </div>
    );
  }
}
