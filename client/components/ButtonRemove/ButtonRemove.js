import React from 'react';
import { Link } from 'react-router';

import './ButtonRemove.css';

import closeIcon from '../../assets/img/close_icon.png';

export default class ButtonRemove extends React.Component {
  render() {
    return <button onClick={this.props.onClickEvent} className="button button_remove"><img src={closeIcon} alt="close_icon" /></button>;
  }
}
