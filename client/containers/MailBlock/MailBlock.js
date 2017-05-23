import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Link } from 'react-router';
import ReactDOM from 'react-dom';
import DropzoneComponent from 'react-dropzone-component';

import ButtonRemove from '../../components/ButtonRemove/ButtonRemove.js';
import TextEditor from '../TextEditor/TextEditor.js';
import Dropzone from '../Dropzone/Dropzone.js';

import * as addText from '../../redux/actions/addText';

import './MailBlock.css';

class MailBlock extends React.Component {
  constructor(props, context) {
    super(props, context);
  }

  handleChange({ target }) {
    let data = {
      id: this.props.id,
      name: target.name,
      value: target.value
    };
    this.props.actions.addTextAction.addText(data);
  }

  render() {
    return (
      <div className="mailBlock__main">
        <h1>
          Блок {this.props.id + 1} <span>
            <ButtonRemove onClickEvent={() => this.props.onRemoveBtnClick(this.props.id)} />
          </span>
        </h1>
        <Dropzone id={this.props.id} defaultImage={this.props.defaultImage} />
        <input
          name={'heading'}
          onChange={::this.handleChange}
          className="mailBlock__input mailBlock__load-heading"
          type="text"
          placeholder="Заголовок"
          value={this.props.defaultHeading}
        />
        <TextEditor id={this.props.id} />
        <input
          name={'buttonName'}
          onChange={::this.handleChange}
          className="mailBlock__input mailBlock__input_buttonName"
          type="text"
          placeholder="Название кнопки"
          value={this.props.defaultButtonName}
        />
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
    actions: {
      addTextAction: bindActionCreators(addText, dispatch)
    }
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(MailBlock);
