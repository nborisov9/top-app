import React from 'react';

import Link from 'next/link';

import classnames from 'classnames';

import { firstLevelMenu } from '../../../helpers/helpers';

import { useAppContext } from '../../../context/app.context';
import { FirstLevelMenuItems } from '../../../interfaces/menu.interface';

import styles from '../../../layout/Menu/Menu.module.scss';

interface MenuFirstLevelProps {
  buildSecondLevel: (menuItem: FirstLevelMenuItems) => React.ReactNode;
}

const MenuFirstLevel: React.FC<MenuFirstLevelProps> = ({ buildSecondLevel }) => {
  const { firstCategory } = useAppContext();

  return (
    <>
      {firstLevelMenu.map(m => (
        <div key={m.route}>
          <Link href={`/${m.route}`}>
            <a>
              <div
                className={classnames(styles.firstLevel, {
                  [styles.firstLevelActive]: m.id === firstCategory,
                })}
              >
                {m.icon}
                <span>{m.name}</span>
              </div>
            </a>
          </Link>
          {m.id === firstCategory && buildSecondLevel(m)}
        </div>
      ))}
    </>
  );
};

export default MenuFirstLevel;
