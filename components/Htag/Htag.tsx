import React from 'react';

import { HtagProps } from './Htag.props';

import styles from './Htag.module.scss';

export const Htag: React.FC<HtagProps> = ({ tag, children }) => {
  const hadnlersHtags = {
    h1: () => <h1 className={styles.h1}>{children}</h1>,
    h2: () => <h2 className={styles.h2}>{children}</h2>,
    h3: () => <h3 className={styles.h3}>{children}</h3>,
  };

  const renderHtag = () => {
    if (hadnlersHtags[tag]) {
      return hadnlersHtags[tag]();
    }

    return <></>;
  };

  return renderHtag();
};
