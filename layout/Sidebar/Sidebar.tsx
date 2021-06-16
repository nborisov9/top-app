import React from 'react';
import Menu from '../Menu/Menu';

import { SidebarProps } from './Sidebar.props';

export const Sidebar: React.FC<SidebarProps> = ({ ...props }) => {
  return (
    <div {...props}>
      <Menu />
    </div>
  );
};
