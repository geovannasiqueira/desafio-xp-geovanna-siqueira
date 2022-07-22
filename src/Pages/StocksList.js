import { toBePartiallyChecked } from "@testing-library/jest-dom/dist/matchers";
import React, { useContext, useEffect, useState } from "react";
import AppContext from "../context/AppContext";

function StocksList() {
  const {
    stocks,
    setStocks,
    getStocksList,
    stockBuy,
    setStockBuy,
    qtd,
    setQtd,
    price,
    setPrice,
    budget,
    setBudget,
    boughtStocks,
    setBoughtStocks,
  } = useContext(AppContext);
  const [warning, setWarning] = useState(false);

  useEffect(() => {
    getStocksList();
  }, []);

  useEffect(() => {
    if (qtd < 0) {
      setWarning(true);
    }
    setWarning(false);
    sumPrice();
  }, [qtd]);

  const handleBuy = ({ target }) => {
    const buy = stocks.filter((stock) => stock.stock === target.id);
    setStockBuy(buy[0]);
  };

  const handleAdd = () => {
    if (qtd < Number(stockBuy.amount)) {
      setQtd(Number(qtd) + 1);
      sumPrice();
    }
    setWarning(true);
  };

  const handleSub = () => {
    if (qtd > 0) {
      setWarning(false);
      setQtd(Number(qtd) - 1);
      sumPrice();
    }
    setWarning(true);
  };

  const handleQtd = ({ target }) => {
    const qtde = target.value;
    setQtd(qtde);
    sumPrice();
  };

  const sumPrice = () => {
    if (qtd > 0) {
      setPrice((qtd * Number(stockBuy.price)).toFixed(2));
    }
  };

  const enableButton = () => {
    if (price > budget) {
      return true;
    }
    return false;
  };

  const handleNegociation = () => {
    setBoughtStocks([...boughtStocks, stockBuy]);
    const updateBugdet = Number(budget) - Number(price);
    setBudget(updateBugdet);
    updateAmount();
    setQtd("");
    setPrice("");
  };

  const updateAmount = () => {
    console.log(stocks.filter((stock) => stock === stockBuy).map((stock) => stock.amount = stock.amount - qtd));
    setStocks(stocks);
  };

  return (
    <div className="w-full h-full flex justify-center items-center flex-col">
      <div className="overflow-y-auto no-scrollbar">
        <h2>Available for investing</h2>
        <table className="table table-zebra inline-flex flex-col gap-2 w-96 p-12 bg-white rounded-md shadow-xl ">
          <thead>
            <tr>
              <th>Ação</th>
              <th>Qtde</th>
              <th>Valor( R$ )/un</th>
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
                      onClick={handleBuy}
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
              {warning ? (
                <div>
                  <div className="input-group">
                    <button className="btn btn-square" onClick={handleSub}>
                      -
                    </button>
                    <input
                      type="number"
                      name="qtde"
                      value={qtd}
                      onChange={handleQtd}
                      className="input input-bordered w-20"
                      min="0"
                      max={stockBuy.amount}
                      step="10"
                    />
                    <button className="btn btn-square" onClick={handleAdd}>
                      +
                    </button>
                  </div>
                  <p className="label-text-alt my-2">Quantidade indisponível</p>
                </div>
              ) : (
                <div className="input-group">
                  <button className="btn btn-square" onClick={handleSub}>
                    -
                  </button>
                  <input
                    type="number"
                    name="qtde"
                    value={qtd}
                    onChange={handleQtd}
                    className="input input-bordered w-20"
                    min="0"
                    max={stockBuy.amount}
                    step="10"
                  />
                  <button className="btn btn-square" onClick={handleAdd}>
                    +
                  </button>
                </div>
              )}
            </div>
            <div className="form-control w-full gap-2">
              <label className="input-group input-group-sm" htmlFor="buy">
                <span className="w-28" name="buy">
                  Comprar
                </span>
                <input
                  type="text"
                  className="input input-bordered input-sm w-40"
                />
              </label>
              <label className="input-group input-group-sm" htmlFor="sell">
                <span className="w-28" name="sell">
                  Vender
                </span>
                <input
                  type="text"
                  className="input input-bordered input-sm w-40"
                />
              </label>
            </div>
            <div className="divider"></div>
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
                  onClick={handleNegociation}
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
                  onClick={handleNegociation}
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
