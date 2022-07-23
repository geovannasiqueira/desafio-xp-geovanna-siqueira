import React, { useContext, useEffect, useState } from "react";
import AppContext from "../context/AppContext";

function QuantityBtn() {
  const { stockBuy, qtd, setQtd, setPrice } = useContext(AppContext);
  const [warning, setWarning] = useState(false);

  useEffect(() => {
    if (qtd < 0) {
      setWarning(true);
    }
    setWarning(false);
    sumPrice();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [qtd]);

  const sumPrice = () => {
    if (qtd > 0) {
      setPrice((qtd * Number(stockBuy.price)).toFixed(2));
    }
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
    if (qtd === 0) {
      setQtd(0);
      setPrice(0);
    }
    setWarning(true);
  };

  const handleQtd = ({ target }) => {
    const qtde = target.value;
    setQtd(qtde);
    sumPrice();
  };

  return (
    <div className="form-control flex flex-col items center mb-4">
      <label htmlFor="qtde" className="mb-2">
        <p className="label-text"> Quantidade </p>
      </label>
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
      {warning && (
        <p className="label-text-alt my-2">Quantidade indisponível</p>
      )}
    </div>
  );
}

export default QuantityBtn;
