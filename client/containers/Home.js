import React from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { Link } from "react-router";
import Button from "../components/Button/Button.js";

import MailBlock from "./MailBlock/MailBlock.js";

import * as addHeading from "../redux/actions/addHeading";

import "./Home.css";

class Home extends React.Component {
  constructor(props, context) {
    super(props, context);
    this.state = {
      mailBlock: [],
      key: 0
    };
    this.onRemoveBtnClick = this.onRemoveBtnClick.bind(this);
  }

  onDownloadReady(event) {
    console.log("server start");
  }

  onAddBtnClick(event) {
    const mailBlock = this.state.mailBlock;
    let key = this.state.key;
    this.setState({
      mailBlock: mailBlock.concat(
        <MailBlock length={mailBlock.length} id={this.state.key} key={this.state.key} onRemoveBtnClick={this.onRemoveBtnClick} />
      ),
      key: key + 1
    });
  }

  onRemoveBtnClick(event) {
    let mailBlock = this.state.mailBlock;
    let key = this.state.key;
    this.setState({
      mailBlock: mailBlock.filter(function(element) {
        console.log(element.key, event, Number(element.key) !== event);
        return Number(element.key) !== event;
      })
    });
  }

  render() {
    return (
      <div className="container">
        <div className="home__main">
          {this.state.mailBlock}
          <Button data={"+"} onClickEvent={::this.onAddBtnClick} />
        </div>
        <Button buttonType={"button__download"} data={"Скачать"} onClickEvent={::this.onDownloadReady} />
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
      passTimeOfDay: bindActionCreators(addHeading, dispatch)
    }
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Home);
