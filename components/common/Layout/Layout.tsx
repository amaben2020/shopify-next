import React from 'react';
import style from './Layout.module.css';
interface Children {
  children: React.ReactNode;
}

const Layout = ({ children }: Children) => {
  return (
    <main className={style.root}>
      <div className='fit'>{children}</div>
    </main>
  );
};

export default Layout;
