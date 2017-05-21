import React, { Component, PropTypes } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";

import * as timeOfDay from "../redux/actions/timeOfDay";
import * as localeChange from "../redux/actions/localeChange";

class App extends Component {
  constructor(props, context) {
    super(props, context);
  }

  render() {
    return (
      <div className="app__children">
        {this.props.children}
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    locale: state.localeChange.locale
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: {
      localeChangeAction: bindActionCreators(localeChange, dispatch)
    }
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
