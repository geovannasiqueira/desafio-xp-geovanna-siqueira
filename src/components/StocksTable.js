import React, { useContext, useEffect } from 'react';
import AppContext from '../context/AppContext';

function StocksTable() {
  const { stocks, setStockBuy, getStocksList, setAction } =
    useContext(AppContext);

  useEffect(() => {
    getStocksList();

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleNegociation = ({ target }) => {
    if (target.className.includes('buy')) {
      setAction('Comprar');
    }
    const buy = stocks.filter((stock) => stock.stock === target.id);
    setStockBuy(buy[0]);
  };

  return (
    <div className="flex flex-col items-center">
      <h2 className="text-xl font-bold mb-6">Disponíveis para investir</h2>
      {stocks.length === 0 ? (
        <div className="px-4 my-6">
          <div className="alert shadow-lg flex flex-col justify-around">
            <h3 className="font-bold">Loading...</h3>
            <progress className="progress w-28"></progress>
          </div>
        </div>
      ) : (
        <table className="table table-zebra inline-flex flex-col gap-2 w-96 p-12 bg-white rounded-md shadow-xl mb-8">
          <thead>
            <tr>
              <th>Ação</th>
              <th>Qtde</th>
              <th>Valor( R$ )/un</th>
              <th>Negociar</th>
            </tr>
          </thead>

          <tbody>
            {stocks &&
              stocks.map((stock, key) => (
                <tr key={key}>
                  <td>{stock.stock}</td>
                  <td>{stock.amount}</td>
                  <td>{stock.price.toFixed(2)}</td>
                  <td>
                    <label
                      htmlFor="my-modal-3"
                      id={stock.stock}
                      className="btn modal-button buy"
                      onClick={handleNegociation}
                    >
                      C
                    </label>
                  </td>
                </tr>
              ))}
          </tbody>
        </table>
      )}
    </div>
  );
}

export default StocksTable;
