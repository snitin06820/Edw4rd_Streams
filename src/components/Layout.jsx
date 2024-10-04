import React from 'react';
import { useLocation } from 'react-router-dom';
import Auth from './Auth';

const Layout = ({ children }) => {
  const location = useLocation();
  const isAuthPage = location.pathname === '/signin' || location.pathname === '/signup';

  return (
    <div className="h-screen flex flex-col">
      {isAuthPage ? (
        <Auth type={location.pathname === '/signin' ? 'signin' : 'signup'} />
      ) : (
        <>
          <main className="flex-1">{children}</main>
        </>
      )}
    </div>
  );
};

export default Layout;