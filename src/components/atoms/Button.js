import React from 'react';
import PropTypes from 'prop-types';
import './Button.scss';
// TODO: handle line endings
const Button = ({
  type,
  variant,
  clickHandler,
  text,
}) => (
  <button
    // eslint-disable-next-line react/button-has-type
    type={type}
    className={variant}
    onClick={clickHandler}
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
};

Button.defaultProps = {
  clickHandler: null,
  text: 'Confirm',
};
