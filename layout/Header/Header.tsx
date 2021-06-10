import React from 'react';

import { HeaderProps } from './Header.props';

export const Header: React.FC<HeaderProps> = ({ ...props }) => {
  return <div {...props}>Header</div>;
};
