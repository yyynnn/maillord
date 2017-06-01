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
    setTimeout(() => this.setState({ loading: false }), 2000);
  }

  render() {
    const { loading } = this.state;
    return (
      <div className="app">
        {loading && window.innerWidth > 500
          ? <div className={`app__loader app__loader_${loading}`}>
              <div className="app__loader-wrapper">
                <img className="app__leftLogo" src={leftLogo} alt="" />
                <div className="app__right">
                  <img className="app__rightLogoMain" src={rightLogo} alt="" />
                  <img className="app__rightLogoHelper" src={rightLogoHelper} alt="" />
                </div>
              </div>
            </div>
          : null}

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
