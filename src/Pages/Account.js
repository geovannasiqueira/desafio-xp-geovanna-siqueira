import React, { useContext } from 'react';
import Navigation from '../components/Navigation';
import AppContext from '../context/AppContext';

function Account() {
  const { budget, setBudget, value, setValue } = useContext(AppContext);

  const updateBugdet = ({ target }) => {
    if (target.id === 'deposit') {
      setBudget(Number(budget) + Number(value));
      setValue('');
    }
    if (target.id === 'withdrawal') {
      if (Number(value) < Number(budget)) {
        setBudget(Number(budget) - Number(value));
        setValue('');
      }
    }
  };

  const handleChange = ({ target }) => {
    const input = target.value;
    setValue(input);
  };

  return (
    <div className="w-full h-full flex justify-center items-center flex-col">
      <div className="flex flex-col w-96 mt-28 h-full gap-4 justify-around">
        <div className="flex justify-around bg-pink-100 w-full">
          <h1 className="text-lg font-bold">Saldo em Conta</h1>
          <h1 className="text-lg font-bold">R$ {budget.toFixed(2)}</h1>
        </div>
        <div className="flex flex-col w-96 justify-around">
          <input
            type="text"
            className="input input-bordered"
            placeholder="Valor"
            value={value}
            onChange={handleChange}
          />
          <div className="flex justify-around mt-6">
            <button className="btn w-40" id="deposit" onClick={updateBugdet}>
              Depositar
            </button>
            <button className="btn w-40" id="withdrawal" onClick={updateBugdet}>
              Sacar
            </button>
          </div>
        </div>
      </div>
      <Navigation />
    </div>
  );
}

export default Account;
