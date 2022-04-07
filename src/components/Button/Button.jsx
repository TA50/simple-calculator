import React from 'react';
import PropTypes from 'prop-types';
import classes from './Button.module.css';
import { Actions, useAppDispatch } from '../../context/context';

function Button(props) {
  const style = {};
  const labelStyle = {};
  const disptach = useAppDispatch();
  if (props.labelColor) labelStyle.color = props.labelColor;
  if (props.backgroundColor) {
    style.backgroundColor = props.backgroundColor;
  }

  const className = [classes.keypadButton, props.className];
  if (props.doubleHeight) className.push(classes.doubleHeight);
  if (props.doubleWidth) className.push(classes.doubleWidth);
  // Events
  const onClickHandler = () => {
    console.log('Click');
    disptach({ type: Actions.ADD_NUMBER, payload: props.label });
  };

  return (
    <button
      type="button"
      className={className.join(' ')}
      style={style}
      onClick={props.onClick || onClickHandler}
    >
      <label style={labelStyle}>{props.label}</label>
    </button>
  );
}
Button.propTypes = {
  onClick: PropTypes.func,
  label: PropTypes.string.isRequired,
  labelColor: PropTypes.string,
  backgroundColor: PropTypes.string,
  className: PropTypes.string,
};
Button.defaultProps = {
  labelColor: null,
  backgroundColor: null,
  className: '',
  onClick: null,
};
export { Button };
