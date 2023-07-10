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
  const [authReady, setAuthReady] = React.useState(false);

  useEffect(() => {
    netlifyIdentity.on('login', (user) => {
      setUser(user);
      netlifyIdentity.close();
    });

    netlifyIdentity.on('logout', () => {
      setUser(null);
    });

    netlifyIdentity.on('init', (user) => {
      setUser(user);
      setAuthReady(true);
    });

    // init Netlify Identity connection
    netlifyIdentity.init();

    return () => {
      netlifyIdentity.off('login');
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

  const context = { user, login, logout, authReady };

  return <AuthContext.Provider value={context}>{children}</AuthContext.Provider>;
};

export default AuthContext;
