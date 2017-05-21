import React from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { Link } from "react-router";
import ReactDOM from "react-dom";
import DropzoneComponent from "react-dropzone-component";
// import DropzoneImg from "react-dropzone";
import ButtonRemove from "../../components/ButtonRemove/ButtonRemove.js";

import "./MailBlock.css";
import "./dropzone.css";
import "./filepicker.css";

class MailBlock extends React.Component {
  constructor(props, context) {
    super(props, context);
    this.state = {
      heading: "",
      mainText: ""
    };
  }

  handleChange({ target }) {
    this.setState({
      [target.name]: target.value
    });
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
        <span>
          <ButtonRemove onClickEvent={() => this.props.onRemoveBtnClick(this.props.id)} />
        </span>
        <DropzoneComponent
          className="mailBlock__dropzone"
          activeClassName="mailBlock__dropzone_active"
          rejectClassName="mailBlock__dropzone_reject"
          config={componentConfig}
          eventHandlers={eventHandlers}
          djsConfig={djsConfig}
        />
        <input
          name="heading"
          value={this.state.heading}
          onChange={::this.handleChange}
          className="mailBlock__input mailBlock__load-heading"
          type="text"
          placeholder="Заголовок"
        />
        <textarea
          name="mainText"
          value={this.state.mainText}
          onChange={::this.handleChange}
          className="mailBlock__input mailBlock__load-text"
          type="text"
          placeholder="Текст"
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
    actions: {}
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(MailBlock);

//
// {        <div>
//           <DropzoneImg
//             className="mailBlock__dropzone"
//             activeClassName="mailBlock__dropzone_active"
//             rejectClassName="mailBlock__dropzone_reject"
//             onDrop={this.onDrop}
//           >
//             <div>Картинку сувать сюда</div>
//           </DropzoneImg>
//         </div>}
