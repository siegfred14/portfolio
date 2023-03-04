import React from "react";
import ReactDOM from "react-dom";
import ModalVideo from "react-modal-video";
import "./portfolio.css";
// import "node_modules/react-modal-video/scss/modal-video.scss";

export class VideoModal extends React.Component {
  constructor() {
    super();
    this.state = {
      isOpen: false,
    };
    this.openModal = this.openModal.bind(this);
  }

  openModal() {
    this.setState({ isOpen: true });
  }

  render() {
    return (
      <React.Fragment>
        <ModalVideo
          channel="youtube"
          isOpen={this.state.isOpen}
          videoId={this.props.videoId}
          onClose={() => this.setState({ isOpen: false })}
        />
        <button
          className="btn btn-primary"
          target="_blank"
          onClick={this.openModal}
        >
          Live Demo
        </button>
      </React.Fragment>
    );
  }
}
