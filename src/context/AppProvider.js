import React, { useState } from 'react';
import AppContext from './AppContext';

const INITIAL_STATE = {};

function AppProvider({ children }) {
  const [state] = useState(INITIAL_STATE);

  return (
    <AppContext.Provider value={ state }>
      {children}
    </AppContext.Provider>
  )
}

export default AppProvider;