import React from 'react';
import { Link } from 'react-router';

import './Button.css';

export default class Button extends React.Component {
  render() {
    return (
      <div className="button__wrapper">
        <a href={this.props.href} onClick={this.props.onClickEvent} className={'button ' + this.props.buttonType}>{this.props.data}</a>
      </div>
    );
  }
}
