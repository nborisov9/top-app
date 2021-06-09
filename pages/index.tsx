import React from 'react';

import { Htag } from '../components';
import { Button } from '../components';
import { Paragraph } from '../components';
import { Tag } from '../components';
import { Rating } from '../components';
import { withLayout } from '../layout/Layout';

const Home = () => {
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
    </>
  );
};

export default withLayout(Home);
