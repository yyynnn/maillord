import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Link } from 'react-router';
import DropzoneComponent from 'react-dropzone-component';

import './MailBlock.css';

class MailBlock extends React.Component {
  constructor(props, context) {
    super(props, context);
  }
  render() {
    let componentConfig = {
      iconFiletypes: ['.jpg', '.png', '.gif'],
      showFiletypeIcon: true,
      postUrl: '/uploadHandler'
    };
    var djsConfig = { autoProcessQueue: false };
    var eventHandlers = { addedfile: file => console.log(file) };
    return (
      <div className="mailBlock__main">
        <div>
          <DropzoneComponent config={componentConfig} eventHandlers={eventHandlers} djsConfig={djsConfig} />
        </div>
        <div>
          <input className="mailBlock__input mailBlock__load-heading" type="text" />
        </div>
        <div>
          <textarea className="mailBlock__input mailBlock__load-text" type="text" />
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
