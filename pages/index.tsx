import { Htag } from '../components';
import { Button } from '../components';
import { Paragraph } from '../components';

export default function Home() {
  return (
    <div>
      <Htag tag="h1">NOTO SANS</Htag>
      <Button arrow="right" onClick={() => console.log(123)} apperance="primary">
        Test
      </Button>
      <Button arrow="right" apperance="ghost">
        Test
      </Button>
      <Paragraph>Текст</Paragraph>
    </div>
  );
}
