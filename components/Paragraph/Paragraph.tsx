import React from 'react';

import classnames from 'classnames';

import { ParagraphProps } from './Paragraph.props';

import styles from './Paragraph.module.scss';

export const Paragraph: React.FC<ParagraphProps> = ({ size = 'medium', children, className, ...props }) => (
  <p
    className={classnames(styles.paragraph, className, {
      [styles.large]: size === 'large',
      [styles.medium]: size === 'medium',
      [styles.small]: size === 'small',
    })}
    {...props}
  >
    {children}
  </p>
);
