import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Link } from 'react-router';
import ReactDOM from 'react-dom';
import DropzoneComponent from 'react-dropzone-component';

import ButtonRemove from '../../components/ButtonRemove/ButtonRemove.js';
import TextEditor from '../TextEditor/TextEditor.js';

import * as addText from '../../redux/actions/addText';

import './MailBlock.css';
import './dropzone.css';
import './filepicker.css';

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
    var componentConfig = {
      postUrl: 'https://api.imgur.com/3/image',
      iconFiletypes: ['.jpg', '.png', '.gif'],
      showFiletypeIcon: true
    };
    var djsConfig = {
      createImageThumbnails: false,
      autoProcessQueue: true,
      addRemoveLinks: true,
      url: 'https://api.imgur.com/3/image', //imgur endpoint for image upload
      paramName: 'image', //important for imgur request name
      acceptedFiles: 'image/*', //only allow image files to be uploaded
      method: 'post',
      headers: {
        'Cache-Control': null, //required for cors
        'X-Requested-With': null, //required for cors
        Authorization: 'Client-ID f3db467a825d96b' //replace YOUR_CLIENT_ID with the one obtained from imgur
      }
    };
    var eventHandlers = {
      complete: file => {
        let imageLink = JSON.parse(file.xhr.response);
        let data = {
          id: this.props.id,
          name: 'image',
          value: imageLink.data.link
        };
        this.props.actions.addTextAction.addText(data);
      }
    };
    return (
      <div className="mailBlock__main">

        <h1>
          Блок {this.props.id + 1} <span>
            <ButtonRemove onClickEvent={() => this.props.onRemoveBtnClick(this.props.id)} />
          </span>
        </h1>

        <DropzoneComponent
          className="mailBlock__dropzone"
          activeClassName="mailBlock__dropzone_active"
          rejectClassName="mailBlock__dropzone_reject"
          config={componentConfig}
          eventHandlers={eventHandlers}
          djsConfig={djsConfig}>
          <div className="dz-default dz-message" data-dz-message><span>Картинки сувать сюда</span></div>
        </DropzoneComponent>
        <input
          name={'heading'}
          onChange={::this.handleChange}
          className="mailBlock__input mailBlock__load-heading"
          type="text"
          placeholder="Заголовок"
          value={this.props.defaultHeading}
        />
        <TextEditor id={this.props.id} />
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
