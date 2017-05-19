import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Link } from 'react-router';
import Button from '../components/Button/Button.js';

import MailBlock from './MailBlock/MailBlock.js';

import * as timeOfDay from '../redux/actions/timeOfDay';
import * as localeChange from '../redux/actions/localeChange';

import './Home.css';

class Home extends React.Component {
  constructor(props, context) {
    super(props, context);
    this.state = { mailBlock: [] };
    this.onAddBtnClick = this.onAddBtnClick.bind(this);
  }

  onAddBtnClick(event) {
    const mailBlock = this.state.mailBlock;
    this.setState({
      mailBlock: mailBlock.concat(<MailBlock key={mailBlock.length} />)
    });
  }

  render() {
    return (
      <div className="container">
        <div className="home__main">
          {this.state.mailBlock}
          <Button onClickEvent={this.onAddBtnClick} />
        </div>
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
      passTimeOfDay: bindActionCreators(timeOfDay, dispatch),
      localeChangeAction: bindActionCreators(localeChange, dispatch)
    }
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Home);
