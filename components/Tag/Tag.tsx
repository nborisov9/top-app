import React from 'react';

import classnames from 'classnames';

import { TagProps } from './Tag.props';

import styles from './Tag.module.scss';

export const Tag: React.FC<TagProps> = ({ color = 'ghost', size = 'medium', children, className, ...props }) => (
  <div
    className={classnames(styles.tag, className, {
      [styles.medium]: size === 'medium',
      [styles.small]: size === 'small',
      [styles.ghost]: color === 'ghost',
      [styles.primary]: color === 'primary',
      [styles.red]: color === 'red',
      [styles.green]: color === 'green',
      [styles.gray]: color === 'gray',
    })}
    {...props}
  >
    {children}
  </div>
);
