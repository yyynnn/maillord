import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Link } from 'react-router';
import Button from '../components/Button/Button.js';

import MailBlock from './MailBlock/MailBlock.js';

import * as addBlock from '../redux/actions/addBlock';
import * as removeBlock from '../redux/actions/removeBlock';

import './Home.css';

class Home extends React.Component {
  constructor(props, context) {
    super(props, context);
  }

  sendToServer() {}

  onAddBtnClick(event) {
    let form = {
      mainText: '',
      heading: ''
    };
    this.props.actions.addBlockAction.addBlock(form);
  }

  onRemoveBtnClick(event) {
    this.props.actions.removeBlockAction.removeBlock(event);
  }

  render() {
    return (
      <div className="container">
        <div className="home__main">
          {this.props.formsReducer.forms.map((item, index) => {
            return (
              <MailBlock
                defaultHeading={this.props.formsReducer.forms[index].heading}
                defaultMainText={this.props.formsReducer.forms[index].mainText}
                id={index}
                key={index}
                onRemoveBtnClick={::this.onRemoveBtnClick}
              />
            );
          })}
          <Button data={'+'} onClickEvent={::this.onAddBtnClick} />
        </div>
        <Button buttonType={'button__download'} data={'Скачать'} onClickEvent={::this.sendToServer} />
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    store: state,
    formsReducer: state.formsReducer
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: {
      addBlockAction: bindActionCreators(addBlock, dispatch),
      removeBlockAction: bindActionCreators(removeBlock, dispatch)
    }
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Home);
