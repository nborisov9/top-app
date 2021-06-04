import { DetailedHTMLProps, HTMLAttributes } from 'react';

export interface TagProps extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  size?: 'small' | 'medium';
  color?: 'ghost' | 'primary' | 'red' | 'green';
  children: React.ReactNode;
}
