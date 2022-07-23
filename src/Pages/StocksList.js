import React from 'react';
import MyStocksTable from '../components/MyStocksTable';
import Header from '../components/Header';
import Navigation from '../components/Navigation';
import NegociationModal from '../components/NegociationModal';
import StocksTable from '../components/StocksTable';

function StocksList() {
  return (
    <div className="w-full h-full flex justify-center items-center flex-col">
      <div className="overflow-y-auto no-scrollbar sm:max-h-screen">
        <Header />
        <MyStocksTable />
        <StocksTable />
        <NegociationModal />
        <Navigation />
      </div>
    </div>
  );
}

export default StocksList;
