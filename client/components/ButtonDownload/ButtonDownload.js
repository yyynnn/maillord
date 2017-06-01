import React from 'react';
import { Link } from 'react-router';

import addIcon from '../../assets/img/add_icon.png';

export default class ButtonDownload extends React.Component {
  render() {
    return (
      <div className="button__wrapper">
        <button onClick={this.props.onClickEvent} className={'button ' + this.props.buttonType}>{this.props.data}</button>
      </div>
    );
  }
}
