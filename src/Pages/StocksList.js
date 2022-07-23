import React, { useContext } from 'react';
import MyStocksTable from '../components/MyStocksTable';
import QuantityBtn from '../components/QuantityBtn';
import StocksTable from '../components/StocksTable';
import AppContext from '../context/AppContext';

function StocksList() {
  const {
    stocks,
    setStocks,
    stockBuy,
    qtd,
    setQtd,
    price,
    setPrice,
    budget,
    setBudget,
    boughtStocks,
    setBoughtStocks,
    buyValue,
    setBuyValue,
    sellValue,
    setSellValue,
    action,
  } = useContext(AppContext);

  const handleBuy = ({ target }) => {
    const inputValue = target.value;
    setBuyValue(inputValue);
    setQtd(Math.trunc(Number(target.value) / Number(stockBuy.price)));
  };

  const handleSell = ({ target }) => {
    const inputValue = target.value;
    setSellValue(inputValue);
    setQtd(Math.trunc(Number(target.value) / Number(stockBuy.price)));
  };

  const enableButton = () => {
    if (price > budget) {
      return true;
    }
    return false;
  };

  const disableInputBuy = () => {
    if (action === 'Vender') {
      return true;
    }
    return false;
  };

  const disableInputSell = () => {
    if (action === 'Comprar') {
      return true;
    }
    return false;
  };

  const handleConfirm = ({ target }) => {
    // if (Number(qtd) === 0) {

    // }
    setBoughtStocks([
      ...boughtStocks,
      {
        stock: stockBuy.stock,
        amount: qtd,
        price: price,
      },
    ]);
    const updateBugdet = Number(budget) - Number(price);
    setBudget(updateBugdet);
    updateAmount();
    setQtd('');
    setPrice('');
    setBuyValue('');
  };

  const updateAmount = () => {
    stocks
      .filter((stock) => stock === stockBuy)
      .map((stock) => (stock.amount = stock.amount - qtd));
    setStocks(stocks);
  };

  return (
    <div className="w-full h-full flex justify-center items-center flex-col">
      <div className="overflow-y-auto no-scrollbar">
        <MyStocksTable />
        <StocksTable />
        <input type="checkbox" id="my-modal-3" className="modal-toggle" />
        <div className="modal">
          <div className="modal-box flex flex-col items-center relative gap-4">
            <label
              htmlFor="my-modal-3"
              className="btn btn-sm btn-circle absolute right-2 top-2"
            >
              ✕
            </label>
            <h1 className="text-2xl font-bold mb-6">Negociar ações</h1>
            <table className="table w-full">
              <thead>
                <tr>
                  <th>Ação</th>
                  <th>Qtde</th>
                  <th>Valor (R$)</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>{stockBuy.stock}</td>
                  <td>{stockBuy.amount}</td>
                  <td>{stockBuy.price}</td>
                </tr>
              </tbody>
            </table>
            <div className="divider"></div>
            <div className="form-control flex flex-col items center mb-4">
              <label htmlFor="qtde" className="mb-2">
                <p className="label-text"> Quantidade </p>
              </label>
              <QuantityBtn />
            </div>
            <div className="form-control w-full gap-2">
              <label className="input-group input-group-sm" htmlFor="buy">
                <button name="buy" className="btn btn-sm w-28">
                  Comprar
                </button>
                <input
                  type="text"
                  className="input input-bordered input-sm w-full max-w-xs"
                  id="buyInput"
                  value={buyValue}
                  disabled={disableInputBuy()}
                  onChange={handleBuy}
                />
              </label>
              <label className="input-group input-group-sm" htmlFor="sell">
                <button name="sell" className="btn btn-sm w-28">
                  Vender
                </button>
                <input
                  type="text"
                  className="input input-bordered input-sm w-full max-w-xs"
                  id="sellInput"
                  disabled={disableInputSell()}
                  value={sellValue}
                  onChange={handleSell}
                />
              </label>
            </div>
            <div className="divider"></div>
            <div className="flex justify-between w-full">
              <h2>Tipo de ação</h2>
              <h2 className="font-bold">{action}</h2>
            </div>
            <div className="flex justify-between w-full">
              <h2 className="font-bold">Preço por unidade</h2>
              <h2 className="font-bold">R$ {stockBuy.price}</h2>
            </div>
            <div className="flex justify-between w-full">
              <h2>Quantidade de Ações</h2>
              <h2 className="font-bold">{qtd}</h2>
            </div>
            <div className="flex justify-between w-full">
              <h2>Taxas</h2>
              <h2>Zero</h2>
            </div>
            <div className="divider m-0"></div>
            <div className="flex justify-between w-full">
              <h2 className="text-lg font-bold">Total</h2>
              <h2 className="font-bold">R$ {price}</h2>
            </div>
            {enableButton() ? (
              <div>
                <button
                  type="button"
                  className="btn mt-4"
                  onClick={handleConfirm}
                  disabled={enableButton()}
                >
                  Confirmar
                </button>
                <p className="label-text-alt my-2">Quantidade indisponível</p>
              </div>
            ) : (
              <div>
                <label
                  htmlFor="my-modal-3"
                  className="btn mt-4"
                  onClick={handleConfirm}
                  disabled={enableButton()}
                >
                  Confirmar
                </label>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default StocksList;
