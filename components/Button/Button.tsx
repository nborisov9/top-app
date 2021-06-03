import React from 'react';

import classnames from 'classnames';

import { ButtonProps } from './Button.props';
import ArrowSvg from './assets/arrow.svg';

import styles from './Button.module.scss';

export const Button: React.FC<ButtonProps> = ({ apperance, children, className, arrow = 'none', ...props }) => {
  const renderArrow = () => {
    if (arrow === 'none') {
      return null;
    }

    return (
      <ArrowSvg
        className={classnames(styles.arrow, {
          [styles.down]: arrow === 'down',
        })}
      />
    );
  };

  return (
    <button
      className={classnames(styles.button, className, {
        [styles.primary]: apperance === 'primary',
        [styles.ghost]: apperance === 'ghost',
      })}
      {...props}
    >
      {children}
      {renderArrow()}
    </button>
  );
};
