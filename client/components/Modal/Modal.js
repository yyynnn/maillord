import React from 'react';

import './Modal.css';

export default class Modal extends React.Component {
  render() {
    return (
      <div className="modal" onClick={this.props.onClosing}>
      
        <div className="modal__content">
<div className="modal__close" onClick={this.props.onClosing}>✕</div>
        Наведите курсор на элемент, чтобы получить подсказку</div>
      </div>
    );
  }
}
