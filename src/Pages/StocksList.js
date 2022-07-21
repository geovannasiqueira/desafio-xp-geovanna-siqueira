import React, { useContext, useEffect, useState } from "react";
import AppContext from "../context/AppContext";
// import fetchStocks from "../services/fetchStocks";

function StocksList() {
  // const [stocks, setStocks] = useState([]);
  const { stocks, setStocks, getStocksList } = useContext(AppContext);

  useEffect(() => {
    getStocksList();
  }, [])

  useEffect(() => {
    console.log('funcionando', stocks);
  }, [stocks])
//   // const [buy, setBuy] = useState("");
// console.log(stocksBuy);
//   useEffect(() => {
//     const getStocksList = async () => {
//       const stocksList = await fetchStocks();
//       setStocks(stocksList);
//     };

//     getStocksList();
//   }, []);

//   const handleBuy = ({ target }) => {
//     const stockBuy = target.id;
//     setBuy(stockBuy);
//     console.log(stocksBuy);
//   };

  return (
    <div className="w-full h-full flex justify-center items-center flex-col">
      <div className="h-1/2">
        <h2>Available for investing</h2>
        <table className="table table-zebra inline-flex flex-col gap-2 w-96 p-12 bg-white rounded-md shadow-xl">
          <thead>
            <tr>
              <th>Ação</th>
              <th>Qtde</th>
              <th>Valor (R$)</th>
              <th>Negociar</th>
            </tr>
          </thead>
          <tbody>
            {stocks ? (
              stocks.map((stock, key) => (
                <tr key={key}>
                  <td>{stock.stock}</td>
                  <td>{stock.amount}</td>
                  <td>{stock.price}</td>
                  <td>
                    <label
                      htmlFor="my-modal-3"
                      id={stock.stock}
                      className="btn modal-button"
                      // onClick={handleBuy}
                    >
                      C
                    </label>
                  </td>
                </tr>
              ))
            ) : (
              <span>Loading...</span>
            )}
          </tbody>
        </table>
        <input type="checkbox" id="my-modal-3" className="modal-toggle" />
        <div className="modal">
          <div className="modal-box relative">
            <label
              htmlFor="my-modal-3"
              className="btn btn-sm btn-circle absolute right-2 top-2"
            >
              ✕
            </label>
            <h3 className="text-lg font-bold">Negociar ações</h3>
            <table className="table">
              <thead>
                <tr>
                  <th>Ação</th>
                  <th>Qtde</th>
                  <th>Valor (R$)</th>
                  <th>Negociar</th>
                </tr>
              </thead>
              <tbody>
                {/* <tr>
                  <td>{buy.stock}</td>
                  <td>{buy.amount}</td>
                  <td>{buy.price}</td>
                </tr> */}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}

export default StocksList;
