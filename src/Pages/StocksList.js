import React, { useEffect, useState } from "react";
// import AppContext from "../context/AppContext";
import fetchStocks from "../services/fetchStocks";

function StocksList() {
  // const { state } = useContext(AppContext);
// // console.log('prov', state);
// const stocksArray = state.map(stock => console.log(stock));
// console.log(stocksArray);
  const [stocks, setStocks] = useState([]);

  useEffect(() => {
    const getStocksList = async () => {
      const stocksList = await fetchStocks();
      setStocks(stocksList);
    };

    getStocksList();
  }, []);

  return (
    <table>
      <thead>
        <tr>
          <th>Stocks</th>
          <th>Amount</th>
          <th>Price (R$)</th>
          <th>Negociar</th>
        </tr>
      </thead>
      <tbody>
        {stocks ? stocks.map((stock, key) => (
          <tr key={key}>
            <td>{stock.stock}</td>
            <td>{stock.amount}</td>
            <td>{stock.price}</td>
            <td>
              <button type="button">C</button>|
              <button type="button">V</button>
            </td>
          </tr>
        )) : <span>Loading...</span>}
      </tbody>
    </table>
  );
}

export default StocksList;
