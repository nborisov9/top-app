import React from 'react';

import MenuFirstLevel from '../../elements/menu-items/MenuFirstLevel/MenuFirstLevel';
import MenuSecondLevel from '../../elements/menu-items/MenuSecondLevel/MenuSecondLevel';
import MenuThirdLevel from '../../elements/menu-items/MenuThirdLevel/MenuThirdLevel';

import { useAppContext } from '../../context/app.context';

import { FirstLevelMenuItems, PageItem } from '../../interfaces/menu.interface';

import styles from './Menu.module.scss';

const Menu = () => {
  const { menu, setMenu } = useAppContext();

  const openSecondLevelHandler = (secondCategory: string) => {
    if (!setMenu) {
      return;
    }

    setMenu(
      menu.map(m => {
        if (m._id.secondCategory === secondCategory) {
          m.isOpened = !m.isOpened;
        }

        return m;
      }),
    );
  };

  const buildFirstLevel = () => <MenuFirstLevel buildSecondLevel={buildSecondLevel} />;

  const buildSecondLevel = (menuItem: FirstLevelMenuItems) => (
    <MenuSecondLevel menuItem={menuItem} openSecondLevelHandler={openSecondLevelHandler} buildThirdtLevel={buildThirdtLevel} />
  );

  const buildThirdtLevel = (pages: PageItem[], route: string) => <MenuThirdLevel pages={pages} route={route} />;

  return <div className={styles.menu}>{buildFirstLevel()}</div>;
};

export default Menu;
