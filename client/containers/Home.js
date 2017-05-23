import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Link } from 'react-router';

import Button from '../components/Button/Button.js';
import MailBlock from './MailBlock/MailBlock.js';

import * as addBlock from '../redux/actions/addBlock';
import * as removeBlock from '../redux/actions/removeBlock';

import questionLink from '../assets/img/question.png';

import './Home.css';

class Home extends React.Component {
  constructor(props, context) {
    super(props, context);
  }

  update() {
    let data = JSON.stringify(this.props.dataToBackend);
    return fetch('/', {
      method: 'put',
      body: JSON.stringify(data),
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json'
      }
    })
      .then(this.checkStatus)
      .then(() => console.log('updated!!!'));
  }

  checkStatus(response) {
    if (response.status >= 200 && response.status < 300) {
      return response;
    } else {
      var error = new Error(response.statusText);
      error.response = response;
      throw error;
    }
  }

  onAddBtnClick(event) {
    let form = {
      mainText: '',
      heading: '',
      image: '',
      buttonName: ''
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
                defaultImage={this.props.formsReducer.forms[index].image}
                defaultButtonName={this.props.formsReducer.forms[index].buttonName}
                id={index}
                key={index}
                onRemoveBtnClick={::this.onRemoveBtnClick}
              />
            );
          })}
          <Button data={'+'} onClickEvent={::this.onAddBtnClick} />
        </div>
        <img className="home__faqLink" src={questionLink} alt="" />
        <Button buttonType={'button__download'} data={'Скачать'} onClickEvent={::this.update} />
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    dataToBackend: state.formsReducer.forms,
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
