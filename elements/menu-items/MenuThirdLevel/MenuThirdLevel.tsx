import React from 'react';

import { useRouter } from 'next/router';

import classnames from 'classnames';

import Link from 'next/link';

import { PageItem } from '../../../interfaces/menu.interface';

import styles from '../../../layout/Menu/Menu.module.scss';

interface MenuThirdLevelProps {
  pages: PageItem[];
  route: string;
}

const MenuThirdLevel: React.FC<MenuThirdLevelProps> = ({ pages, route }) => {
  const router = useRouter();

  return (
    <>
      {pages.map(page => (
        <Link href={`/${route}/${page.alias}`} key={page._id}>
          <a className={classnames(styles.thirdLevel, { [styles.thirdLevelActive]: `/${route}/${page.alias}` === router.asPath })}>
            {page.category}
          </a>
        </Link>
      ))}
    </>
  );
};

export default MenuThirdLevel;
