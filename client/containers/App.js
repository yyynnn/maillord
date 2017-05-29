import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Helmet } from 'react-helmet';

import appLogo from '../assets/img/logo.png';
import fav16 from '../assets/img/favicon-16x16.png';
import fav32 from '../assets/img/favicon-32x32.png';
import leftLogo from '../assets/img/LeftLogoAnim.png';
import rightLogo from '../assets/img/RightLogoAnim.png';
import rightLogoHelper from '../assets/img/RightLogoHelperAnim.png';

export default class App extends Component {
  constructor(props, context) {
    super(props, context);
    this.state = {
      loading: true
    };
  }

  componentDidMount() {
    setTimeout(() => this.setState({ loading: false }), 100);
  }

  render() {
    const { loading } = this.state;
    if (loading) {
      return null; // render null when app is not ready
    }
    return (
      <div className="app">
        <Helmet>
          <meta charSet="utf-8" />
          <title>Maillord</title>
          <link rel="icon" type="image/png" href={fav16} sizes="32x32" />
          <link rel="icon" type="image/png" href={fav32} sizes="16x16" />
        </Helmet>
        <div className="app__loader">
          <div className="app_loader-wrapper">
            <img className="app__leftLogo" src={leftLogo} alt="" />
            <img className="app__rightLogoMain" src={rightLogo} alt="" />
            <img className="app__rightLogoHelper" src={rightLogoHelper} alt="" />
          </div>
        </div>
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
