import { DetailedHTMLProps, HtmlHTMLAttributes } from 'react';

export interface ParagraphProps
  extends DetailedHTMLProps<HtmlHTMLAttributes<HTMLParagraphElement>, HTMLParagraphElement> {
  size?: 'large' | 'medium' | 'small';
  children: React.ReactNode;
}
