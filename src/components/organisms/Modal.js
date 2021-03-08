import React from 'react';
import PropTypes from 'prop-types';
import './Modal.scss';
import Button from '../atoms/Button';

const Modal = ({
  title,
  subTitle,
  children,
  buttons,
  submitHandler,
  cancelHandler,
  confirmText,
  cancelText,
  canSubmit,
}) => {
  const handleCancel = (event) => {
    if (!cancelHandler) {
      return;
    }
    cancelHandler(event);
  };

  return (
    <div
      className="modal"
    >
      <form
        className="modal-popup"
        onSubmit={
          submitHandler
            ? (event) => submitHandler(event)
            : (event) => event.preventDefault()
        }
      >
        <header>
          {title && <h3>{title}</h3>}
          {subTitle && <h4>{subTitle}</h4>}
        </header>
        <main>
          {children}
        </main>
        <footer>
          {cancelHandler && (
            <Button
              type="button"
              text={cancelText}
              variant="secondary"
              clickHandler={handleCancel}
            />
          )}
          {buttons}
          {submitHandler && (
            <Button
              type="submit"
              text={confirmText}
              variant="primary"
              disabled={!canSubmit}
            />
          )}
        </footer>
      </form>
    </div>
  );
};

export default Modal;

Modal.propTypes = {
  title: PropTypes.string,
  subTitle: PropTypes.string,
  children: PropTypes.arrayOf(PropTypes.element),
  buttons: PropTypes.element,
  submitHandler: PropTypes.func,
  cancelHandler: PropTypes.func,
  confirmText: PropTypes.string,
  cancelText: PropTypes.string,
  canSubmit: PropTypes.bool,
};

Modal.defaultProps = {
  title: null,
  subTitle: null,
  children: null,
  buttons: null,
  submitHandler: null,
  cancelHandler: null,
  confirmText: 'Confirm',
  cancelText: 'Cancel',
  canSubmit: true,
};
