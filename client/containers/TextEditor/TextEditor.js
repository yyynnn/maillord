import React, { Component } from 'react';
import { PropTypes } from 'prop-types';
import RichTextEditor from 'react-rte';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import * as addText from '../../redux/actions/addText';

import './TextEditor.css';

class TextEditor extends React.Component {
  constructor(props, context) {
    super(props, context);
    this.state = {
      value: RichTextEditor.createEmptyValue()
    };
    this.handleChange = this._handleChange.bind(this);
    this.toolbarConfig = {
      display: ['INLINE_STYLE_BUTTONS', 'BLOCK_TYPE_BUTTONS', 'LINK_BUTTONS', 'HISTORY_BUTTONS'],
      INLINE_STYLE_BUTTONS: [{ label: 'Bold', style: 'BOLD', className: 'textEditor__buttons' }, { label: 'Italic', style: 'ITALIC' }, { label: 'Underline', style: 'UNDERLINE' }],
      BLOCK_TYPE_DROPDOWN: [
        { label: 'Normal', style: 'unstyled' },
        { label: 'Heading Large', style: 'header-one' },
        { label: 'Heading Medium', style: 'header-two' },
        { label: 'Heading Small', style: 'header-three' }
      ],
      BLOCK_TYPE_BUTTONS: [{ label: 'UL', style: 'unordered-list-item' }, { label: 'OL', style: 'ordered-list-item' }]
    };
  }

  _handleChange(target) {
    this.setState({ value: target });
    let data = {
      id: this.props.id,
      name: 'mainText',
      value: target.toString('html').replace(/\n/g, '')
    };
    this.props.actions.addTextAction.addText(data);
  }

  render() {
    return <RichTextEditor toolbarConfig={this.toolbarConfig} value={this.state.value} onChange={this.handleChange} />;
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

export default connect(mapStateToProps, mapDispatchToProps)(TextEditor);
