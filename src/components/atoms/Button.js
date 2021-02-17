import React from 'react';
import PropTypes from 'prop-types';
import './Button.scss';

const Button = ({
  type,
  variant,
  clickHandler,
  text,
  disabled,
}) => (
  <button
    // eslint-disable-next-line react/button-has-type
    type={type}
    className={variant}
    onClick={clickHandler}
    disabled={disabled}
  >
    {text}
  </button>
);

export default Button;

Button.propTypes = {
  type: PropTypes.string.isRequired,
  variant: PropTypes.string.isRequired,
  clickHandler: PropTypes.func,
  text: PropTypes.string,
  disabled: PropTypes.bool,
};

Button.defaultProps = {
  clickHandler: null,
  text: 'Confirm',
  disabled: false,
};
