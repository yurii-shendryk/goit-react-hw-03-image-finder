import React from 'react';
import PropTypes from 'prop-types';
import './Button.scss';
const Button = ({ onClick }) => (
  <button className="Button" type="button" onClick={onClick}>
    Load more
  </button>
);

Button.propTypes = {};

export default Button;
