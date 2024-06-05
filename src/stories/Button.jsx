import React from 'react';
import PropTypes from 'prop-types';
import './button.css';

/**
 * Primary UI component for user interaction
 */
export const Button = ({ primary, backgroundColor, size, label, color, height, borderRadius, padding, width, fontSize, ...props }) => {
  const mode = primary ? 'storybook-button--primary' : 'storybook-button--secondary';
  const colorObj = color && {color}
  const bgColor = backgroundColor && {backgroundColor}
  let styleObj = {...colorObj, ...bgColor}
  if(height){
    styleObj = {...styleObj, height}
  }
  if(borderRadius){
    styleObj = {...styleObj, borderRadius}
  }
  if(padding){
    styleObj = {...styleObj, padding}
  }
  if(fontSize){
    styleObj = {...styleObj, fontSize}
  }
  if(width){
    styleObj = {...styleObj, width}
  }
  return (
    <button
      type="button"
      className={['storybook-button', `storybook-button--${size}`, mode].join(' ')}
      style={styleObj}
      {...props}
    >
      {label}
    </button>
  );
};

Button.propTypes = {
  /**
   * Is this the principal call to action on the page?
   */
  primary: PropTypes.bool,
  /**
   * What background color to use
   */
  backgroundColor: PropTypes.string,
  /**
   * How large should the button be?
   */
  size: PropTypes.oneOf(['small', 'medium', 'large']),
  /**
   * Button contents
   */
  label: PropTypes.string.isRequired,
  /**
   * Optional click handler
   */
  onClick: PropTypes.func,
  color: PropTypes.string
};

Button.defaultProps = {
  backgroundColor: null,
  primary: false,
  size: 'medium',
  onClick: undefined,
};
