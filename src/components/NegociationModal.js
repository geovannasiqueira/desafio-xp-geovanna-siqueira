import React, { useContext } from 'react';
import AppContext from '../context/AppContext';
import NegotiationInput from './NegociationInput';
import QuantityBtn from './QuantityBtn';
import TotalText from './TotalText';

function NegociationModal() {
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
    setBuyValue,
    action,
  } = useContext(AppContext);

  const enableButton = () => {
    if (price > budget) {
      return true;
    }
    if (Number(qtd) === 0) {
      return(true);
    }
    return false;
  };

  const handleConfirm = ({ target }) => {
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
    <div>
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
          <QuantityBtn />
          <NegotiationInput />
          <div className="divider"></div>
          <TotalText text="Tipo de ação" value={action} />
          <TotalText text="Preço por unidade" value={`R$ ${stockBuy.price}`}/>
          <TotalText text="Quantidade de Ações" value={qtd} />
          <TotalText text="Zero" value="Zero" />
          <div className="divider m-0"></div>
          <TotalText text="Total" value={`R$ ${price}`} total={true}/>
          <div>
            <button
              type="button"
              className="btn mt-4"
              onClick={handleConfirm}
              disabled={enableButton()}
            >
              Confirmar
            </button>
            {enableButton() && (
              <p className="label-text-alt my-2">Quantidade indisponível</p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default NegociationModal;
