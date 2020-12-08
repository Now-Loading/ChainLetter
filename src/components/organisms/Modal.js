import React from 'react';
import PropTypes from 'prop-types';
import './Modal.scss';
import Button from '../atoms/Button';

const Modal = ({
  title,
  subTitle,
  children,
  submitHandler,
  cancelHandler,
  confirmText,
  cancelText,
  canCancel,
}) => {
  const handleSubmit = (e) => {
    e.preventDefault();
    submitHandler(e);
  };

  const handleCancel = () => {
    cancelHandler();
  };

  return (
    <div
      className="modal"
    >
      <form onSubmit={handleSubmit}>
        <header>
          {title && <h3>{title}</h3>}
          {subTitle && <h4>{subTitle}</h4>}
        </header>
        <main>
          {children}
        </main>
        <footer>
          {canCancel && (
            <Button
              type="button"
              text={cancelText}
              variant="secondary"
              clickHandler={handleCancel}
            />
          )}
          <Button
            type="submit"
            text={confirmText}
            variant="primary"
          />
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
  submitHandler: PropTypes.func,
  cancelHandler: PropTypes.func,
  confirmText: PropTypes.string,
  cancelText: PropTypes.string,
  canCancel: PropTypes.bool,
};

Modal.defaultProps = {
  title: null,
  subTitle: null,
  children: null,
  submitHandler: null,
  cancelHandler: null,
  confirmText: 'Confirm',
  cancelText: 'Cancel',
  canCancel: false,
};
