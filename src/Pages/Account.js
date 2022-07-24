import React, { useContext, useEffect } from 'react';
import Header from '../components/Header';
import Navigation from '../components/Navigation';
import AppContext from '../context/AppContext';

function Account() {
  const { budget, setBudget, value, setValue } = useContext(AppContext);

  useEffect(() => {
    const updatedBugdet = JSON.parse(localStorage.getItem('budget')) || budget;
    setBudget(updatedBugdet);

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [budget]);

  const updateBugdet = ({ target }) => {
    if (target.id === 'deposit') {
      const newBugdet = Number(budget) + Number(value);
      setBudget(Number(budget) + Number(value));
      localStorage.setItem('budget', newBugdet);
      setValue('');
    }
    if (target.id === 'withdrawal') {
      if (Number(value) < Number(budget)) {
        const newBugdet = Number(budget) - Number(value);
        setBudget(Number(budget) - Number(value));
        localStorage.setItem('budget', newBugdet);
        setValue('');
      }
    }
  };

  const handleChange = ({ target }) => {
    const input = target.value;
    setValue(input);
  };

  return (
    <div className="w-full  h-full flex justify-center items-center flex-col">
      <div className="flex flex-col w-96 h-full  justify-around">
        <Header />
        <div className="flex justify-around bg-pink-100 w-full">
          <h1 className="text-lg font-bold">Saldo em Conta</h1>
          <h1 className="text-lg font-bold">R$ {Number(budget).toFixed(2)}</h1>
        </div>
        <div className="flex flex-col w-96 justify-around items-center">
          <input
            type="text"
            className="input input-bordered w-5/6"
            placeholder="Valor"
            value={value}
            onChange={handleChange}
          />
          <div className="flex justify-around gap-8 mt-6">
            <button className="btn w-36" id="deposit" onClick={updateBugdet}>
              Depositar
            </button>
            <button className="btn w-36" id="withdrawal" onClick={updateBugdet}>
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
