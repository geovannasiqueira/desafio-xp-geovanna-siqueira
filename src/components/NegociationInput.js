import React, { useContext } from 'react';
import AppContext from '../context/AppContext';

function NegotiationInput() {
  const {
    buyValue,
    sellValue,
    setSellValue,
    setBuyValue,
    setQtd,
    stockBuy,
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

  return (
    <div className="form-control w-full gap-2">
      <label className="input-group input-group-sm" htmlFor="buy">
        <span name="buy" className="w-28">
          Comprar
        </span>
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
        <span name="sell" className="w-28">
          Vender
        </span>
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
  );
}

export default NegotiationInput;
