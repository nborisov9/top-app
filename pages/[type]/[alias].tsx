import React from 'react';

import axios from 'axios';
import { ParsedUrlQuery } from 'querystring';

import { withLayout } from '../../layout/Layout';
import { MenuItem } from '../../interfaces/menu.interface';
import { TopLevelCategory, TopPageModel } from '../../interfaces/page.interface';
import { GetStaticPaths, GetStaticProps, GetStaticPropsContext } from 'next';
import { ProductModel } from '../../interfaces/product.interface';
import { firstLevelMenu } from '../../helpers/helpers';

const Course: React.FC<CourseProps> = ({ menu, page, products }) => {
  return <div>{products && products.length}</div>;
};

export default withLayout(Course);

export const getStaticPaths: GetStaticPaths = async () => {
  const paths: string[] = [];

  // на месте for of - forEach не будет дожидаться выполнения завершения задачи. forEach — синхронная операция. Она просто запустит задачи и пойдет дальше.
  for (const firstLevelMenuItem of firstLevelMenu) {
    const { data: menu } = await axios.post<MenuItem[]>(`${process.env.NEXT_PUBLIC_DOMAIN}/api/top-page/find`, {
      firstCategory: firstLevelMenuItem.id,
    });

    paths.push(...menu.flatMap(menuItem => menuItem.pages.map(page => `/${firstLevelMenuItem.route}/${page.alias}`)));
  }

  return {
    paths,
    fallback: true,
  };
};

export const getStaticProps: GetStaticProps<CourseProps> = async ({ params }: GetStaticPropsContext<ParsedUrlQuery>) => {
  if (!params) {
    return {
      notFound: true,
    };
  }

  const firstCategoryItem = firstLevelMenu.find(m => m.route === params.type);

  if (!firstCategoryItem) {
    return {
      notFound: true,
    };
  }

  const { data: menu } = await axios.post<MenuItem[]>(`${process.env.NEXT_PUBLIC_DOMAIN}/api/top-page/find`, {
    firstCategory: firstCategoryItem.id,
  });

  const { data: page } = await axios.get<TopPageModel>(`${process.env.NEXT_PUBLIC_DOMAIN}/api/top-page/byAlias/${params.alias}`);

  const { data: products } = await axios.post<ProductModel[]>(`${process.env.NEXT_PUBLIC_DOMAIN}/api/product/find`, {
    category: page.category,
    limit: 10,
  });

  return {
    props: {
      menu,
      page,
      products,
      firstCategory: firstCategoryItem.id,
    },
  };
};

interface CourseProps extends Record<string, unknown> {
  menu: MenuItem[];
  page: TopPageModel;
  products: ProductModel[];
  firstCategory: TopLevelCategory;
}
