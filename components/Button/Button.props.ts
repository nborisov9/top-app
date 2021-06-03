import { ButtonHTMLAttributes, DetailedHTMLProps } from 'react';

export interface ButtonProps extends DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement> {
  apperance: 'primary' | 'ghost';
  children: React.ReactNode;
  arrow?: 'right' | 'down' | 'none';
}
