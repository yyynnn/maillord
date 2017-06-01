import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Link } from 'react-router';
import ReactDOM from 'react-dom';
import DropzoneComponent from 'react-dropzone-component';
import ReactTooltip from 'react-tooltip';

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
        {this.props.ttStateStore ? <ReactTooltip /> : null}
        <h1>
          Блок {this.props.id + 1} <span>
            <div data-tip="Эта кнопка удаляет блок"><ButtonRemove onClickEvent={() => this.props.onRemoveBtnClick(this.props.id)} /></div>
          </span>
        </h1>
        <div data-tip="Сюда можно сбрасывать картинку для отдельного блока перетаскиванием, либо кликом">
          <Dropzone id={this.props.id} defaultImage={this.props.defaultImage} />
        </div>
        <input
          data-tip="Поле для ввода заголовка"
          name={'heading'}
          onChange={::this.handleChange}
          className="mailBlock__input mailBlock__load-heading"
          type="text"
          placeholder="Заголовок"
          value={this.props.defaultHeading}
        />
        <div data-tip="Эта область для ввода основного текста. Стандартное форматирование как в MS Word"><TextEditor id={this.props.id} /></div>
        <div className="mailBlock__input-wrapper">
          <input
            data-tip="Поле для ввода ссылки кнопки"
            name={'buttonLink'}
            onChange={::this.handleChange}
            className="mailBlock__input mailBlock__input_buttonLink"
            type="text"
            placeholder="Ссылка кнопки"
            value={this.props.defaultbuttonLink}
          />
          <input
            data-tip="Поле для ввода текста на кнопке"
            name={'buttonName'}
            onChange={::this.handleChange}
            className="mailBlock__input mailBlock__input_buttonName"
            type="text"
            placeholder="Название кнопки"
            value={this.props.defaultButtonName}
          />
        </div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    ttStateStore: state.tooltipReducer.ttState
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
