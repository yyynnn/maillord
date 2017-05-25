import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Link } from 'react-router-dom';

import Button from '../components/Button/Button.js';
import MailBlock from './MailBlock/MailBlock.js';

import * as addBlock from '../redux/actions/addBlock';
import * as removeBlock from '../redux/actions/removeBlock';
import * as checkboxSwitch from '../redux/actions/checkboxSwitch';

import questionLink from '../assets/img/question.png';

import './Home.css';

class Home extends React.Component {
  constructor(props, context) {
    super(props, context);
    this.linkButton = '/download';
  }

  update() {
    let data = JSON.stringify(this.props.dataToBackend);
    console.log(data);
    return fetch('/api/data', {
      method: 'post',
      body: data,
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json'
      }
    }).then(this.checkStatus);
  }

  checkStatus(response) {
    if (response.status >= 200 && response.status < 300) {
      console.log(response);
      return response;
    } else {
      var error = new Error(response.statusText);
      error.response = response;
      throw error;
    }
  }

  handleChange(event) {
    this.props.actions.checkboxSwitchAction.checkboxSwitch(this.props.formsReducer.checkbox);
  }

  onAddBtnClick(event) {
    let form = {
      mainText: '',
      heading: '',
      image: '',
      buttonName: '',
      buttonLink: ''
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
          <p>Оставить начальный блок</p>
          <div className="onoffswitch">
            <input
              type="checkbox"
              name="onoffswitch"
              className="onoffswitch-checkbox"
              id="myonoffswitch"
              checked={this.props.formsReducer.checkbox || false}
              onChange={::this.handleChange}
            />
            <label className="onoffswitch-label" htmlFor="myonoffswitch" />
          </div>
          {this.props.formsReducer.forms.map((item, index) => {
            return (
              <MailBlock
                defaultHeading={this.props.formsReducer.forms[index].heading}
                defaultMainText={this.props.formsReducer.forms[index].mainText}
                defaultImage={this.props.formsReducer.forms[index].image}
                defaultButtonName={this.props.formsReducer.forms[index].buttonName}
                defaultbuttonLink={this.props.formsReducer.forms[index].buttonLink}
                id={index}
                key={index}
                onRemoveBtnClick={::this.onRemoveBtnClick}
              />
            );
          })}
          <Button data={'+'} onClickEvent={::this.onAddBtnClick} />
        </div>
        <Button href={this.linkButton} buttonType={'button__download'} data={'Скачать'} onClickEvent={::this.update} />

      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    dataToBackend: state.formsReducer,
    formsReducer: state.formsReducer
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: {
      addBlockAction: bindActionCreators(addBlock, dispatch),
      removeBlockAction: bindActionCreators(removeBlock, dispatch),
      checkboxSwitchAction: bindActionCreators(checkboxSwitch, dispatch)
    }
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Home);

// {<img className="home__faqLink" src={questionLink} alt="" />}
