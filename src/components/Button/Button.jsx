import React from 'react';
import PropTypes from 'prop-types';
import classes from './Button.module.css';
import { useButtonViewModel } from './ButtonViewModel';
/**
 *
 * @param {ButtonProps} props
 * @returns {JSX.Element}
 */
function Button(props) {
  const vm = useButtonViewModel(props);
  const style = {};
  const labelStyle = {};
  if (props.labelColor) labelStyle.color = props.labelColor;
  if (props.backgroundColor) {
    style.backgroundColor = props.backgroundColor;
  }

  const className = [classes.keypadButton, props.className];
  if (props.doubleHeight) className.push(classes.doubleHeight);
  if (props.doubleWidth) className.push(classes.doubleWidth);
  return (
    <button
      type="button"
      className={className.join(' ')}
      style={style}
      disabled={props.disabled}
      onClick={vm.onClick}
    >
      <label style={labelStyle}>{props.label}</label>
    </button>
  );
}
/**
 * @typedef {{
 * [key in keyof(Button.propTypes)]: String;
 * }} ButtonProps
 */
Button.propTypes = {
  label: PropTypes.string.isRequired,
  labelColor: PropTypes.string,
  backgroundColor: PropTypes.string,
  className: PropTypes.string,
  disabled: PropTypes.bool,
};
Button.defaultProps = {
  labelColor: null,
  backgroundColor: null,
  className: '',
  disabled: false,
};
export { Button };
