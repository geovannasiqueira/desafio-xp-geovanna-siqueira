import React, { useState } from 'react';
import PropTypes from 'prop-types';
import fetchStocks from '../services/fetchStocks';
import AppContext from './AppContext';

function AppProvider({ children }) {
  const [stocks, setStocks] = useState([]);
  // const [stockBuy, setStockBuy] = useState({});

  const getStocksList = async () => {
    setStocks(await fetchStocks());
  };

  // const setBuy = (stocks) => {
  //   setStockBuy(stocks);
  // };

  const contextValue = {
    stocks,
    setStocks,
    // stockBuy,
    // setStockBuy,
    getStocksList,
  }

  return (
    <AppContext.Provider value={ contextValue }>
      {children}
    </AppContext.Provider>
  )
}

AppProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default AppProvider;