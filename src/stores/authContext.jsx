import React, { createContext, useEffect } from 'react';
import netlifyIdentity from 'netlify-identity-widget';

const AuthContext = createContext({
  user: null,
  login: () => {},
  logout: () => {},
  authReady: false,
});

export const AuthContextProvider = ({ children }) => {
  const [user, setUser] = React.useState(null);

  useEffect(() => {
    netlifyIdentity.on('login', (user) => {
      setUser(user);
      netlifyIdentity.close();
      console.log('login event');
    });

    netlifyIdentity.on('logout', () => {
      setUser(null);
      console.log('logout event');
    });

    // init Netlify Identity connection
    netlifyIdentity.init();

    return () => {
      netlifyIdentity.off('login');
      netlifyIdentity.off('logout');
    };
  }, []);

  const login = () => {
    // open Netlify Identity modal
    netlifyIdentity.open();
  };
  const logout = () => {
    // logout from Netlify Identity
    netlifyIdentity.logout();
  };

  const context = { user, login, logout };

  return <AuthContext.Provider value={context}>{children}</AuthContext.Provider>;
};

export default AuthContext;
