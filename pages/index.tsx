import React from 'react';

import { GetStaticProps } from 'next';

import axios from 'axios';

import { Htag } from '../components';
import { Button } from '../components';
import { Paragraph } from '../components';
import { Tag } from '../components';
import { Rating } from '../components';
import { withLayout } from '../layout/Layout';

import { MenuItem } from '../interfaces/menu.interface';

const Home: React.FC<HomeProps> = ({ menu }) => {
  const [rating, setRating] = React.useState(0);

  return (
    <>
      <Htag tag="h1">NOTO SANS</Htag>
      <Button arrow="right" onClick={() => console.log(123)} apperance="primary">
        Test
      </Button>
      <Button arrow="right" apperance="ghost">
        Test
      </Button>
      <Paragraph>Текст</Paragraph>
      <Tag color="primary">Tag</Tag>
      <Tag color="ghost">Tag</Tag>
      <Tag color="red">Tag</Tag>
      <Tag color="green">Tag</Tag>
      <Tag color="gray">Tag</Tag>
      <Rating rating={4} isEditable setRating={setRating} />
      <div>
        {menu.map(({ _id }) => (
          <li key={_id.secondCategory}>{_id.secondCategory}</li>
        ))}
      </div>
    </>
  );
};

export default withLayout(Home);

export const getStaticProps: GetStaticProps<HomeProps> = async () => {
  const firstCategory = 0;
  const { data: menu } = await axios.post<MenuItem[]>(`${process.env.NEXT_PUBLIC_DOMAIN}/api/top-page/find`, {
    firstCategory,
  });

  return {
    props: {
      menu,
      firstCategory,
    },
  };
};

interface HomeProps extends Record<string, unknown> {
  menu: MenuItem[];
  firstCategory: number;
}
