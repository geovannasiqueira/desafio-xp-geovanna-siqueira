import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import Login from "./Pages/Login";
import StocksList from "./Pages/StocksList";

function App() {
  return (
    <div className="App w-full h-full" data-theme="cupcake">
      <Router>
        <Routes>
          <Route exact path="/" element={<Login />} />
          <Route exact path="/stocks" element={<StocksList />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
