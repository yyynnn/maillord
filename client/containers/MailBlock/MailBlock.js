import React, { PropTypes } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { Link } from "react-router";
import ReactDOM from "react-dom";
import DropzoneComponent from "react-dropzone-component";

import ButtonRemove from "../../components/ButtonRemove/ButtonRemove.js";
import TextEditor from "../TextEditor/TextEditor.js";

import * as addHeading from "../../redux/actions/addHeading";
import * as addMainText from "../../redux/actions/addMainText";

import "./MailBlock.css";
import "./dropzone.css";
import "./filepicker.css";

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
    this.props.actions.addMainTextAction.addMainText(data);
  }

  render() {
    var componentConfig = {
      iconFiletypes: [".jpg", ".png", ".gif"],
      showFiletypeIcon: true,
      postUrl: "/"
    };
    var djsConfig = { autoProcessQueue: true };
    var eventHandlers = { addedfile: file => console.log(file) };
    return (
      <div className="mailBlock__main">
        {console.log()}
        <h1>
          Блок {this.props.id} <span>
            <ButtonRemove onClickEvent={() => this.props.onRemoveBtnClick(this.props.id)} />
          </span>
        </h1>

        <DropzoneComponent
          className="mailBlock__dropzone"
          activeClassName="mailBlock__dropzone_active"
          rejectClassName="mailBlock__dropzone_reject"
          config={componentConfig}
          eventHandlers={eventHandlers}
          djsConfig={djsConfig}
        />
        <input
          name={"heading"}
          onChange={::this.handleChange}
          className="mailBlock__input mailBlock__load-heading"
          type="text"
          placeholder="Заголовок"
          value={this.props.defaultHeading}
        />
        <textarea
          name={"mainText"}
          onChange={::this.handleChange}
          className="mailBlock__input mailBlock__load-text"
          type="text"
          placeholder="Текст"
          value={this.props.defaultMainText}
        />
        <TextEditor />
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
      addMainTextAction: bindActionCreators(addMainText, dispatch),
      addHeadingAction: bindActionCreators(addHeading, dispatch)
    }
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(MailBlock);
