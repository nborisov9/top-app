import React from 'react';

import { Header } from './Header';
import { Sidebar } from './Sidebar';
import { Footer } from './Footer';

import { LayoutProps } from './Layout.props';

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <>
      <Header />
      <div>
        <Sidebar />
        <div>{children}</div>
      </div>
      <Footer />
    </>
  );
};

export const withLayout = <T extends Record<string, unknown>>(Component: React.FC<T>) =>
  function withComponentLayout(props: T) {
    return (
      <Layout>
        <Component {...props} />
      </Layout>
    );
  };
