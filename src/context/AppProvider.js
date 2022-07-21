import React, { useEffect, useState } from 'react';
import fetchStocks from '../services/fetchStocks';
import AppContext from './AppContext';

function AppProvider({ children }) {
  const [state, setState] = useState({});

  const getStocksList = async () => {
    setState(await fetchStocks());
  };

  useEffect(() => {
    getStocksList();
  }, []);

  return (
    <AppContext.Provider value={ { state } }>
      {children}
    </AppContext.Provider>
  )
}

export default AppProvider;