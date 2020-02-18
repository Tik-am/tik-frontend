import React from 'react';
import classnames from 'classnames';

import {
  Paper,
  Button,
} from '../../';

import './style.scss';

const TextField = ({
  size,
  value,
  textarea,
  onChange,
  className,
  withButton,
  buttonClick,
  buttonText,
  withRadius,
  ...restProps
}) => {
  return (
    textarea
      ? <textarea
        onChange={onChange}
        value={value}
        className={classnames('Textarea', {
          [className]: className,
        })}
        {...restProps}
      />

    : <Paper flexName="flexible grow" className="TextFieldComponent">
        <input
            onChange={onChange}
            value={value}
            className={classnames('TextField', {
              [className]: className,
              [size || 'small']: size || 'small',
              'withRadius': withRadius,
              'withButton' : withButton,
            })}
            {...restProps}
          />
          { withButton &&
            <Button
            onClick={buttonClick}
            size="medium"
            >
              {buttonText || 'Button'}
            </Button>
          }
      </Paper>
  )
};

export default TextField;
