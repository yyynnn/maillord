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
    this.state = {
      mailBlock: [],
      key: 0
    };
    this.onRemoveBtnClick = this.onRemoveBtnClick.bind(this);
  }

  onAddBtnClick(event) {
    const mailBlock = this.state.mailBlock;
    let key = this.state.key;
    this.setState({
      mailBlock: mailBlock.concat(<MailBlock id={this.state.key} key={this.state.key} onRemoveBtnClick={this.onRemoveBtnClick} />),
      key: key + 1
    });
  }

  onRemoveBtnClick(event) {
    let mailBlock = this.state.mailBlock;
    let key = this.state.key;
    this.setState({
      mailBlock: mailBlock.splice(event, 1),
      key: key - 1
    });
    console.log(`event index is `, event);
    console.log(`onDelete blocks are `, this.state);
  }

  render() {
    return (
      <div className="container">
        <div className="home__main">
          {console.log(`current blocks are `, this.state)}
          {this.state.mailBlock}
          <Button onClickEvent={::this.onAddBtnClick} />
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
