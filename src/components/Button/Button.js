import React from 'react';
import PropTypes from 'prop-types';

// Styles
import ButtonStyle from './Button.styles';

const propTypes = {
  /** onClick handler */
  onClick: PropTypes.func,

  /** button text. */
  text: PropTypes.string.isRequired,
};

const defaultProps = {
  onClick: () => {},
};

function Button({ text, onClick }) {
  return (
    <ButtonStyle onClick={onClick}>
      { text }
    </ButtonStyle>
  );
}

Button.propTypes = propTypes;
Button.defaultProps = defaultProps;

export default Button;