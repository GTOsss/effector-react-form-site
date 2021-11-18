import React from 'react';

const defaultState = {
  menuKey: 'API',
  changeKey: (key: string) => (defaultState.menuKey = key),
};

const context = React.createContext(defaultState);

export default context;
