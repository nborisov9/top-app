import React from 'react';

import { MenuItem } from '../interfaces/menu.interface';
import { TopLevelCategory } from '../interfaces/page.interface';

export interface IAppContext {
  menu: MenuItem[];
  firstCategory: TopLevelCategory;
  setMenu?: (newMenu: MenuItem[]) => void;
}

export const AppContext = React.createContext<IAppContext>({ menu: [], firstCategory: TopLevelCategory.Courses });

// TODO: PropsWithChildren<IAppContext> то же самое, что и IAppContext & {children: React.ReactNode}
export const AppContextProvider: React.FC<React.PropsWithChildren<IAppContext>> = ({ menu, firstCategory, children }) => {
  const [menuState, setMenuState] = React.useState<MenuItem[]>(menu);

  const setMenu = (newMenu: MenuItem[]) => {
    setMenuState(newMenu);
  };

  return <AppContext.Provider value={{ menu: menuState, firstCategory, setMenu }}>{children}</AppContext.Provider>;
};

export const useAppContext = () => React.useContext(AppContext);
