import React from 'react';
import { ThemeProvider } from './MTComponents';
import Nav from './Nav';

const Layout = ({ children }) => {
  return (
    <ThemeProvider>
      <Nav />
      <main>{children}</main>
    </ThemeProvider>
  );
};

export default Layout;
