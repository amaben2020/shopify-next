import React from 'react';

interface Children {
  children: React.ReactNode;
}

const Layout = ({ children }: Children) => {
  return <div>{children}</div>;
};

export default Layout;
