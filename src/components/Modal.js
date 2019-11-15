import React, { Component, createRef } from 'react';
import T from 'prop-types';
import { createPortal } from 'react-dom';
import styles from '../styles/index.module.css';

const rootModal = document.getElementById('modal');
class Modal extends Component {
  static propTypes = {
    children: T.node.isRequired,
    closeModal: T.func.isRequired,
  };

  backdropRef = createRef();

  componentDidMount() {
    window.addEventListener('keydown', this.handleKeyDown);
  }

  componentWillUnmount() {
    window.removeEventListener('keydown', this.handleKeyDown);
  }

  handleKeyDown = e => {
    if (e.code !== 'Escape') {
      return;
    }
    this.props.closeModal();
  };

  handleButtonClose = () => {
    this.props.closeModal();
  };

  handleBackdropClick = e => {
    if (this.backdropRef.current && this.backdropRef.current !== e.target) {
      return;
    }
    this.props.closeModal();
  };

  render() {
    const { children } = this.props;
    return createPortal(
      <div
        className={styles.backdrop}
        ref={this.backdropRef}
        onClick={this.handleBackdropClick}
        role="presentation"
      >
        <div className={styles.modal}>{children}</div>
      </div>,
      rootModal,
    );
  }
}

export default Modal;
