import React from 'react';

import { format } from 'date-fns';
import classnames from 'classnames';

import { FooterProps } from './Footer.props';

import styles from './Footer.module.scss';

export const Footer: React.FC<FooterProps> = ({ className, ...props }) => {
  return (
    <footer className={classnames(className, styles.footer)} {...props}>
      <div className={styles.text}>OwlTop © 2020 - {format(new Date(), 'yyyy')} Все права защищены</div>
      <div className={styles.text}>Пользовательское соглашение</div>
      <div className={styles.text}>Политика конфиденциальности</div>
    </footer>
  );
};
