import React, { useState } from 'react';
import PropTypes from 'prop-types';
import fetchStocks from '../services/fetchStocks';
import AppContext from './AppContext';

function AppProvider({ children }) {
  const [stocks, setStocks] = useState([]);
  const [stockBuy, setStockBuy] = useState([{}]);
  const [qtd, setQtd] = useState('');
  const [price, setPrice] = useState('');
  const [budget, setBudget] = useState(10000);
  const [boughtStocks, setBoughtStocks] = useState([]);
  const [buyValue, setBuyValue] = useState('');
  const [sellValue, setSellValue] = useState('');
  const [action, setAction] = useState('');

  const getStocksList = async () => {
    setStocks(await fetchStocks());
  };

  const contextValue = {
    stocks,
    setStocks,
    stockBuy,
    setStockBuy,
    getStocksList,
    qtd,
    setQtd,
    boughtStocks,
    setBoughtStocks,
    price,
    setPrice,
    budget,
    setBudget,
    buyValue,
    setBuyValue,
    sellValue,
    setSellValue,
    action,
    setAction,
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