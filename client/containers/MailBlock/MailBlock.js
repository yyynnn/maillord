import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Link } from 'react-router';
import DropzoneImg from 'react-dropzone';
import ButtonRemove from '../../components/ButtonRemove/ButtonRemove.js';

import './MailBlock.css';

class MailBlock extends React.Component {
  constructor(props, context) {
    super(props, context);
  }
  onDrop(files) {
    console.log('Received files: ', files);
  }
  render() {
    return (
      <div className="mailBlock__main">
        <div className="mailBlock__heading">
          <span>
            <h1>Блок {this.props.id}</h1>
          </span>
          <span>
            <ButtonRemove onClickEvent={() => this.props.onRemoveBtnClick(this.props.key)} />
          </span>
        </div>
        <div>
          <DropzoneImg className="mailBlock__dropzone" activeClassName="mailBlock__dropzone_active" rejectClassName="mailBlock__dropzone_reject" onDrop={this.onDrop}>
            <div>Картинку сувать сюда</div>
          </DropzoneImg>
        </div>
        <div>
          <input className="mailBlock__input mailBlock__load-heading" type="text" placeholder="Заголовок" />
        </div>
        <div>
          <textarea className="mailBlock__input mailBlock__load-text" type="text" placeholder="Текст" />
        </div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    store: state
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: {}
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(MailBlock);
