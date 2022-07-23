import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import AppProvider from './context/AppProvider';
import Account from './Pages/Account';
import Login from './Pages/Login';
import StocksList from './Pages/StocksList';

function App() {
  return (
    <AppProvider>
      <div className="App w-full h-full" data-theme="cupcake">
        <Router>
          <Routes>
            <Route exact path='/' element={<Login />} />
            <Route exact path='/stocks' element={<StocksList />} />
            <Route exact path='/account' element={<Account />} />
          </Routes>
        </Router>
      </div>
    </AppProvider>
  );
}

export default App;
