import React from 'react';
import { Link } from 'react-router';

import './ButtonRemove.css';

export default class ButtonRemove extends React.Component {
  render() {
    return <button onClick={this.props.onClickEvent} className="button button_remove">✕</button>;
  }
}
