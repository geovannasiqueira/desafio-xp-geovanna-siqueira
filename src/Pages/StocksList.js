import React from 'react';
import MyStocksTable from '../components/MyStocksTable';
import NegociationModal from '../components/NegociationModal';
import StocksTable from '../components/StocksTable';

function StocksList() {
  return (
    <div className="w-full h-full flex justify-center items-center flex-col">
      <div className="overflow-y-auto no-scrollbar">
        <MyStocksTable />
        <StocksTable />
        <NegociationModal />
      </div>
    </div>
  );
}

export default StocksList;
