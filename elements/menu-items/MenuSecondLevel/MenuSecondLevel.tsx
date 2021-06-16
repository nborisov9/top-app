import React from 'react';

import { useRouter } from 'next/router';

import classnames from 'classnames';

import { FirstLevelMenuItems, PageItem } from '../../../interfaces/menu.interface';
import { useAppContext } from '../../../context/app.context';

import styles from '../../../layout/Menu/Menu.module.scss';

interface MenuSecondLevelProps {
  menuItem: FirstLevelMenuItems;
  openSecondLevelHandler: (secondCategory: string) => void;
  buildThirdtLevel: (pages: PageItem[], route: string) => React.ReactNode;
}

const MenuSecondLevel: React.FC<MenuSecondLevelProps> = ({ openSecondLevelHandler, menuItem, buildThirdtLevel }) => {
  const { menu } = useAppContext();

  const router = useRouter();

  return (
    <div className={styles.secondBlock}>
      {menu.map(m => {
        if (m.pages.map(p => p.alias).includes(router.asPath.split('/')[2])) {
          m.isOpened = true;
        }

        return (
          <div key={m._id.secondCategory}>
            <div className={styles.secondLevel} onClick={() => openSecondLevelHandler(m._id.secondCategory)}>
              {m._id.secondCategory}
            </div>
            <div className={classnames(styles.secondLevelBlock, { [styles.secondLevelBlockOpened]: m.isOpened })}>
              {buildThirdtLevel(m.pages, menuItem.route)}
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default MenuSecondLevel;
