import React, { useContext } from 'react';
import AppContext from '../context/AppContext';

function MyStocksTable() {
  const { stocks, setStockBuy, boughtStocks, setAction } =
    useContext(AppContext);

  const handleNegociation = ({ target }) => {
    if (target.className.includes('buy')) {
      setAction('Comprar');
    }
    if (target.className.includes('sell')) {
      setAction('Vender');
    }
    const buy = stocks.filter((stock) => stock.stock === target.id);
    setStockBuy(buy[0]);
  };

  return (
    <div>
      <h2 className="text-xl font-bold mb-6">Minhas ações</h2>
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
          {boughtStocks &&
            boughtStocks.map((stock, key) => (
              <tr key={key}>
                <td>{stock.stock}</td>
                <td>{stock.amount}</td>
                <td>{stock.price}</td>
                <td>
                  <label
                    htmlFor="my-modal-3"
                    id={stock.stock}
                    className="btn modal-button buy"
                    onClick={handleNegociation}
                  >
                    C
                  </label>
                  <label
                    htmlFor="my-modal-3"
                    id={stock.stock}
                    className="btn modal-button sell"
                    onClick={handleNegociation}
                  >
                    V
                  </label>
                </td>
              </tr>
            ))}
        </tbody>
      </table>
    </div>
  );
}

export default MyStocksTable;
