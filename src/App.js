import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './pages/Home/Index';
import Login from './pages/Login/Index';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="entrar" element={<Login />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
