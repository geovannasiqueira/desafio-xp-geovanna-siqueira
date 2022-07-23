import React from "react";
import MyStocksTable from "../components/MyStocksTable";
import Header from "../components/Header";
import Navigation from "../components/Navigation";
import NegociationModal from "../components/NegociationModal";
import StocksTable from "../components/StocksTable";

function StocksList() {
  return (
    <div className="w-full flex justify-center items-center flex-col h-fit">
      <Header />
      <div className="overflow-y-auto no-scrollbar">
        <MyStocksTable />
        <StocksTable />
        <NegociationModal />
      </div>
      <Navigation />
    </div>
  );
}

export default StocksList;
