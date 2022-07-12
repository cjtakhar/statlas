import './App.css';
import Dashboard from './components/dashboard'; 
import Login from './components/login';
import Stats from './components/stats';
import Ye from './components/kanye';

import {BrowserRouter, Routes, Route} from 'react-router-dom';

export default function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={ < Login /> } />
          <Route path="/statlas" element={ < Dashboard />} />
          <Route path="/stats" element={ < Stats /> } />
          <Route path="/ye" element={ < Ye /> } />
        </Routes>
      </BrowserRouter>
    </div>
  );
}